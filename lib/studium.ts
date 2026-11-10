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
          "Předmět vytváří formální a pojmový základ nezbytný pro teoretickou informatiku. Pokrývá logickou strukturu matematických vět, důkazové techniky včetně matematické indukce a diskrétní struktury, jako jsou množiny, relace, funkce a\u00A0grafy. Cílem je osvojit si přesnou formulaci tvrzení a schopnost aplikovat formální aparát v navazujícím studiu i praxi.",
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
          "Kurz systematicky uvádí do základních principů algoritmizace a\u00A0procedurálního programování s praktickým využitím jazyka Python. Pokrývá klíčové programátorské konstrukce – od řízení běhu programu přes datové typy a funkce až po implementaci základních algoritmů. Důraz je kladen na osvojení univerzálních programátorských návyků přenositelných do dalších technologií.",
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
          "Předmět poskytuje komplexní orientaci v moderních informačních technologiích, jejich hardwarových i softwarových komponentách a základních principech fungování operačních systémů a počítačových sítí. Vedle technických souvislostí a\u00A0systémového pohledu klade důraz také na etické, společenské a bezpečnostní rozměry práce v IT.",
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
          "Předmět provází celým procesem tvorby a prezentace odborného textu – od volby tématu a kritického hodnocení zdrojů přes samotnou stavbu práce až po její technické a formální zpracování. Důraz klade na etiku vědeckovýzkumné práce a\u00A0přináší přehled klíčových výzkumných metod využívaných ve\u00A0společenských a ekonomických vědách.",
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
          "Předmět objasňuje základní principy fungování tržního mechanismu a chování ekonomických subjektů. Pokrývá koncepty nabídky, poptávky, elasticity, nákladů, tržních struktur i\u00A0externalit a zkoumá dopady hospodářské politiky. Cílem je osvojit si mikroekonomické analytické nástroje a schopnost aplikovat je na hodnocení reálných ekonomických situací bez obvyklých analytických chyb.",
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
          "Kurz uvádí do specifik vysokoškolského studia a systematizuje klíčové kompetence oboru podnikové informatiky. Zaměřuje se na\u00A0rozvoj kritického, systémového a interdisciplinárního myšlení i\u00A0moderních stylů učení, jako je peer teaching či Bloomova taxonomie. Cílem je poskytnout ucelený přehled o studijním programu a ukázat praktické možnosti aplikace nabytých znalostí.",
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
          "Předmět uvádí do specifik formální odborné komunikace v\u00A0ekonomickém a obchodním kontextu. Zaměřuje se na rozvoj lingvistických, pragmatických a sociolingvistických dovedností, rozšíření odborné slovní zásoby a zvládnutí gramatických struktur typických pro odborný styl. Důraz klade na aktivní využití jazyka v mluveném i písemném projevu a na reálné komunikační situace.",
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
          "Kurz se soustředí na matematické nástroje využívané pro popis, modelování a řešení dynamických systémů v ekonomii a\u00A0podnikovém řízení. Zprostředkovává aparát nezbytný pro kvantitativní analýzu reálných problémů trhu a firem. Cílem je vytvořit pevný základ pro samostatnou práci s odbornou literaturou a úspěšné zvládnutí navazujících specializovaných předmětů.",
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
 /* { number: 2, label: "2. semestr", period: "Jaro 2027", completed: false, courses: [] },
  { number: 3, label: "3. semestr", period: "Podzim 2027", completed: false, courses: [] },
  { number: 4, label: "4. semestr", period: "Jaro 2028", completed: false, courses: [] },
  { number: 5, label: "5. semestr", period: "Podzim 2028", completed: false, courses: [] },
  { number: 6, label: "6. semestr", period: "Jaro 2029", completed: false, courses: [] },*/
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
