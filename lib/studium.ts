export type Course = {
  slug: string;
  code: string;
  name: string;
  description: string;
  competencies: string[];
  reflection: string[];
  tags?: string[];
};

export type Semester = {
  number: number;
  label: string;
  period: string;
  completed: boolean;
  courses: Course[];
};

// Pokud chceš zobrazovat připravené magisterské studium, změň na true.
export const SHOW_MASTERS = false;

// Předměty prvního semestru; anotace, kompetence a reflexe zatím zůstávají ukázkové.
// Slug je shodný s přesným kódem předmětu (včetně velikosti písmen).
export const bachelorSemesters: Semester[] = [
  {
    number: 1,
    label: "1. semestr",
    period: "Podzim 2026",
    completed: true, // znamená „aktuální/otevřený“; po absolvování můžeš zachovat true
    courses: [
      {
        slug: "IB000ext",
        code: "IB000ext",
        name: "Matematické základy informatiky",
        description:
          "Sem vlož stručný abstrakt: čím se předmět zabývá, jaká témata pokrývá a jaké jsou jeho cíle.",
        competencies: [
          "Kompetence, kterou sis během kurzu osvojil",
          "Další konkrétní znalost nebo praktická dovednost",
          "Schopnost použít poznatky na reálném problému",
        ],
        reflection: [
          "Sem patří tvoje osobní reflexe. Co pro tebe bylo nejpřínosnější? Co tě překvapilo?",
          "Můžeš také vysvětlit, jak jsi poznatky využil v projektu nebo jak je plánuješ využít dál.",
        ],
        tags: ["1. semestr", "MUNI FI"],
      },
      {
        slug: "IB113",
        code: "IB113",
        name: "Úvod do programování a algoritmizace",
        description:
          "Sem vlož stručný abstrakt: čím se předmět zabývá, jaká témata pokrývá a jaké jsou jeho cíle.",
        competencies: [
          "Kompetence, kterou sis během kurzu osvojil",
          "Další konkrétní znalost nebo praktická dovednost",
          "Schopnost použít poznatky na reálném problému",
        ],
        reflection: [
          "Sem patří tvoje osobní reflexe. Co pro tebe bylo nejpřínosnější? Co tě překvapilo?",
          "Můžeš také vysvětlit, jak jsi poznatky využil v projektu nebo jak je plánuješ využít dál.",
        ],
        tags: ["1. semestr", "MUNI FI"],
      },
      {
        slug: "PB001",
        code: "PB001",
        name: "Úvod do informačních technologií",
        description:
          "Sem vlož stručný abstrakt: čím se předmět zabývá, jaká témata pokrývá a jaké jsou jeho cíle.",
        competencies: [
          "Kompetence, kterou sis během kurzu osvojil",
          "Další konkrétní znalost nebo praktická dovednost",
          "Schopnost použít poznatky na reálném problému",
        ],
        reflection: [
          "Sem patří tvoje osobní reflexe. Co pro tebe bylo nejpřínosnější? Co tě překvapilo?",
          "Můžeš také vysvětlit, jak jsi poznatky využil v projektu nebo jak je plánuješ využít dál.",
        ],
        tags: ["1. semestr", "MUNI FI"],
      },
      {
        slug: "BDX_AKAP",
        code: "BDX_AKAP",
        name: "Akademické psaní",
        description:
          "Sem vlož stručný abstrakt: čím se předmět zabývá, jaká témata pokrývá a jaké jsou jeho cíle.",
        competencies: [
          "Kompetence, kterou sis během kurzu osvojil",
          "Další konkrétní znalost nebo praktická dovednost",
          "Schopnost použít poznatky na reálném problému",
        ],
        reflection: [
          "Sem patří tvoje osobní reflexe. Co pro tebe bylo nejpřínosnější? Co tě překvapilo?",
          "Můžeš také vysvětlit, jak jsi poznatky využil v projektu nebo jak je plánuješ využít dál.",
        ],
        tags: ["1. semestr", "MUNI ECON"],
      },
      {
        slug: "BPE_MIE1",
        code: "BPE_MIE1",
        name: "Mikroekonomie 1",
        description:
          "Sem vlož stručný abstrakt: čím se předmět zabývá, jaká témata pokrývá a jaké jsou jeho cíle.",
        competencies: [
          "Kompetence, kterou sis během kurzu osvojil",
          "Další konkrétní znalost nebo praktická dovednost",
          "Schopnost použít poznatky na reálném problému",
        ],
        reflection: [
          "Sem patří tvoje osobní reflexe. Co pro tebe bylo nejpřínosnější? Co tě překvapilo?",
          "Můžeš také vysvětlit, jak jsi poznatky využil v projektu nebo jak je plánuješ využít dál.",
        ],
        tags: ["1. semestr", "MUNI ECON"],
      },
      {
        slug: "BPH_USPI",
        code: "BPH_USPI",
        name: "Úvod do studia podnikové informatiky",
        description:
          "Sem vlož stručný abstrakt: čím se předmět zabývá, jaká témata pokrývá a jaké jsou jeho cíle.",
        competencies: [
          "Kompetence, kterou sis během kurzu osvojil",
          "Další konkrétní znalost nebo praktická dovednost",
          "Schopnost použít poznatky na reálném problému",
        ],
        reflection: [
          "Sem patří tvoje osobní reflexe. Co pro tebe bylo nejpřínosnější? Co tě překvapilo?",
          "Můžeš také vysvětlit, jak jsi poznatky využil v projektu nebo jak je plánuješ využít dál.",
        ],
        tags: ["1. semestr", "MUNI ECON"],
      },
      {
        slug: "BPJ_JI1A",
        code: "BPJ_JI1A",
        name: "Jazyk I/1 - Angličtina",
        description:
          "Sem vlož stručný abstrakt: čím se předmět zabývá, jaká témata pokrývá a jaké jsou jeho cíle.",
        competencies: [
          "Kompetence, kterou sis během kurzu osvojil",
          "Další konkrétní znalost nebo praktická dovednost",
          "Schopnost použít poznatky na reálném problému",
        ],
        reflection: [
          "Sem patří tvoje osobní reflexe. Co pro tebe bylo nejpřínosnější? Co tě překvapilo?",
          "Můžeš také vysvětlit, jak jsi poznatky využil v projektu nebo jak je plánuješ využít dál.",
        ],
        tags: ["1. semestr", "MUNI ECON"],
      },
      {
        slug: "BPM_MAEK",
        code: "BPM_MAEK",
        name: "Matematika pro ekonomy",
        description:
          "Sem vlož stručný abstrakt: čím se předmět zabývá, jaká témata pokrývá a jaké jsou jeho cíle.",
        competencies: [
          "Kompetence, kterou sis během kurzu osvojil",
          "Další konkrétní znalost nebo praktická dovednost",
          "Schopnost použít poznatky na reálném problému",
        ],
        reflection: [
          "Sem patří tvoje osobní reflexe. Co pro tebe bylo nejpřínosnější? Co tě překvapilo?",
          "Můžeš také vysvětlit, jak jsi poznatky využil v projektu nebo jak je plánuješ využít dál.",
        ],
        tags: ["1. semestr", "MUNI ECON"],
      },
    ],
  },
  { number: 2, label: "2. semestr", period: "Jaro 2027", completed: false, courses: [] },
  { number: 3, label: "3. semestr", period: "Podzim 2027", completed: false, courses: [] },
  { number: 4, label: "4. semestr", period: "Jaro 2028", completed: false, courses: [] },
  { number: 5, label: "5. semestr", period: "Podzim 2028", completed: false, courses: [] },
  { number: 6, label: "6. semestr", period: "Jaro 2029", completed: false, courses: [] },
];

// Připravené, ale skryté magisterské studium.
export const masterSemesters: Semester[] = Array.from({ length: 4 }, (_, index) => ({
  number: index + 1,
  label: `${index + 1}. semestr`,
  period: "Zatím neplánováno",
  completed: false,
  courses: [],
}));

export function findCourse(slug: string): Course | undefined {
  return [...bachelorSemesters, ...masterSemesters]
    .flatMap((semester) => semester.courses)
    .find((course) => course.slug === slug);
}
