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
  /*{
    id: "ukazka-vs-2026",
    title: "Ukázkový vysokoškolský projekt",
    description:
      "Zde bude stručná anotace projektu: jaký problém řešil, jaký postup byl použit a jaký byl výsledek. Popis může mít dvě až tři věty.",
    studyLevel: "bachelor",
    year: 2026,
    context: "Název předmětu · ukázka",
    tags: ["Analýza", "Python", "Studijní projekt"],
    attachments: [],
  },*/
  {
    id: "soc-2025",
    title: "Výukový chatbot pro Programování",
    description: "Popis",
    studyLevel: "secondary",
    year: 2025,
    context: "Středoškolská odborná činnost",
    tags: ["Programování", "AI", "SOČ"],
    attachments: [
      {
        label: "Plný text odborné práce",
        href: "/projects/SOČ - Jakub Vávra - Výukový chatbot pro programování.pdf",
        type: "pdf",
      },
    ],
  },
  {
    id: "gvidlearn-2025",
    title: "Kvízová aplikace s editorem",
    description: "Popis",
    studyLevel: "secondary",
    year: 2025,
    context: "Programování",
    tags: ["Programování", "Ročníkový projekt"],
    attachments: [
      {
        label: "Dokumentace k projektu",
        href: "/projects/Gvidlearn_dokumentace.pdf",
        type: "pdf",
      },
      {
        label: "Zazipovaný projekt",
        href: "/projects/Projekt Gvidlearn.zip",
        type: "zip",
      },
    ],
  },
  {
    id: "hejtman-2026",
    title: "Volební aplikace pro soutěž Den hejtmanem",
    description: "Popis",
    studyLevel: "secondary",
    year: 2026,
    context: "Seminář z programování",
    tags: ["Programování", "Den hejtmanem", "Ročníkový projekt"],
    attachments: [
      {
        label: "Dokumentace k projektu",
        href: "/projects/Volební_aplikace_Den_hejtmanem.pdf",
        type: "pdf",
      },
      {
        label: "Zazipovaný projekt",
        href: "/projects/VolebniKalkukacka.zip",
        type: "zip",
      },
    ],
  },
  {
    id: "pp-2026",
    title: "Popis podnikatelského záměru",
    description: "Popis",
    studyLevel: "secondary",
    year: 2026,
    context: "Podnikatelský plán",
    tags: ["Seminární práce", "Podnikání"],
    attachments: [
      {
        label: "Text seminární práce",
        href: "/projects/Podnikatelský_záměr.pdf",
        type: "pdf",
      },
    ],
  },
];

/*
 * PŘÍKLAD PŘILOŽENÍ SOUBORŮ (až je opravdu vložíš do public/projects/):
 * attachments: [
 *   { label: "Zobrazit práci", href: "/projects/moje-prace.pdf", type: "pdf" },
 *   { label: "Zdrojové soubory", href: "/projects/moje-prace.zip", type: "zip" },
 * ],
 */
