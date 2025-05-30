export interface Course {
  name: string;
  selected?: boolean;
}

// Primary school courses (P1-P6)
export const primaryCourses: Course[] = [
  { name: "Mathematics", selected: false },
  { name: "Kinyarwanda", selected: false },
  { name: "Science and Elementary Technology", selected: false },
  { name: "English", selected: false },
  { name: "Social Religious Studies", selected: false },
  { name: "Creative Arts", selected: false },
  { name: "Physical Education", selected: false },
  { name: "ICT", selected: false }
];

// Secondary school courses (S1-S6)
export const secondaryCourses: Course[] = [
  { name: "Mathematics", selected: false },
  { name: "English", selected: false },
  { name: "Kinyarwanda", selected: false },
  { name: "Physics", selected: false },
  { name: "Chemistry", selected: false },
  { name: "Biology", selected: false },
  { name: "Geography", selected: false },
  { name: "History", selected: false },
  { name: "Entrepreneurship", selected: false },
  { name: "ICT", selected: false },
  { name: "French", selected: false },
  { name: "Religious Studies", selected: false },
  { name: "Physical Education", selected: false },
  { name: "Creative Arts", selected: false }
];

// Advanced Level (S4-S6) combinations
export const advancedLevelCombinations = [
  {
    name: "PCM (Physics, Chemistry, Mathematics)",
    courses: [
      { name: "Physics", selected: false },
      { name: "Chemistry", selected: false },
      { name: "Mathematics", selected: false },
      { name: "General Paper", selected: false },
      { name: "ICT", selected: false }
    ]
  },
  {
    name: "PCB (Physics, Chemistry, Biology)",
    courses: [
      { name: "Physics", selected: false },
      { name: "Chemistry", selected: false },
      { name: "Biology", selected: false },
      { name: "General Paper", selected: false },
      { name: "ICT", selected: false }
    ]
  },
  {
    name: "MCB (Mathematics, Chemistry, Biology)",
    courses: [
      { name: "Mathematics", selected: false },
      { name: "Chemistry", selected: false },
      { name: "Biology", selected: false },
      { name: "General Paper", selected: false },
      { name: "ICT", selected: false }
    ]
  },
  {
    name: "BCG (Biology, Chemistry, Geography)",
    courses: [
      { name: "Biology", selected: false },
      { name: "Chemistry", selected: false },
      { name: "Geography", selected: false },
      { name: "General Paper", selected: false },
      { name: "ICT", selected: false }
    ]
  },
  {
    name: "PEG (Physics, Economics, Geography)",
    courses: [
      { name: "Physics", selected: false },
      { name: "Economics", selected: false },
      { name: "Geography", selected: false },
      { name: "General Paper", selected: false },
      { name: "ICT", selected: false }
    ]
  },
  {
    name: "HEG (History, Economics, Geography)",
    courses: [
      { name: "History", selected: false },
      { name: "Economics", selected: false },
      { name: "Geography", selected: false },
      { name: "General Paper", selected: false },
      { name: "ICT", selected: false }
    ]
  },
  {
    name: "LEG (Literature, Economics, Geography)",
    courses: [
      { name: "Literature", selected: false },
      { name: "Economics", selected: false },
      { name: "Geography", selected: false },
      { name: "General Paper", selected: false },
      { name: "ICT", selected: false }
    ]
  },
  {
    name: "LEH (Literature, Economics, History)",
    courses: [
      { name: "Literature", selected: false },
      { name: "Economics", selected: false },
      { name: "History", selected: false },
      { name: "General Paper", selected: false },
      { name: "ICT", selected: false }
    ]
  },
  {
    name: "MEG (Mathematics, Economics, Geography)",
    courses: [
      { name: "Mathematics", selected: false },
      { name: "Economics", selected: false },
      { name: "Geography", selected: false },
      { name: "General Paper", selected: false },
      { name: "ICT", selected: false }
    ]
  },
  {
    name: "MCE (Mathematics, Computer Science, Economics)",
    courses: [
      { name: "Mathematics", selected: false },
      { name: "Computer Science", selected: false },
      { name: "Economics", selected: false },
      { name: "General Paper", selected: false },
      { name: "ICT", selected: false }
    ]
  },
  {
    name: "MPC (Mathematics, Physics, Computer Science)",
    courses: [
      { name: "Mathematics", selected: false },
      { name: "Physics", selected: false },
      { name: "Computer Science", selected: false },
      { name: "General Paper", selected: false },
      { name: "ICT", selected: false }
    ]
  },
  {
    name: "HGL (History, Geography, Literature in English)",
    courses: [
      { name: "History", selected: false },
      { name: "Geography", selected: false },
      { name: "Literature in English", selected: false },
      { name: "General Paper", selected: false },
      { name: "ICT", selected: false }
    ]
  },
  {
    name: "LFK (Literature in English, French, Kinyarwanda)",
    courses: [
      { name: "Literature in English", selected: false },
      { name: "French", selected: false },
      { name: "Kinyarwanda", selected: false },
      { name: "General Paper", selected: false },
      { name: "ICT", selected: false }
    ]
  },
  {
    name: "LKK (Literature in English, Kiswahili, Kinyarwanda)",
    courses: [
      { name: "Literature in English", selected: false },
      { name: "Kiswahili", selected: false },
      { name: "Kinyarwanda", selected: false },
      { name: "General Paper", selected: false },
      { name: "ICT", selected: false }
    ]
  },
  {
    name: "LKF (Literature in English, Kiswahili, French)",
    courses: [
      { name: "Literature in English", selected: false },
      { name: "Kiswahili", selected: false },
      { name: "French", selected: false },
      { name: "General Paper", selected: false },
      { name: "ICT", selected: false }
    ]
  },
  {
    name: "Literature in English, French, Kinyarwanda & Kiswahili (new)",
    courses: [
      { name: "Literature in English", selected: false },
      { name: "French", selected: false },
      { name: "Kinyarwanda", selected: false },
      { name: "Kiswahili", selected: false },
      { name: "General Paper", selected: false },
      { name: "ICT", selected: false }
    ]
  }
];
