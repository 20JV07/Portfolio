/**
 * Obsah stránky Projekty.
 * Přidání projektu = nový objekt v poli projects.
 * Přílohy vkládej do public/projects/ a uveď cestu začínající /projects/.
 */
export type StudyLevel = "bachelor" | "secondary";

export type ProjectAttachment = {
  label: string;
  href: string;
  type: "pdf" | "zip";
};

export type PortfolioProject = {
  id: string;
  title: string;
  description: string;
  studyLevel: StudyLevel;
  year: number;
  /** Nepovinné datum YYYY-MM-DD pro řazení uvnitř stejného roku. */
  date?: string;
  /** Například název kurzu nebo školy. */
  context?: string;
  tags: string[];
  attachments: ProjectAttachment[];
};

export const studyLevels: {
  id: StudyLevel;
  title: string;
  description: string;
}[] = [
  {
    id: "bachelor",
    title: "Bakalářské studium",
    description: "Masarykova univerzita · Podniková informatika",
  },
  {
    id: "secondary",
    title: "Středoškolské studium",
    description: "Gymnázium Brno, Vídeňská · Programování 6l",
  },
];

// UKÁZKOVÝ OBSAH – nahraď vlastními projekty nebo položky smaž.
export const projects: PortfolioProject[] = [
  {
    id: "ukazka-vs-2026",
    title: "Ukázkový vysokoškolský projekt",
    description:
      "Zde bude stručná anotace projektu: jaký problém řešil, jaký postup byl použit a jaký byl výsledek. Popis může mít dvě až tři věty.",
    studyLevel: "bachelor",
    year: 2026,
    context: "Název předmětu · ukázka",
    tags: ["Analýza", "Python", "Studijní projekt"],
    attachments: [],
  },
  {
    id: "ukazka-ss-2025",
    title: "Výukový chatbot pro Programování",
    description:
      "Zde doplň popis práce, použitých technologií nebo metod a hlavní výstupy. Ke kartě lze připojit PDF, ZIP nebo oba typy souborů.",
    studyLevel: "secondary",
    year: 2025,
    context: "Středoškolská odborná činnost",
    tags: ["Programování", "AI", "SOČ"],
    attachments: [{
      label: "Plný text práce",
      href: "/projects/SOČ - Jakub Vávra - Výukový chatbot pro programování.pdf",
      type: "pdf",
    }],
  },
];

/*
 * PŘÍKLAD PŘILOŽENÍ SOUBORŮ (až je opravdu vložíš do public/projects/):
 * attachments: [
 *   { label: "Zobrazit práci", href: "/projects/moje-prace.pdf", type: "pdf" },
 *   { label: "Zdrojové soubory", href: "/projects/moje-prace.zip", type: "zip" },
 * ],
 */
