import { projects, studyLevels, type PortfolioProject } from "../../lib/projects";
import "./projekty.css";

function ProjectCard({ project, number }: { project: PortfolioProject; number: number }) {
  return (
    <article className="projects-card">
      <div className="projects-cardIndex" aria-hidden="true">
        {String(number).padStart(2, "0")}
      </div>
      <div className="projects-cardBody">
        {project.context && <p className="projects-context">{project.context}</p>}
        <h4>{project.title}</h4>
        <p className="projects-description">{project.description}</p>

        {project.tags.length > 0 && (
          <ul className="projects-tags" aria-label="Štítky projektu">
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        )}

        <div className="projects-cardBottom">
          <span className="projects-attachmentLabel">Přílohy</span>
          {project.attachments.length > 0 ? (
            <div className="projects-files">
              {project.attachments.map((file) => (
                <a
                  key={`${file.type}-${file.href}`}
                  href={file.href}
                  className="projects-fileLink"
                  target={file.type === "pdf" ? "_blank" : undefined}
                  rel={file.type === "pdf" ? "noopener noreferrer" : undefined}
                  download={file.type === "zip" ? true : undefined}
                  aria-label={`${file.label} (${file.type.toUpperCase()})`}
                >
                  <span className="projects-fileType">{file.type.toUpperCase()}</span>
                  <span>{file.label}</span>
                  <span className="projects-fileArrow" aria-hidden="true">
                    {file.type === "pdf" ? "↗" : "↓"}
                  </span>
                </a>
              ))}
            </div>
          ) : (
            <span className="projects-noFiles">Zatím bez příloh</span>
          )}
        </div>
      </div>
    </article>
  );
}

export default function ProjektyPage() {
  let projectNumber = 0;

  return (
    <main className="projects-page">
      <div className="projects-container">
        <header className="projects-hero">
          <h1>Projekty<span>.</span></h1>
          <p>
            Výběr mých studijních prací a projektů – od prvních programátorských
            zkušeností po propojení technologií, dat a ekonomie.
          </p>
        </header>

        <div className="projects-timeline">
          {studyLevels.map((level) => {
            const levelProjects = projects.filter((project) => project.studyLevel === level.id);
            if (levelProjects.length === 0) return null;

            const years = [...new Set(levelProjects.map((project) => project.year))].sort(
              (a, b) => b - a,
            );

            return (
              <section key={level.id} className="projects-studySection" aria-labelledby={`projects-${level.id}`}>
                <div className="projects-levelHeading">
                  <div>
                    <span className="projects-levelAccent" aria-hidden="true" />
                    <h2 id={`projects-${level.id}`}>{level.title}</h2>
                    <p>{level.description}</p>
                  </div>
                  <span className="projects-levelCount">
                    {levelProjects.length} {levelProjects.length === 1 ? "projekt" : levelProjects.length < 5 ? "projekty" : "projektů"}
                  </span>
                </div>

                {years.map((year) => {
                  const yearProjects = levelProjects
                    .filter((project) => project.year === year)
                    .sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));

                  return (
                    <section key={year} className="projects-yearSection" aria-label={`Rok ${year}`}>
                      <div className="projects-yearHeading">
                        <h3>{year}</h3>
                        <span className="projects-yearRule" aria-hidden="true" />
                      </div>
                      <div className="projects-cardList">
                        {yearProjects.map((project) => {
                          projectNumber += 1;
                          return <ProjectCard key={project.id} project={project} number={projectNumber} />;
                        })}
                      </div>
                    </section>
                  );
                })}
              </section>
            );
          })}

          {projects.length === 0 && (
            <p className="projects-empty">První projekty zde brzy přibudou.</p>
          )}
        </div>
      </div>
    </main>
  );
}
