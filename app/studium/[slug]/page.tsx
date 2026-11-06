import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { bachelorSemesters, findCourse, masterSemesters } from "../../../lib/studium";
import StudyShell from "../StudyShell";
import "../course-detail.css";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return [...bachelorSemesters, ...masterSemesters]
    .flatMap((semester) => semester.courses)
    .map((course) => ({ slug: course.slug }));
}

async function CourseContent({ params }: Props) {
  const { slug } = await params;
  const course = findCourse(slug);
  if (!course) notFound();

  return (
    <StudyShell>
      <main className="study-page">
        <div className="study-container study-detailContainer">
          <Link href="/studium" className="study-backLink">← Zpět na přehled studia</Link>

          <header className="study-courseHero">
            <span className="study-courseHeroCode">{course.code}</span>
            <h1>{course.name}<span className="study-accent">.</span></h1>
            {!!course.tags?.length && (
              <div className="study-tagRow">
                {course.tags.map((tag) => <span key={tag} className="study-tag">{tag}</span>)}
              </div>
            )}
          </header>

          <div className="course-v2-grid">
            <section className="course-v2-card course-v2-skills" aria-labelledby="competence-title">
              <h2 id="competence-title">Získané kompetence</h2>
              <ul className="course-v2-skillList">
                {course.competencies.map((competency) => (
                  <li key={competency}>
                    <span className="course-v2-check" aria-hidden="true">✓</span>
                    <span>{competency}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="course-v2-card course-v2-annotation" aria-labelledby="abstract-title">
              <h2 id="abstract-title">Anotace kurzu</h2>
              <p>{course.description}</p>
            </section>

            <section className="course-v2-card course-v2-reflection" aria-labelledby="reflection-title">
              <h2 id="reflection-title">Osobní reflexe</h2>
              <div className="course-v2-prose">
                {course.reflection.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
              </div>
            </section>
          </div>
        </div>
      </main>
    </StudyShell>
  );
}

export default function CoursePage({ params }: Props) {
  return (
    <Suspense fallback={<p>Načítání kurzu...</p>}>
      <CourseContent params={params} />
    </Suspense>
  );
}
