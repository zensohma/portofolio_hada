export interface Achievement {
  title: string;
  organization: string;
  date: string;
  description?: string;
  image?: string;
}

export const achievements: Achievement[] = [
  {
    title: "Finalis Kejurnas Skolastik dan Ruangguru",
    organization: "Ruangguru",
    date: "2023",
    description: "",
    image: "/certificates/kejurnas.jpg"
  },
  {
    title: "Certificate of Competence Application Programmer",
    organization: "Badan Nasional Sertifikasi Profesi (BNSP)",
    date: "Maret 2024 - Maret 2027",
    description: "",
    image: "/certificates/bnsp.jpg"
  },
  {
    title: "Scientific Computing with Python",
    organization: "FreeCodeCamp",
    date: "Maret 2025",
    description: "",
    image: "/certificates/scpython.png"
  },
  {
    title: "Memulai Pemrograman dengan Python",
    organization: "Dicoding Indonesia",
    date: "Juni 2022 - Juni 2025",
    description: "",
    image:"/certificates/pythondicoding.jpg"
  },
  {
    title: "Javascript Dasar Certification Skilvul",
    organization: "Skilvul",
    date: "Juli 2023",
    description: "",
    image: "/certificates/jsdasar.jpg"
  },
  {
    title: "Javascript Intermediate Certification Skilvul",
    organization: "Skilvul",
    date: "Juli 2023",
    description: "",
    image:"/certificates/jsintermediate.jpg"
  },
];
