export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    skills: [
      "Python",
      "RStudio",
      "SQL",
      "MATLAB",
      "LaTeX",
      "JavaScript",
      "C++",
      "Computational Mathematics",
      "Databases",
      "Maple"
    ],
  },
  {
    title: "Data & AI",
    skills: ["NumPy", "Pandas", "Scikit-Learn", "Machine Learning", "Statistical Data Analysis"],
  },
  {
    title: "Soft Skills",
    skills: ["Problem Solving", "Teamwork", "Adaptable"],
  },
];
