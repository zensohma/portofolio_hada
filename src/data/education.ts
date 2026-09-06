export interface EducationItem {
  institution: string;
  program: string;
  duration: string;
  details?: string[];
}

export const education: EducationItem[] = [
  {
    institution: "Universitas Mulawarman.",
    program: "Matematika, Sarjana",
    duration: "2024 – Sekarang",
    details: [
      "Fokus pada matematika terapan, persiapan karir di bidang ML/AI.",
      "Fokus pada matematika komputasi.",
      "Fokus pada Data Mining, Machine Learning, dan Analisis Data"
    ],
  },
  {
    institution: "SMK Negeri 7 Samarinda",
    program: "Rekayasa Perangkat Lunak",
    duration: "2021 - 2024",
    details: [
      "Fokus pada pengembangan perangkat lunak berbasis website, dekstop, dan mobile",
    ],
  },
];
