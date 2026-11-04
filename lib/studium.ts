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

// Tuto hodnotu změň na true, až budeš chtít zobrazit navazující studium.
export const SHOW_MASTERS = false;

// DEMONSTRAČNÍ DATA – nahraď je skutečnými kurzy z IS MU.
// slug musí být pro každý kurz unikátní, bez mezer a diakritiky.
export const bachelorSemesters: Semester[] = [
  {
    number: 1,
    label: "1. semestr",
    period: "Podzim 2026",
    completed: true, // znamená „aktuální/otevřený“; po absolvování můžeš zachovat true
    courses: [
      {
        slug: "ukazkovy-kurz",
        code: "KOD101",
        name: "Ukázkový kurz",
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
        tags: ["Ukázka", "1. semestr"],
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
