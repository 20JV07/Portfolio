import Link from "next/link";
import {
  bachelorSemesters,
  masterSemesters,
  SHOW_MASTERS,
  type Semester,
} from "../../lib/studium";
import StudyShell from "./StudyShell";

function SemesterCard({ semester }: { semester: Semester }) {
  return (
    <article
      className={`study-semesterCard ${!semester.completed ? "study-semesterMuted" : ""}`}
      aria-label={`${semester.label}, ${semester.period}${!semester.completed ? ", zatím neabsolvováno" : ""}`}
    >
      <div className="study-semesterHeading">
        <span className={`study-status ${semester.completed ? "study-statusActive" : ""}`}>
          {semester.completed ? "Aktuální" : "Připravuje se"}
        </span>
      </div>
      <h3>{semester.label}</h3>
      <p className="study-semesterPeriod">{semester.period}</p>
      {semester.completed ? (
        semester.courses.length ? (
          <ul className="study-courseList">
            {semester.courses.map((course) => (
              <li key={course.slug}>
                <Link className="study-courseLink" href={`/studium/${course.slug}`}>
                  <span className="study-courseCode">{course.code}</span>
                  <span className="study-courseName">{course.name}</span>
                  <span className="study-linkArrow" aria-hidden="true">↗</span>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="study-emptyText">Kurzy budou doplněny.</p>
        )
      ) : (
        <p className="study-futureText">Obsah tohoto semestru postupně doplním.</p>
      )}
    </article>
  );
}

export default function StudiumPage() {
  return (
    <StudyShell>
      <main className="study-page">
        <div className="study-container">
          <header className="study-hero">
            <h1>Studium<span className="study-accent">.</span></h1>
            <p>
              Přehled mého vzdělávání, absolvovaných předmětů a dovedností,
              které si během studia postupně osvojuji.
            </p>
          </header>

          <section className="study-studySection" aria-labelledby="bachelor-title">
            <div className="study-sectionHeading">
              <div>
                <h2 id="bachelor-title">Bakalářské studium</h2>
                <p>Masarykova univerzita · Podniková informatika</p>
              </div>
              <span className="study-sectionChip">2026–2029 · 6 semestrů</span>
            </div>
            <div className="study-semesterGrid">
              {bachelorSemesters.map((semester) => (
                <SemesterCard key={semester.number} semester={semester} />
              ))}
            </div>
          </section>

          {SHOW_MASTERS && (
            <section className="study-studySection" aria-labelledby="master-title">
              <div className="study-sectionHeading">
                <div>
                  <h2 id="master-title">Magisterské studium</h2>
                  <p>Informace doplním později.</p>
                </div>
                <span className="study-sectionChip">4 semestry</span>
              </div>
              <div className="study-semesterGrid">
                {masterSemesters.map((semester) => (
                  <SemesterCard key={semester.number} semester={semester} />
                ))}
              </div>
            </section>
          )}

          <section className="study-studySection" aria-labelledby="secondary-title">
            <div className="study-sectionHeading">
              <div>
                <h2 id="secondary-title">Středoškolské studium</h2>
                <p>Gymnázium Brno, Vídeňská · Programování 6l</p>
              </div>
            </div>
            <div className="study-secondaryCard">
              <div className="study-secondaryIcon" aria-hidden="true">↗</div>
              <div>
                <h3>Střední škola</h3>
                <p>Zde bude název školy, studijní obor, období studia a případně maturitní zaměření.</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </StudyShell>
  );
}
