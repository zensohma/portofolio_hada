export interface Project {
  name: string;
  description: string;
  stack: string[];
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    name: "Smarth Math Book Recommender (Development)",
    description:
      "Membuat sistem rekomendasi buku matematika berbasis machine learning menggunakan model K-Nearest Neighnbour",
    stack: [
      "Python",
      "Scikit-Learn",
      "FastAPI",
      "NextJS",
      "Typescript",
      "Tailwind CSS",
      "Pandas",
      "Numpy",
      "MySQL",
    ],
    github: "https://github.com/zensohma/smart-math-book-recommender",
  },
  {
    name: "Simulasi FIsika Interaktif",
    description:
      "Membuat simulasi dan Visualisasi gerak Pendulum, pegas, dan proyektil berbasis website",
    stack: ["HTML, CSS, Javascript"],
    github: "https://github.com/zensohma/simulasi_fisika_interaktif",
  },
  {
    name: "Aplikasi Dekstop untuk Metode Simpleks",
    description:
      "Aplikasi dekstop menentukan nilai minimum dan maksimum menggunakan metode simpleks.",
    stack: ["Python", "GUI Tkinter"],
    github: "https://github.com/zensohma/Projek-Riset-Operasi-1",
  },
  {
    name: "Matrix Engine",
    description:
      "Proyek pemrograman Python yang bertujuan untuk mempelajari dan mengimplementasikan algoritma-algoritma dasar hingga lanjut dalam Aljabar Linear",
    stack: ["Python"],
    github: "https://github.com/zensohma/matrix-engine/tree/main/matrix_engine",
  },
  {
    name: "Program Metode Numerik",
    description:
      "Program Python Interaktif metode numerik untuk menemukan akar dari suatu fungsi",
    stack: ["Python"],
    github: "https://github.com/zensohma/numerical_methods_program",
  },
];
