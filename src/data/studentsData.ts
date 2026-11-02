// First Terminal Examination 2083 - Grade 11 "Computer Science"
// Auto-generated strictly from public/assets/aistudio/Grade_11_CS-_First_Term_2083_ledger_a44575ad

export interface SubjectMarks {
  theory: number | null;
  practical: number | null;
  theoryMax: number;
  practicalMax: number;
}

export type EngagementLevel = "Attentive" | "Passive" | "Highly Active" | "Distracted";
export type DivisionType = "DISTINCTION" | "First" | "Second" | "Fail";

export interface StudentRecord {
  sn: number;
  imageUrl: string;
  name: string;
  totalSchoolDays: number;
  daysPresent: number;
  attendancePct: number;
  nepali: SubjectMarks;
  english: SubjectMarks;
  social: SubjectMarks;
  math: SubjectMarks;
  account: SubjectMarks;
  economics: SubjectMarks;
  computer: SubjectMarks;
  obtainedTotalMarks: number;
  percentage: number;
  firstTermGpa: number;
  division: DivisionType;
  ledgerRank: number | null;
  seeGpa: number;
  classroomEngagement: EngagementLevel;
  strengthsAndWeaknesses: string;
}

export const STUDENTS_DATA: StudentRecord[] = [
  {
    "sn": 1,
    "imageUrl": "/assets/aistudio/aabishkar_c0c56216.jpg",
    "name": "AABISKAR LAMSAL",
    "totalSchoolDays": 85,
    "daysPresent": 81,
    "attendancePct": 95.3,
    "nepali": {
      "theory": 53,
      "practical": 23,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "english": {
      "theory": 56,
      "practical": 24,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "social": {
      "theory": null,
      "practical": null,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "math": {
      "theory": 54,
      "practical": 22,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "account": {
      "theory": 39,
      "practical": 21,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "economics": {
      "theory": 56,
      "practical": 23,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "computer": {
      "theory": 37,
      "practical": 46,
      "theoryMax": 50,
      "practicalMax": 50
    },
    "obtainedTotalMarks": 454,
    "percentage": 75.67,
    "firstTermGpa": 3.3,
    "division": "DISTINCTION",
    "ledgerRank": 17,
    "seeGpa": 3.24,
    "classroomEngagement": "Attentive",
    "strengthsAndWeaknesses": "Disciplined/Low Effort for better result"
  },
  {
    "sn": 2,
    "imageUrl": "",
    "name": "AAJISH SHRESTHA",
    "totalSchoolDays": 85,
    "daysPresent": 58,
    "attendancePct": 68.2,
    "nepali": {
      "theory": 45,
      "practical": 20,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "english": {
      "theory": 39,
      "practical": 21,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "social": {
      "theory": 41,
      "practical": 21,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "math": {
      "theory": null,
      "practical": null,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "account": {
      "theory": 31,
      "practical": 20,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "economics": {
      "theory": 60,
      "practical": 20,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "computer": {
      "theory": 20,
      "practical": 35,
      "theoryMax": 50,
      "practicalMax": 50
    },
    "obtainedTotalMarks": 373,
    "percentage": 62.17,
    "firstTermGpa": 2.82,
    "division": "First",
    "ledgerRank": 29,
    "seeGpa": 3.12,
    "classroomEngagement": "Passive",
    "strengthsAndWeaknesses": "Disciplined/Less Motivated in learning"
  },
  {
    "sn": 3,
    "imageUrl": "",
    "name": "AAKASH BAHADUR CHHETRI",
    "totalSchoolDays": 85,
    "daysPresent": 80,
    "attendancePct": 94.1,
    "nepali": {
      "theory": 54,
      "practical": 23,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "english": {
      "theory": 51,
      "practical": 23,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "social": {
      "theory": null,
      "practical": null,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "math": {
      "theory": 54,
      "practical": 22,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "account": {
      "theory": 42,
      "practical": 21,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "economics": {
      "theory": 60,
      "practical": 24,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "computer": {
      "theory": 27,
      "practical": 43,
      "theoryMax": 50,
      "practicalMax": 50
    },
    "obtainedTotalMarks": 444,
    "percentage": 74,
    "firstTermGpa": 3.18,
    "division": "First",
    "ledgerRank": 20,
    "seeGpa": 3.48,
    "classroomEngagement": "Attentive",
    "strengthsAndWeaknesses": "Disciplined/Low Effort for better result"
  },
  {
    "sn": 4,
    "imageUrl": "",
    "name": "AAYUSH GURUNG",
    "totalSchoolDays": 85,
    "daysPresent": 54,
    "attendancePct": 63.5,
    "nepali": {
      "theory": 53,
      "practical": 24,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "english": {
      "theory": 60,
      "practical": 24,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "social": {
      "theory": null,
      "practical": null,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "math": {
      "theory": 45,
      "practical": 22,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "account": {
      "theory": 27,
      "practical": 12,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "economics": {
      "theory": 60,
      "practical": 24,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "computer": {
      "theory": 37,
      "practical": 48,
      "theoryMax": 50,
      "practicalMax": 50
    },
    "obtainedTotalMarks": 436,
    "percentage": 72.67,
    "firstTermGpa": 3.18,
    "division": "First",
    "ledgerRank": 20,
    "seeGpa": 3.68,
    "classroomEngagement": "Highly Active",
    "strengthsAndWeaknesses": "Disciplined & Talented/Low priority in study"
  },
  {
    "sn": 5,
    "imageUrl": "",
    "name": "AAYUSH KARKI",
    "totalSchoolDays": 85,
    "daysPresent": 80,
    "attendancePct": 94.1,
    "nepali": {
      "theory": 50,
      "practical": 24,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "english": {
      "theory": 45,
      "practical": 22,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "social": {
      "theory": null,
      "practical": null,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "math": {
      "theory": 53,
      "practical": 22,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "account": {
      "theory": 53,
      "practical": 24,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "economics": {
      "theory": 54,
      "practical": 23,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "computer": {
      "theory": 46,
      "practical": 49,
      "theoryMax": 50,
      "practicalMax": 50
    },
    "obtainedTotalMarks": 465,
    "percentage": 77.5,
    "firstTermGpa": 3.38,
    "division": "DISTINCTION",
    "ledgerRank": 12,
    "seeGpa": 3.41,
    "classroomEngagement": "Highly Active",
    "strengthsAndWeaknesses": "Sincere/Need to be active in class"
  },
  {
    "sn": 6,
    "imageUrl": "",
    "name": "AAYUSHA LAKANDRI",
    "totalSchoolDays": 85,
    "daysPresent": 67,
    "attendancePct": 78.8,
    "nepali": {
      "theory": 63,
      "practical": 23,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "english": {
      "theory": 45,
      "practical": 22,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "social": {
      "theory": 65,
      "practical": 25,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "math": {
      "theory": null,
      "practical": null,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "account": {
      "theory": 41,
      "practical": 20,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "economics": {
      "theory": 53,
      "practical": 23,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "computer": {
      "theory": 43,
      "practical": 43,
      "theoryMax": 50,
      "practicalMax": 50
    },
    "obtainedTotalMarks": 466,
    "percentage": 77.67,
    "firstTermGpa": 3.36,
    "division": "DISTINCTION",
    "ledgerRank": 13,
    "seeGpa": 3.24,
    "classroomEngagement": "Attentive",
    "strengthsAndWeaknesses": "Sincere/Need to focus for good grade"
  },
  {
    "sn": 7,
    "imageUrl": "",
    "name": "ANUSHKA GUPTA",
    "totalSchoolDays": 85,
    "daysPresent": 71,
    "attendancePct": 83.5,
    "nepali": {
      "theory": 30,
      "practical": 22,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "english": {
      "theory": 53,
      "practical": 23,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "social": {
      "theory": null,
      "practical": null,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "math": {
      "theory": 27,
      "practical": 22,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "account": {
      "theory": 30,
      "practical": 20,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "economics": {
      "theory": 33,
      "practical": 22,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "computer": {
      "theory": 32,
      "practical": 45,
      "theoryMax": 50,
      "practicalMax": 50
    },
    "obtainedTotalMarks": 359,
    "percentage": 59.83,
    "firstTermGpa": 2.69,
    "division": "Second",
    "ledgerRank": 33,
    "seeGpa": 2.4,
    "classroomEngagement": "Attentive",
    "strengthsAndWeaknesses": "Sincere/Need to focus for good grade"
  },
  {
    "sn": 8,
    "imageUrl": "",
    "name": "ARYAN CHAPAGAIN",
    "totalSchoolDays": 85,
    "daysPresent": 72,
    "attendancePct": 84.7,
    "nepali": {
      "theory": 60,
      "practical": 23,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "english": {
      "theory": 57,
      "practical": 23,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "social": {
      "theory": null,
      "practical": null,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "math": {
      "theory": 45,
      "practical": 22,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "account": {
      "theory": 41,
      "practical": 21,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "economics": {
      "theory": 50,
      "practical": 23,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "computer": {
      "theory": 45,
      "practical": 45,
      "theoryMax": 50,
      "practicalMax": 50
    },
    "obtainedTotalMarks": 455,
    "percentage": 75.83,
    "firstTermGpa": 3.33,
    "division": "DISTINCTION",
    "ledgerRank": 15,
    "seeGpa": 3.52,
    "classroomEngagement": "Attentive",
    "strengthsAndWeaknesses": "Sincere/Need to focus for good grade"
  },
  {
    "sn": 9,
    "imageUrl": "",
    "name": "ASHWIN DHAKAL",
    "totalSchoolDays": 85,
    "daysPresent": 79,
    "attendancePct": 92.9,
    "nepali": {
      "theory": 30,
      "practical": 21,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "english": {
      "theory": 36,
      "practical": 20,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "social": {
      "theory": 57,
      "practical": 24,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "math": {
      "theory": null,
      "practical": null,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "account": {
      "theory": 30,
      "practical": 21,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "economics": {
      "theory": 39,
      "practical": 22,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "computer": {
      "theory": 21,
      "practical": 35,
      "theoryMax": 50,
      "practicalMax": 50
    },
    "obtainedTotalMarks": 356,
    "percentage": 59.33,
    "firstTermGpa": 2.64,
    "division": "Second",
    "ledgerRank": 34,
    "seeGpa": 3.03,
    "classroomEngagement": "Passive",
    "strengthsAndWeaknesses": "Sincere/Need to be active in class"
  },
  {
    "sn": 10,
    "imageUrl": "",
    "name": "BASHISTHA THAPA",
    "totalSchoolDays": 85,
    "daysPresent": 66,
    "attendancePct": 77.6,
    "nepali": {
      "theory": 33,
      "practical": 21,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "english": {
      "theory": 35,
      "practical": 20,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "social": {
      "theory": 60,
      "practical": 24,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "math": {
      "theory": null,
      "practical": null,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "account": {
      "theory": 48,
      "practical": 21,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "economics": {
      "theory": 39,
      "practical": 22,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "computer": {
      "theory": 18,
      "practical": 35,
      "theoryMax": 50,
      "practicalMax": 50
    },
    "obtainedTotalMarks": 376,
    "percentage": 62.67,
    "firstTermGpa": 2.74,
    "division": "First",
    "ledgerRank": 32,
    "seeGpa": 3.12,
    "classroomEngagement": "Passive",
    "strengthsAndWeaknesses": "Sincere/Need to be active in class"
  },
  {
    "sn": 11,
    "imageUrl": "",
    "name": "BIBASH SARU",
    "totalSchoolDays": 85,
    "daysPresent": 72,
    "attendancePct": 84.7,
    "nepali": {
      "theory": 60,
      "practical": 23,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "english": {
      "theory": 60,
      "practical": 24,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "social": {
      "theory": 63,
      "practical": 24,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "math": {
      "theory": null,
      "practical": null,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "account": {
      "theory": 60,
      "practical": 21,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "economics": {
      "theory": 63,
      "practical": 24,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "computer": {
      "theory": 47,
      "practical": 49,
      "theoryMax": 50,
      "practicalMax": 50
    },
    "obtainedTotalMarks": 518,
    "percentage": 86.33,
    "firstTermGpa": 3.74,
    "division": "DISTINCTION",
    "ledgerRank": 4,
    "seeGpa": 3.74,
    "classroomEngagement": "Attentive",
    "strengthsAndWeaknesses": "Sincere & Hardworking/Need to be competitive with other"
  },
  {
    "sn": 12,
    "imageUrl": "",
    "name": "BIBEK KHARAL",
    "totalSchoolDays": 85,
    "daysPresent": 70,
    "attendancePct": 82.4,
    "nepali": {
      "theory": 60,
      "practical": 23,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "english": {
      "theory": 57,
      "practical": 24,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "social": {
      "theory": 69,
      "practical": 25,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "math": {
      "theory": null,
      "practical": null,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "account": {
      "theory": 54,
      "practical": 22,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "economics": {
      "theory": 62,
      "practical": 24,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "computer": {
      "theory": 41,
      "practical": 48,
      "theoryMax": 50,
      "practicalMax": 50
    },
    "obtainedTotalMarks": 509,
    "percentage": 84.83,
    "firstTermGpa": 3.65,
    "division": "DISTINCTION",
    "ledgerRank": 6,
    "seeGpa": 3.6,
    "classroomEngagement": "Highly Active",
    "strengthsAndWeaknesses": "Sincere /Less hardworking nature"
  },
  {
    "sn": 13,
    "imageUrl": "",
    "name": "BISHAL NEUPANE",
    "totalSchoolDays": 85,
    "daysPresent": 76,
    "attendancePct": 89.4,
    "nepali": {
      "theory": 68,
      "practical": 24,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "english": {
      "theory": 60,
      "practical": 24,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "social": {
      "theory": 69,
      "practical": 25,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "math": {
      "theory": null,
      "practical": null,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "account": {
      "theory": 63,
      "practical": 22,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "economics": {
      "theory": 72,
      "practical": 24,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "computer": {
      "theory": 47,
      "practical": 50,
      "theoryMax": 50,
      "practicalMax": 50
    },
    "obtainedTotalMarks": 548,
    "percentage": 91.33,
    "firstTermGpa": 3.89,
    "division": "DISTINCTION",
    "ledgerRank": 2,
    "seeGpa": 3.61,
    "classroomEngagement": "Highly Active",
    "strengthsAndWeaknesses": "Discipline, Hardworking and Sincere"
  },
  {
    "sn": 14,
    "imageUrl": "",
    "name": "CHANDU KUNWAR",
    "totalSchoolDays": 85,
    "daysPresent": 75,
    "attendancePct": 88.2,
    "nepali": {
      "theory": 48,
      "practical": 24,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "english": {
      "theory": 60,
      "practical": 23,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "social": {
      "theory": null,
      "practical": null,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "math": {
      "theory": 45,
      "practical": 22,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "account": {
      "theory": 47,
      "practical": 23,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "economics": {
      "theory": 62,
      "practical": 24,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "computer": {
      "theory": 45,
      "practical": 50,
      "theoryMax": 50,
      "practicalMax": 50
    },
    "obtainedTotalMarks": 473,
    "percentage": 78.83,
    "firstTermGpa": 3.44,
    "division": "DISTINCTION",
    "ledgerRank": 10,
    "seeGpa": 3.48,
    "classroomEngagement": "Highly Active",
    "strengthsAndWeaknesses": "Sincere & Hardworking/Need to be competitive with other"
  },
  {
    "sn": 15,
    "imageUrl": "",
    "name": "DIBYA DEVKOTA",
    "totalSchoolDays": 85,
    "daysPresent": 6,
    "attendancePct": 7.1,
    "nepali": {
      "theory": 47,
      "practical": 20,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "english": {
      "theory": 48,
      "practical": 22,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "social": {
      "theory": 39,
      "practical": 22,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "math": {
      "theory": null,
      "practical": null,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "account": {
      "theory": 27,
      "practical": 21,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "economics": {
      "theory": 2,
      "practical": 21,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "computer": {
      "theory": 25,
      "practical": 40,
      "theoryMax": 50,
      "practicalMax": 50
    },
    "obtainedTotalMarks": 334,
    "percentage": 55.67,
    "firstTermGpa": 0,
    "division": "Fail",
    "ledgerRank": null,
    "seeGpa": 3.11,
    "classroomEngagement": "Attentive",
    "strengthsAndWeaknesses": "Sincere & Hardworking/Need to be competitive with other"
  },
  {
    "sn": 16,
    "imageUrl": "",
    "name": "DIVYA KHAWAS",
    "totalSchoolDays": 85,
    "daysPresent": 79,
    "attendancePct": 92.9,
    "nepali": {
      "theory": 65,
      "practical": 24,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "english": {
      "theory": 65,
      "practical": 24,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "social": {
      "theory": 74,
      "practical": 25,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "math": {
      "theory": null,
      "practical": null,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "account": {
      "theory": 68,
      "practical": 23,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "economics": {
      "theory": 71,
      "practical": 24,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "computer": {
      "theory": 48,
      "practical": 50,
      "theoryMax": 50,
      "practicalMax": 50
    },
    "obtainedTotalMarks": 561,
    "percentage": 93.5,
    "firstTermGpa": 3.9,
    "division": "DISTINCTION",
    "ledgerRank": 1,
    "seeGpa": 3.7,
    "classroomEngagement": "Highly Active",
    "strengthsAndWeaknesses": "Discipline, Hardworking and Sincere"
  },
  {
    "sn": 17,
    "imageUrl": "",
    "name": "GAURAV SAPKOTA",
    "totalSchoolDays": 85,
    "daysPresent": 74,
    "attendancePct": 87.1,
    "nepali": {
      "theory": 57,
      "practical": 20,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "english": {
      "theory": 48,
      "practical": 22,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "social": {
      "theory": null,
      "practical": null,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "math": {
      "theory": 27,
      "practical": 22,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "account": {
      "theory": 31,
      "practical": 21,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "economics": {
      "theory": 60,
      "practical": 23,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "computer": {
      "theory": 40,
      "practical": 45,
      "theoryMax": 50,
      "practicalMax": 50
    },
    "obtainedTotalMarks": 416,
    "percentage": 69.33,
    "firstTermGpa": 3.06,
    "division": "First",
    "ledgerRank": 22,
    "seeGpa": 3.31,
    "classroomEngagement": "Attentive",
    "strengthsAndWeaknesses": "Smart student/But Need to be active and happy in class"
  },
  {
    "sn": 18,
    "imageUrl": "",
    "name": "GEETA THAPA",
    "totalSchoolDays": 85,
    "daysPresent": 74,
    "attendancePct": 87.1,
    "nepali": {
      "theory": 50,
      "practical": 23,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "english": {
      "theory": 46,
      "practical": 22,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "social": {
      "theory": 52,
      "practical": 24,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "math": {
      "theory": null,
      "practical": null,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "account": {
      "theory": 56,
      "practical": 23,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "economics": {
      "theory": 57,
      "practical": 23,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "computer": {
      "theory": 43,
      "practical": 46,
      "theoryMax": 50,
      "practicalMax": 50
    },
    "obtainedTotalMarks": 465,
    "percentage": 77.5,
    "firstTermGpa": 3.31,
    "division": "DISTINCTION",
    "ledgerRank": 16,
    "seeGpa": 3.56,
    "classroomEngagement": "Highly Active",
    "strengthsAndWeaknesses": "Sincere & Hardworking/Need to be competitive with other"
  },
  {
    "sn": 19,
    "imageUrl": "",
    "name": "HARISH UPADHAYA",
    "totalSchoolDays": 85,
    "daysPresent": 48,
    "attendancePct": 56.5,
    "nepali": {
      "theory": 62,
      "practical": 24,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "english": {
      "theory": 54,
      "practical": 23,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "social": {
      "theory": null,
      "practical": null,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "math": {
      "theory": 65,
      "practical": 23,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "account": {
      "theory": 71,
      "practical": 23,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "economics": {
      "theory": 63,
      "practical": 24,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "computer": {
      "theory": 49,
      "practical": 50,
      "theoryMax": 50,
      "practicalMax": 50
    },
    "obtainedTotalMarks": 531,
    "percentage": 88.5,
    "firstTermGpa": 3.76,
    "division": "DISTINCTION",
    "ledgerRank": 3,
    "seeGpa": 3.82,
    "classroomEngagement": "Highly Active",
    "strengthsAndWeaknesses": "Sincere, Smart & Hardworking/Need to be competitive with other"
  },
  {
    "sn": 20,
    "imageUrl": "",
    "name": "HEMANTA GIRI",
    "totalSchoolDays": 85,
    "daysPresent": 80,
    "attendancePct": 94.1,
    "nepali": {
      "theory": 63,
      "practical": 24,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "english": {
      "theory": 51,
      "practical": 23,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "social": {
      "theory": null,
      "practical": null,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "math": {
      "theory": 65,
      "practical": 23,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "account": {
      "theory": 71,
      "practical": 25,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "economics": {
      "theory": 65,
      "practical": 24,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "computer": {
      "theory": 46,
      "practical": 50,
      "theoryMax": 50,
      "practicalMax": 50
    },
    "obtainedTotalMarks": 530,
    "percentage": 88.33,
    "firstTermGpa": 3.71,
    "division": "DISTINCTION",
    "ledgerRank": 5,
    "seeGpa": 3.46,
    "classroomEngagement": "Highly Active",
    "strengthsAndWeaknesses": "Sincere, Smart & Hardworking/Need to be competitive with other"
  },
  {
    "sn": 21,
    "imageUrl": "",
    "name": "JASMIN SOMAI MAGAR",
    "totalSchoolDays": 85,
    "daysPresent": 71,
    "attendancePct": 83.5,
    "nepali": {
      "theory": 56,
      "practical": 21,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "english": {
      "theory": 51,
      "practical": 23,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "social": {
      "theory": 65,
      "practical": 25,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "math": {
      "theory": null,
      "practical": null,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "account": {
      "theory": 53,
      "practical": 21,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "economics": {
      "theory": 50,
      "practical": 23,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "computer": {
      "theory": 38,
      "practical": 43,
      "theoryMax": 50,
      "practicalMax": 50
    },
    "obtainedTotalMarks": 469,
    "percentage": 78.17,
    "firstTermGpa": 3.31,
    "division": "DISTINCTION",
    "ledgerRank": 16,
    "seeGpa": 3.06,
    "classroomEngagement": "Attentive",
    "strengthsAndWeaknesses": "Sincere & Hardworking/Need to be competitive with other"
  },
  {
    "sn": 22,
    "imageUrl": "",
    "name": "JENISHA KHATI",
    "totalSchoolDays": 85,
    "daysPresent": 80,
    "attendancePct": 94.1,
    "nepali": {
      "theory": 42,
      "practical": 21,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "english": {
      "theory": 46,
      "practical": 22,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "social": {
      "theory": null,
      "practical": null,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "math": {
      "theory": 53,
      "practical": 22,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "account": {
      "theory": 45,
      "practical": 21,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "economics": {
      "theory": 47,
      "practical": 23,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "computer": {
      "theory": 22,
      "practical": 35,
      "theoryMax": 50,
      "practicalMax": 50
    },
    "obtainedTotalMarks": 399,
    "percentage": 66.5,
    "firstTermGpa": 2.93,
    "division": "First",
    "ledgerRank": 24,
    "seeGpa": 3.39,
    "classroomEngagement": "Distracted",
    "strengthsAndWeaknesses": "Sincere /Less hardworking nature"
  },
  {
    "sn": 23,
    "imageUrl": "",
    "name": "LAVISH THAPA",
    "totalSchoolDays": 85,
    "daysPresent": 69,
    "attendancePct": 81.2,
    "nepali": {
      "theory": 45,
      "practical": 20,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "english": {
      "theory": 48,
      "practical": 22,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "social": {
      "theory": null,
      "practical": null,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "math": {
      "theory": 50,
      "practical": 22,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "account": {
      "theory": 33,
      "practical": 21,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "economics": {
      "theory": 57,
      "practical": 23,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "computer": {
      "theory": 25,
      "practical": 48,
      "theoryMax": 50,
      "practicalMax": 50
    },
    "obtainedTotalMarks": 414,
    "percentage": 69,
    "firstTermGpa": 2.99,
    "division": "First",
    "ledgerRank": 23,
    "seeGpa": 3.13,
    "classroomEngagement": "Attentive",
    "strengthsAndWeaknesses": "Sincere /Less hardworking nature"
  },
  {
    "sn": 24,
    "imageUrl": "",
    "name": "LAXUMAN SAPKOTA",
    "totalSchoolDays": 85,
    "daysPresent": 78,
    "attendancePct": 91.8,
    "nepali": {
      "theory": 62,
      "practical": 25,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "english": {
      "theory": 56,
      "practical": 23,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "social": {
      "theory": null,
      "practical": null,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "math": {
      "theory": 63,
      "practical": 23,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "account": {
      "theory": 65,
      "practical": 24,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "economics": {
      "theory": 72,
      "practical": 24,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "computer": {
      "theory": 50,
      "practical": 50,
      "theoryMax": 50,
      "practicalMax": 50
    },
    "obtainedTotalMarks": 537,
    "percentage": 89.5,
    "firstTermGpa": 3.76,
    "division": "DISTINCTION",
    "ledgerRank": 3,
    "seeGpa": 3.68,
    "classroomEngagement": "Highly Active",
    "strengthsAndWeaknesses": "Sincere, Smart & Hardworking/Need to be competitive with other"
  },
  {
    "sn": 25,
    "imageUrl": "",
    "name": "MAUSAM PUN MAGAR",
    "totalSchoolDays": 85,
    "daysPresent": 76,
    "attendancePct": 89.4,
    "nepali": {
      "theory": 30,
      "practical": 24,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "english": {
      "theory": 51,
      "practical": 23,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "social": {
      "theory": null,
      "practical": null,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "math": {
      "theory": 33,
      "practical": 22,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "account": {
      "theory": 36,
      "practical": 21,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "economics": {
      "theory": 45,
      "practical": 22,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "computer": {
      "theory": 45,
      "practical": 46,
      "theoryMax": 50,
      "practicalMax": 50
    },
    "obtainedTotalMarks": 398,
    "percentage": 66.33,
    "firstTermGpa": 2.92,
    "division": "First",
    "ledgerRank": 25,
    "seeGpa": 3.3,
    "classroomEngagement": "Attentive",
    "strengthsAndWeaknesses": "Sincere/Need to be active in class"
  },
  {
    "sn": 26,
    "imageUrl": "",
    "name": "MAUSAM SHAKYA",
    "totalSchoolDays": 85,
    "daysPresent": 73,
    "attendancePct": 85.9,
    "nepali": {
      "theory": 30,
      "practical": 24,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "english": {
      "theory": 38,
      "practical": 20,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "social": {
      "theory": 38,
      "practical": 21,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "math": {
      "theory": null,
      "practical": null,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "account": {
      "theory": 27,
      "practical": 18,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "economics": {
      "theory": 33,
      "practical": 21,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "computer": {
      "theory": 33,
      "practical": 45,
      "theoryMax": 50,
      "practicalMax": 50
    },
    "obtainedTotalMarks": 348,
    "percentage": 58,
    "firstTermGpa": 2.62,
    "division": "Second",
    "ledgerRank": 35,
    "seeGpa": 3.27,
    "classroomEngagement": "Attentive",
    "strengthsAndWeaknesses": "Sincere/Need to be active in class"
  },
  {
    "sn": 27,
    "imageUrl": "",
    "name": "MAUSAMI PUN",
    "totalSchoolDays": 85,
    "daysPresent": 76,
    "attendancePct": 89.4,
    "nepali": {
      "theory": 45,
      "practical": 21,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "english": {
      "theory": 51,
      "practical": 23,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "social": {
      "theory": 54,
      "practical": 24,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "math": {
      "theory": null,
      "practical": null,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "account": {
      "theory": 30,
      "practical": 21,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "economics": {
      "theory": 35,
      "practical": 21,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "computer": {
      "theory": 18,
      "practical": 38,
      "theoryMax": 50,
      "practicalMax": 50
    },
    "obtainedTotalMarks": 381,
    "percentage": 63.5,
    "firstTermGpa": 2.76,
    "division": "First",
    "ledgerRank": 31,
    "seeGpa": 2.86,
    "classroomEngagement": "Attentive",
    "strengthsAndWeaknesses": "Sincere/Need to be active in class"
  },
  {
    "sn": 28,
    "imageUrl": "",
    "name": "NIRJALA SILWAL",
    "totalSchoolDays": 85,
    "daysPresent": 67,
    "attendancePct": 78.8,
    "nepali": {
      "theory": 63,
      "practical": 24,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "english": {
      "theory": 53,
      "practical": 23,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "social": {
      "theory": null,
      "practical": null,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "math": {
      "theory": 61,
      "practical": 23,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "account": {
      "theory": 61,
      "practical": 23,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "economics": {
      "theory": 45,
      "practical": 23,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "computer": {
      "theory": 48,
      "practical": 50,
      "theoryMax": 50,
      "practicalMax": 50
    },
    "obtainedTotalMarks": 497,
    "percentage": 82.83,
    "firstTermGpa": 3.61,
    "division": "DISTINCTION",
    "ledgerRank": 7,
    "seeGpa": 3.75,
    "classroomEngagement": "Highly Active",
    "strengthsAndWeaknesses": "Sincere & Hardworking/Need to be competitive with other"
  },
  {
    "sn": 29,
    "imageUrl": "",
    "name": "NISHANT SHARMA DUMRE",
    "totalSchoolDays": 85,
    "daysPresent": 73,
    "attendancePct": 85.9,
    "nepali": {
      "theory": 30,
      "practical": 20,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "english": {
      "theory": 41,
      "practical": 22,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "social": {
      "theory": null,
      "practical": null,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "math": {
      "theory": 45,
      "practical": 22,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "account": {
      "theory": 31,
      "practical": 20,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "economics": {
      "theory": 38,
      "practical": 21,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "computer": {
      "theory": 37,
      "practical": 46,
      "theoryMax": 50,
      "practicalMax": 50
    },
    "obtainedTotalMarks": 373,
    "percentage": 62.17,
    "firstTermGpa": 2.81,
    "division": "First",
    "ledgerRank": 30,
    "seeGpa": 3.25,
    "classroomEngagement": "Highly Active",
    "strengthsAndWeaknesses": "Sincere & Hardworking/Need to be competitive with other"
  },
  {
    "sn": 30,
    "imageUrl": "",
    "name": "NIYATI SHRESTHA",
    "totalSchoolDays": 85,
    "daysPresent": 73,
    "attendancePct": 85.9,
    "nepali": {
      "theory": 60,
      "practical": 23,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "english": {
      "theory": 45,
      "practical": 22,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "social": {
      "theory": null,
      "practical": null,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "math": {
      "theory": 61,
      "practical": 23,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "account": {
      "theory": 15,
      "practical": 21,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "economics": {
      "theory": 36,
      "practical": 21,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "computer": {
      "theory": 35,
      "practical": 43,
      "theoryMax": 50,
      "practicalMax": 50
    },
    "obtainedTotalMarks": 405,
    "percentage": 67.5,
    "firstTermGpa": 0,
    "division": "Fail",
    "ledgerRank": null,
    "seeGpa": 3.18,
    "classroomEngagement": "Attentive",
    "strengthsAndWeaknesses": "Disciplined/Low Effort for better result"
  },
  {
    "sn": 31,
    "imageUrl": "",
    "name": "PRABIN SHARMA",
    "totalSchoolDays": 85,
    "daysPresent": 55,
    "attendancePct": 64.7,
    "nepali": {
      "theory": 30,
      "practical": 20,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "english": {
      "theory": 27,
      "practical": 20,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "social": {
      "theory": 27,
      "practical": 23,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "math": {
      "theory": null,
      "practical": null,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "account": {
      "theory": 9,
      "practical": 20,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "economics": {
      "theory": 41,
      "practical": 22,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "computer": {
      "theory": 20,
      "practical": 35,
      "theoryMax": 50,
      "practicalMax": 50
    },
    "obtainedTotalMarks": 294,
    "percentage": 49,
    "firstTermGpa": 0,
    "division": "Fail",
    "ledgerRank": null,
    "seeGpa": 2.64,
    "classroomEngagement": "Passive",
    "strengthsAndWeaknesses": "Disciplined/Low priority to study"
  },
  {
    "sn": 32,
    "imageUrl": "",
    "name": "PREKSHYA GC",
    "totalSchoolDays": 85,
    "daysPresent": 75,
    "attendancePct": 88.2,
    "nepali": {
      "theory": 50,
      "practical": 23,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "english": {
      "theory": 48,
      "practical": 22,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "social": {
      "theory": 60,
      "practical": 24,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "math": {
      "theory": null,
      "practical": null,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "account": {
      "theory": 17,
      "practical": 21,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "economics": {
      "theory": 53,
      "practical": 22,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "computer": {
      "theory": 36,
      "practical": 43,
      "theoryMax": 50,
      "practicalMax": 50
    },
    "obtainedTotalMarks": 419,
    "percentage": 69.83,
    "firstTermGpa": 0,
    "division": "Fail",
    "ledgerRank": null,
    "seeGpa": 3.15,
    "classroomEngagement": "Attentive",
    "strengthsAndWeaknesses": "Disciplined/Low priority to study"
  },
  {
    "sn": 33,
    "imageUrl": "",
    "name": "PRINCE PANDEY",
    "totalSchoolDays": 85,
    "daysPresent": 81,
    "attendancePct": 95.3,
    "nepali": {
      "theory": 45,
      "practical": 23,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "english": {
      "theory": 56,
      "practical": 23,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "social": {
      "theory": null,
      "practical": null,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "math": {
      "theory": 48,
      "practical": 22,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "account": {
      "theory": 35,
      "practical": 21,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "economics": {
      "theory": 41,
      "practical": 23,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "computer": {
      "theory": 43,
      "practical": 50,
      "theoryMax": 50,
      "practicalMax": 50
    },
    "obtainedTotalMarks": 430,
    "percentage": 71.67,
    "firstTermGpa": 3.09,
    "division": "First",
    "ledgerRank": 21,
    "seeGpa": 3.42,
    "classroomEngagement": "Highly Active",
    "strengthsAndWeaknesses": "Sincere, Smart /Need to be competitive with other"
  },
  {
    "sn": 34,
    "imageUrl": "",
    "name": "PRINCE SAPKOTA",
    "totalSchoolDays": 85,
    "daysPresent": 80,
    "attendancePct": 94.1,
    "nepali": {
      "theory": 54,
      "practical": 23,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "english": {
      "theory": 60,
      "practical": 23,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "social": {
      "theory": null,
      "practical": null,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "math": {
      "theory": 53,
      "practical": 22,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "account": {
      "theory": 41,
      "practical": 21,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "economics": {
      "theory": 57,
      "practical": 23,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "computer": {
      "theory": 45,
      "practical": 47,
      "theoryMax": 50,
      "practicalMax": 50
    },
    "obtainedTotalMarks": 469,
    "percentage": 78.17,
    "firstTermGpa": 3.43,
    "division": "DISTINCTION",
    "ledgerRank": 11,
    "seeGpa": 3.48,
    "classroomEngagement": "Attentive",
    "strengthsAndWeaknesses": "Sincere & Hardworking/Need to be competitive with other"
  },
  {
    "sn": 35,
    "imageUrl": "",
    "name": "RAJ THARU",
    "totalSchoolDays": 85,
    "daysPresent": 80,
    "attendancePct": 94.1,
    "nepali": {
      "theory": 63,
      "practical": 23,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "english": {
      "theory": 39,
      "practical": 24,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "social": {
      "theory": 60,
      "practical": 24,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "math": {
      "theory": null,
      "practical": null,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "account": {
      "theory": 39,
      "practical": 19,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "economics": {
      "theory": 51,
      "practical": 23,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "computer": {
      "theory": 35,
      "practical": 43,
      "theoryMax": 50,
      "practicalMax": 50
    },
    "obtainedTotalMarks": 443,
    "percentage": 73.83,
    "firstTermGpa": 3.22,
    "division": "First",
    "ledgerRank": 19,
    "seeGpa": 3.15,
    "classroomEngagement": "Attentive",
    "strengthsAndWeaknesses": "Sincere & Hardworking/Need to be competitive with other"
  },
  {
    "sn": 36,
    "imageUrl": "",
    "name": "RAM KUMAR KUMAL",
    "totalSchoolDays": 85,
    "daysPresent": 70,
    "attendancePct": 82.4,
    "nepali": {
      "theory": 32,
      "practical": 15,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "english": {
      "theory": 14,
      "practical": 18,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "social": {
      "theory": 42,
      "practical": 21,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "math": {
      "theory": null,
      "practical": null,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "account": {
      "theory": 1,
      "practical": 18,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "economics": {
      "theory": 27,
      "practical": 21,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "computer": {
      "theory": 18,
      "practical": 36,
      "theoryMax": 50,
      "practicalMax": 50
    },
    "obtainedTotalMarks": 263,
    "percentage": 43.83,
    "firstTermGpa": 0,
    "division": "Fail",
    "ledgerRank": null,
    "seeGpa": 2.54,
    "classroomEngagement": "Attentive",
    "strengthsAndWeaknesses": "Disciplined/Low priority to study"
  },
  {
    "sn": 37,
    "imageUrl": "",
    "name": "SABIN DEVKOTA",
    "totalSchoolDays": 85,
    "daysPresent": 80,
    "attendancePct": 94.1,
    "nepali": {
      "theory": 45,
      "practical": 23,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "english": {
      "theory": 45,
      "practical": 22,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "social": {
      "theory": 68,
      "practical": 25,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "math": {
      "theory": null,
      "practical": null,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "account": {
      "theory": 31,
      "practical": 21,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "economics": {
      "theory": 57,
      "practical": 23,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "computer": {
      "theory": 35,
      "practical": 47,
      "theoryMax": 50,
      "practicalMax": 50
    },
    "obtainedTotalMarks": 442,
    "percentage": 73.67,
    "firstTermGpa": 3.25,
    "division": "First",
    "ledgerRank": 18,
    "seeGpa": 3.11,
    "classroomEngagement": "Attentive",
    "strengthsAndWeaknesses": "Sincere & Hardworking/Need to be competitive with other"
  },
  {
    "sn": 38,
    "imageUrl": "",
    "name": "SALINA KAFLE",
    "totalSchoolDays": 85,
    "daysPresent": 79,
    "attendancePct": 92.9,
    "nepali": {
      "theory": 54,
      "practical": 23,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "english": {
      "theory": 54,
      "practical": 23,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "social": {
      "theory": 69,
      "practical": 25,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "math": {
      "theory": null,
      "practical": null,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "account": {
      "theory": 38,
      "practical": 22,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "economics": {
      "theory": 63,
      "practical": 24,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "computer": {
      "theory": 40,
      "practical": 48,
      "theoryMax": 50,
      "practicalMax": 50
    },
    "obtainedTotalMarks": 483,
    "percentage": 80.5,
    "firstTermGpa": 3.5,
    "division": "DISTINCTION",
    "ledgerRank": 8,
    "seeGpa": 3.24,
    "classroomEngagement": "Attentive",
    "strengthsAndWeaknesses": "Sincere & Hardworking/Need to be competitive with other"
  },
  {
    "sn": 39,
    "imageUrl": "",
    "name": "SAMIR RANA",
    "totalSchoolDays": 85,
    "daysPresent": 80,
    "attendancePct": 94.1,
    "nepali": {
      "theory": 53,
      "practical": 24,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "english": {
      "theory": 38,
      "practical": 21,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "social": {
      "theory": null,
      "practical": null,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "math": {
      "theory": 33,
      "practical": 22,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "account": {
      "theory": 38,
      "practical": 21,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "economics": {
      "theory": 30,
      "practical": 21,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "computer": {
      "theory": 43,
      "practical": 46,
      "theoryMax": 50,
      "practicalMax": 50
    },
    "obtainedTotalMarks": 390,
    "percentage": 65,
    "firstTermGpa": 2.91,
    "division": "First",
    "ledgerRank": 26,
    "seeGpa": 3.49,
    "classroomEngagement": "Attentive",
    "strengthsAndWeaknesses": "Sincere/Inactive in class and low effort in learning"
  },
  {
    "sn": 40,
    "imageUrl": "",
    "name": "SANJOG GURUNG",
    "totalSchoolDays": 85,
    "daysPresent": 63,
    "attendancePct": 74.1,
    "nepali": {
      "theory": 53,
      "practical": 21,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "english": {
      "theory": 40,
      "practical": 20,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "social": {
      "theory": 47,
      "practical": 21,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "math": {
      "theory": null,
      "practical": null,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "account": {
      "theory": 27,
      "practical": 15,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "economics": {
      "theory": 33,
      "practical": 21,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "computer": {
      "theory": 40,
      "practical": 42,
      "theoryMax": 50,
      "practicalMax": 50
    },
    "obtainedTotalMarks": 380,
    "percentage": 63.33,
    "firstTermGpa": 2.83,
    "division": "First",
    "ledgerRank": 28,
    "seeGpa": 3.52,
    "classroomEngagement": "Attentive",
    "strengthsAndWeaknesses": "Sincere/Inactive in class and low effort in learning"
  },
  {
    "sn": 41,
    "imageUrl": "",
    "name": "SARWAN CHHETRI",
    "totalSchoolDays": 85,
    "daysPresent": 70,
    "attendancePct": 82.4,
    "nepali": {
      "theory": 45,
      "practical": 23,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "english": {
      "theory": 48,
      "practical": 23,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "social": {
      "theory": 68,
      "practical": 25,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "math": {
      "theory": null,
      "practical": null,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "account": {
      "theory": 33,
      "practical": 19,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "economics": {
      "theory": 60,
      "practical": 24,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "computer": {
      "theory": 38,
      "practical": 46,
      "theoryMax": 50,
      "practicalMax": 50
    },
    "obtainedTotalMarks": 452,
    "percentage": 75.33,
    "firstTermGpa": 3.3,
    "division": "DISTINCTION",
    "ledgerRank": 17,
    "seeGpa": 3.24,
    "classroomEngagement": "Attentive",
    "strengthsAndWeaknesses": "Sincere & Hardworking/Need to be competitive with other"
  },
  {
    "sn": 42,
    "imageUrl": "",
    "name": "SAURAV MALLA",
    "totalSchoolDays": 85,
    "daysPresent": 79,
    "attendancePct": 92.9,
    "nepali": {
      "theory": 38,
      "practical": 23,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "english": {
      "theory": 51,
      "practical": 23,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "social": {
      "theory": null,
      "practical": null,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "math": {
      "theory": 68,
      "practical": 24,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "account": {
      "theory": 40,
      "practical": 21,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "economics": {
      "theory": 54,
      "practical": 23,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "computer": {
      "theory": 45,
      "practical": 48,
      "theoryMax": 50,
      "practicalMax": 50
    },
    "obtainedTotalMarks": 458,
    "percentage": 76.33,
    "firstTermGpa": 3.35,
    "division": "DISTINCTION",
    "ledgerRank": 14,
    "seeGpa": 3.51,
    "classroomEngagement": "Attentive",
    "strengthsAndWeaknesses": "Sincere & Hardworking/Need to be competitive with other"
  },
  {
    "sn": 43,
    "imageUrl": "",
    "name": "SAWARI SHRESTHA",
    "totalSchoolDays": 85,
    "daysPresent": 58,
    "attendancePct": 68.2,
    "nepali": {
      "theory": 53,
      "practical": 22,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "english": {
      "theory": 45,
      "practical": 22,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "social": {
      "theory": 53,
      "practical": 24,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "math": {
      "theory": null,
      "practical": null,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "account": {
      "theory": 2,
      "practical": 20,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "economics": {
      "theory": 51,
      "practical": 23,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "computer": {
      "theory": 36,
      "practical": 42,
      "theoryMax": 50,
      "practicalMax": 50
    },
    "obtainedTotalMarks": 393,
    "percentage": 65.5,
    "firstTermGpa": 0,
    "division": "Fail",
    "ledgerRank": null,
    "seeGpa": 2.99,
    "classroomEngagement": "Attentive",
    "strengthsAndWeaknesses": "Sincere & Hardworking/Need to be competitive with other"
  },
  {
    "sn": 44,
    "imageUrl": "",
    "name": "SHARADDA GAIRE",
    "totalSchoolDays": 85,
    "daysPresent": 81,
    "attendancePct": 95.3,
    "nepali": {
      "theory": 60,
      "practical": 23,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "english": {
      "theory": 60,
      "practical": 23,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "social": {
      "theory": null,
      "practical": null,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "math": {
      "theory": 57,
      "practical": 22,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "account": {
      "theory": 69,
      "practical": 24,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "economics": {
      "theory": 66,
      "practical": 24,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "computer": {
      "theory": 49,
      "practical": 49,
      "theoryMax": 50,
      "practicalMax": 50
    },
    "obtainedTotalMarks": 526,
    "percentage": 87.67,
    "firstTermGpa": 3.74,
    "division": "DISTINCTION",
    "ledgerRank": 4,
    "seeGpa": 3.41,
    "classroomEngagement": "Attentive",
    "strengthsAndWeaknesses": "Sincere & Hardworking/Need to be competitive with other"
  },
  {
    "sn": 45,
    "imageUrl": "",
    "name": "SMIRTI NEPALI",
    "totalSchoolDays": 85,
    "daysPresent": 67,
    "attendancePct": 78.8,
    "nepali": {
      "theory": 39,
      "practical": 20,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "english": {
      "theory": 45,
      "practical": 22,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "social": {
      "theory": 45,
      "practical": 24,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "math": {
      "theory": null,
      "practical": null,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "account": {
      "theory": 41,
      "practical": 21,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "economics": {
      "theory": 41,
      "practical": 22,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "computer": {
      "theory": 32,
      "practical": 43,
      "theoryMax": 50,
      "practicalMax": 50
    },
    "obtainedTotalMarks": 395,
    "percentage": 65.83,
    "firstTermGpa": 2.9,
    "division": "First",
    "ledgerRank": 27,
    "seeGpa": 2.9,
    "classroomEngagement": "Attentive",
    "strengthsAndWeaknesses": "Sincere & Hardworking/Need to be competitive with other"
  },
  {
    "sn": 46,
    "imageUrl": "",
    "name": "SUBASH CHHETRI",
    "totalSchoolDays": 85,
    "daysPresent": 61,
    "attendancePct": 71.8,
    "nepali": {
      "theory": 54,
      "practical": 23,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "english": {
      "theory": 56,
      "practical": 23,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "social": {
      "theory": null,
      "practical": null,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "math": {
      "theory": 30,
      "practical": 22,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "account": {
      "theory": 45,
      "practical": 21,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "economics": {
      "theory": 41,
      "practical": 22,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "computer": {
      "theory": 36,
      "practical": 45,
      "theoryMax": 50,
      "practicalMax": 50
    },
    "obtainedTotalMarks": 418,
    "percentage": 69.67,
    "firstTermGpa": 3.09,
    "division": "First",
    "ledgerRank": 21,
    "seeGpa": 3.74,
    "classroomEngagement": "Attentive",
    "strengthsAndWeaknesses": "Sincere & Hardworking/Need to be competitive with other"
  },
  {
    "sn": 47,
    "imageUrl": "",
    "name": "SUCHANA SUNAR",
    "totalSchoolDays": 85,
    "daysPresent": 64,
    "attendancePct": 75.3,
    "nepali": {
      "theory": 42,
      "practical": 21,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "english": {
      "theory": 42,
      "practical": 22,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "social": {
      "theory": 48,
      "practical": 24,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "math": {
      "theory": null,
      "practical": null,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "account": {
      "theory": 27,
      "practical": 21,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "economics": {
      "theory": 11,
      "practical": 21,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "computer": {
      "theory": 25,
      "practical": 42,
      "theoryMax": 50,
      "practicalMax": 50
    },
    "obtainedTotalMarks": 346,
    "percentage": 57.67,
    "firstTermGpa": 0,
    "division": "Fail",
    "ledgerRank": null,
    "seeGpa": 2.86,
    "classroomEngagement": "Attentive",
    "strengthsAndWeaknesses": "Sincere/Inactive in class and low effort in learning"
  },
  {
    "sn": 48,
    "imageUrl": "",
    "name": "SUDIP TAMANG",
    "totalSchoolDays": 85,
    "daysPresent": 77,
    "attendancePct": 90.6,
    "nepali": {
      "theory": 60,
      "practical": 23,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "english": {
      "theory": 48,
      "practical": 22,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "social": {
      "theory": null,
      "practical": null,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "math": {
      "theory": 33,
      "practical": 22,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "account": {
      "theory": 27,
      "practical": 21,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "economics": {
      "theory": 27,
      "practical": 21,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "computer": {
      "theory": 36,
      "practical": 46,
      "theoryMax": 50,
      "practicalMax": 50
    },
    "obtainedTotalMarks": 386,
    "percentage": 64.33,
    "firstTermGpa": 2.82,
    "division": "First",
    "ledgerRank": 29,
    "seeGpa": 3.41,
    "classroomEngagement": "Attentive",
    "strengthsAndWeaknesses": "Sincere/Inactive in class and low effort in learning"
  },
  {
    "sn": 49,
    "imageUrl": "",
    "name": "SUMIT THAPA",
    "totalSchoolDays": 85,
    "daysPresent": 55,
    "attendancePct": 64.7,
    "nepali": {
      "theory": 39,
      "practical": 20,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "english": {
      "theory": 45,
      "practical": 25,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "social": {
      "theory": 38,
      "practical": 21,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "math": {
      "theory": null,
      "practical": null,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "account": {
      "theory": 18,
      "practical": 20,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "economics": {
      "theory": 9,
      "practical": 21,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "computer": {
      "theory": 26,
      "practical": 38,
      "theoryMax": 50,
      "practicalMax": 50
    },
    "obtainedTotalMarks": 320,
    "percentage": 53.33,
    "firstTermGpa": 0,
    "division": "Fail",
    "ledgerRank": null,
    "seeGpa": 3.3,
    "classroomEngagement": "Passive",
    "strengthsAndWeaknesses": "Sincere/Inactive in class and low effort in learning"
  },
  {
    "sn": 50,
    "imageUrl": "",
    "name": "SUPRIM BAHADUR THAPA",
    "totalSchoolDays": 85,
    "daysPresent": 75,
    "attendancePct": 88.2,
    "nepali": {
      "theory": 35,
      "practical": 20,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "english": {
      "theory": 39,
      "practical": 21,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "social": {
      "theory": 27,
      "practical": 21,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "math": {
      "theory": null,
      "practical": null,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "account": {
      "theory": 11,
      "practical": 20,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "economics": {
      "theory": 1,
      "practical": 21,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "computer": {
      "theory": 25,
      "practical": 40,
      "theoryMax": 50,
      "practicalMax": 50
    },
    "obtainedTotalMarks": 281,
    "percentage": 46.83,
    "firstTermGpa": 0,
    "division": "Fail",
    "ledgerRank": null,
    "seeGpa": 2.9,
    "classroomEngagement": "Attentive",
    "strengthsAndWeaknesses": "Sincere/Inactive in class and low effort in learning"
  },
  {
    "sn": 51,
    "imageUrl": "",
    "name": "SUSHANT GHARTI MAGAR",
    "totalSchoolDays": 85,
    "daysPresent": 62,
    "attendancePct": 72.9,
    "nepali": {
      "theory": 30,
      "practical": 20,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "english": {
      "theory": 39,
      "practical": 21,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "social": {
      "theory": 32,
      "practical": 21,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "math": {
      "theory": null,
      "practical": null,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "account": {
      "theory": 8,
      "practical": 20,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "economics": {
      "theory": 5,
      "practical": 21,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "computer": {
      "theory": 27,
      "practical": 42,
      "theoryMax": 50,
      "practicalMax": 50
    },
    "obtainedTotalMarks": 286,
    "percentage": 47.67,
    "firstTermGpa": 0,
    "division": "Fail",
    "ledgerRank": null,
    "seeGpa": 3.11,
    "classroomEngagement": "Attentive",
    "strengthsAndWeaknesses": "Sincere/Inactive in class and low effort in learning"
  },
  {
    "sn": 52,
    "imageUrl": "",
    "name": "TIKI MAYA PHAL",
    "totalSchoolDays": 85,
    "daysPresent": 82,
    "attendancePct": 96.5,
    "nepali": {
      "theory": 54,
      "practical": 23,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "english": {
      "theory": 56,
      "practical": 23,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "social": {
      "theory": null,
      "practical": null,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "math": {
      "theory": 53,
      "practical": 22,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "account": {
      "theory": 60,
      "practical": 23,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "economics": {
      "theory": 48,
      "practical": 23,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "computer": {
      "theory": 45,
      "practical": 50,
      "theoryMax": 50,
      "practicalMax": 50
    },
    "obtainedTotalMarks": 480,
    "percentage": 80,
    "firstTermGpa": 3.49,
    "division": "DISTINCTION",
    "ledgerRank": 9,
    "seeGpa": 3.52,
    "classroomEngagement": "Highly Active",
    "strengthsAndWeaknesses": "Sincere & Hardworking/Need to be competitive with other"
  },
  {
    "sn": 53,
    "imageUrl": "",
    "name": "UJJWAL REGMI",
    "totalSchoolDays": 85,
    "daysPresent": 80,
    "attendancePct": 94.1,
    "nepali": {
      "theory": 65,
      "practical": 24,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "english": {
      "theory": 57,
      "practical": 23,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "social": {
      "theory": null,
      "practical": null,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "math": {
      "theory": 68,
      "practical": 24,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "account": {
      "theory": 63,
      "practical": 23,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "economics": {
      "theory": 60,
      "practical": 24,
      "theoryMax": 75,
      "practicalMax": 25
    },
    "computer": {
      "theory": 45,
      "practical": 50,
      "theoryMax": 50,
      "practicalMax": 50
    },
    "obtainedTotalMarks": 526,
    "percentage": 87.67,
    "firstTermGpa": 3.76,
    "division": "DISTINCTION",
    "ledgerRank": 3,
    "seeGpa": 3.69,
    "classroomEngagement": "Attentive",
    "strengthsAndWeaknesses": "Sincere & Hardworking/Need to be competitive with other"
  }
];
