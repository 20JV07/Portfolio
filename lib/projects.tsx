/**
 * Obsah stránky Projekty.
 * Přidání projektu = nový objekt v poli projects.
 * Přílohy vkládej do public/projects/ a uveď cestu začínající /projects/.
 */

import type { ReactNode } from "react";

export type StudyLevel = "bachelor" | "secondary";

export type ProjectAttachment = {
  label: string;
  href: string;
  type: "pdf" | "zip";
};

export type PortfolioProject = {
  id: string;
  title: string;
  description: ReactNode;
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
    tags: ["Programování", "AI", "Středoškolská odborná činnost"],
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
  description: (
    <>
      <div className="project-descriptionSection">
        <span className="project-subheading">Kontext</span>
        <p>
          Projekt vznikl jako seminární práce do předmětu Podnikatelský plán
          vyučovaného na ECON MUNI. Zadáním bylo vytvořit návrh podnikatelského
          plánu pro fiktivní firmu.
        </p>
      </div>

      <div className="project-descriptionSection">
        <span className="project-subheading">Co jsem se naučil</span>
        <p>
          Jednalo se o můj první projekt zaměřený na ekonomiku podniku.
          Seznámil jsem se s využitím různých analytických metod, jako jsou
          Porterova analýza pěti sil, PESTLE analýza nebo SWOT analýza.
          Součástí práce byla také tvorba zjednodušené rozvahy a výkazu zisku
          a ztráty. Získané znalosti využiji v dalších předmětech zaměřených
          na účetnictví a podnikovou ekonomiku.
        </p>
      </div>

      <div className="project-descriptionSection">
        <span className="project-subheading">Co bych příště změnil</span>
        <p>
          Největší výzvou pro mě bylo vymyslet samotnou podnikatelskou
          myšlenku. Nakonec jsem zvolil oblast, která je mi blízká, ale
          zároveň poměrně ambiciózní. Při dalším zpracování bych proto
          upřednostnil jednodušší obchodní model, který by bylo možné
          v rámci práce tohoto rozsahu podrobněji rozpracovat.
        </p>
      </div>
    </>
  ),
  studyLevel: "secondary",
  year: 2026,
  tags: ["Seminární práce", "Podnikatelský plán"],
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
