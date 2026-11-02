// Persistent Student Image Storage Engine (IndexedDB + localStorage + Image Compression)

const DB_NAME = 'Grade11CSDiagnosticDB';
const STORE_NAME = 'student_images';
const DB_VERSION = 1;
const LS_KEY = 'grade11_student_images';

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

// Compress and resize an uploaded image file so it fits comfortably in both localStorage and IndexedDB
export function compressImageFile(file: File, maxSize = 400, quality = 0.85): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > maxSize) {
            height = Math.round((height * maxSize) / width);
            width = maxSize;
          }
        } else {
          if (height > maxSize) {
            width = Math.round((width * maxSize) / height);
            height = maxSize;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          resolve(event.target?.result as string);
          return;
        }
        ctx.drawImage(img, 0, 0, width, height);
        const compressedDataUrl = canvas.toDataURL('image/jpeg', quality);
        resolve(compressedDataUrl);
      };
      img.onerror = () => resolve(event.target?.result as string);
      img.src = event.target?.result as string;
    };
    reader.onerror = (err) => reject(err);
    reader.readAsDataURL(file);
  });
}

// Synchronous initial load from localStorage for immediate zero-flicker hydration
export function getSavedImagesSync(): Record<number, string> {
  try {
    const saved = localStorage.getItem(LS_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch {
    // ignore
  }
  return {};
}

// Asynchronous full load from IndexedDB (merging with localStorage)
export async function loadAllSavedImages(): Promise<Record<number, string>> {
  const syncMap = getSavedImagesSync();
  try {
    const db = await openDB();
    return await new Promise<Record<number, string>>((resolve) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const req = store.getAll();
      const keysReq = store.getAllKeys();

      tx.oncomplete = () => {
        const result: Record<number, string> = { ...syncMap };
        const keys = keysReq.result;
        const values = req.result;
        keys.forEach((k, idx) => {
          const sn = Number(k);
          if (!isNaN(sn) && typeof values[idx] === 'string') {
            result[sn] = values[idx];
          }
        });
        resolve(result);
      };
      tx.onerror = () => resolve(syncMap);
    });
  } catch {
    return syncMap;
  }
}

// Save a single student's image to both localStorage and IndexedDB
export async function saveStudentImage(sn: number, dataUrl: string): Promise<void> {
  // 1. Update localStorage
  try {
    const current = getSavedImagesSync();
    current[sn] = dataUrl;
    localStorage.setItem(LS_KEY, JSON.stringify(current));
  } catch {
    // If localStorage hits quota, IndexedDB below still guarantees persistence
  }

  // 2. Update IndexedDB
  try {
    const db = await openDB();
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      store.put(dataUrl, sn);
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  } catch {
    // ignore
  }
}
