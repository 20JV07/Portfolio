
import Image from "next/image";
import Link from "next/link";
import "./o-mne.css";

// Po vložení fotografie do public/about-portrait.jpg změň na true.
const hasAboutPortrait = true;

// Doplň své profily. Prázdné adresy se zobrazí jako „Brzy doplním“.
const socialLinks = [
  { name: "LinkedIn", detail: "Profesní profil", href: "" },
  { name: "GitHub", detail: "Kód a projekty", href: "" },
  { name: "Další odkazy", detail: "Ostatní platformy", href: "" },
];

const personalTraits = [
  {
    number: "01",
    title: "Trpělivost",
    description:
      "Při doučování se učím přizpůsobovat tempo i způsob vysvětlení konkrétním potřebám druhého člověka.",
  },
  {
    number: "02",
    title: "Práce v týmu",
    description:
      "Den hejtmanem",
  },
  {
    number: "03",
    title: "Systematický přístup",
    description:
      "Při učení i práci postupuji krok za krokem a snažím se převádět nápady do konkrétních výsledků.",
  },
];

export default function AboutPage() {
  return (
    <main className="about-page">
      <div className="about-container">
        <header className="about-hero">
          <h1>
            O mně<span className="about-accent">.</span>
          </h1>
          <p>
            Rád propojuji svět technologií, dat a ekonomie. Tady se o mně a o
            tom, co mě zajímá, dozvíte trochu víc.
          </p>
        </header>

        <section
          className="about-intro"
          aria-labelledby="about-intro-title"
        >
          <div className="about-photo-art">
            <div className="about-photo-ring" aria-hidden="true" />
            <div className="about-photo-frame">
              {hasAboutPortrait ? (
                <Image
                  src="/about-portrait.png"
                  alt="Portrét Jakuba Vávry"
                  fill
                  priority
                  sizes="(max-width: 1000px) 90vw, 40vw"
                  className="portrait-image"
                />
              ) : (
                <div className="about-photo-placeholder">
                  <span className="about-photo-initials">
                    JV<span>.</span>
                  </span>
                  <span className="about-photo-hint">
                    Místo pro fotografii
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="about-intro-copy">
            <span className="about-kicker">01 / PŘEDSTAVENÍ</span>
            <h2 id="about-intro-title">
              Ahoj, jsem <span>Jakub.</span>
            </h2>
            <p>
              Studuji <strong>Podnikovou informatiku na Masarykově
              univerzitě</strong>. Zajímá mě, jak mohou technologie a práce s
              daty pomáhat lidem a organizacím dělat lepší rozhodnutí.
            </p>
            <p>
              Rád se učím nové věci a převádím teorii do praxe. Na tomto webu
              postupně shromažďuji své studijní výstupy, projekty a zkušenosti.
            </p>
            <p>
              Vedle studia se věnuji také doučování a rozvíjím své znalosti
              v oblasti programování, analytiky a ekonomie.
            </p>
            <Link href="/studium" className="about-text-link">
              Více o mém studiu <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>

        {/* Osobní vlastnosti */}
        <section
          className="about-traits"
          aria-labelledby="about-traits-title"
        >
          <div className="about-traits-layout">
            <div className="about-traits-heading">
              <span className="about-kicker">02 / MOJE VLASTNOSTI</span>
              <h2 id="about-traits-title">
                Jak přistupuji k práci
                <span className="about-accent">.</span>
              </h2>
              <p>
                Každý projekt i nová zkušenost jsou příležitostí k rozvoji.
                Tohle jsou vlastnosti, na kterých se snažím stavět při studiu
                i mimo něj.
              </p>
            </div>

            <div className="about-traits-grid">
              {personalTraits.map((trait) => (
                <article className="about-trait" key={trait.number}>
                  <span className="about-trait-number">
                    {trait.number}
                  </span>
                  <h3>{trait.title}</h3>
                  <p>{trait.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>

      <section
        id="kontakt"
        className="about-contact"
        aria-labelledby="about-contact-title"
      >
        <div className="about-container">
          <div className="about-section-heading about-contact-heading">
            <div>
              <span className="about-kicker">03 / SPOJME SE</span>
              <h2 id="about-contact-title">
                Kontakt<span className="about-accent">.</span>
              </h2>
            </div>
          </div>

          <a
            className="about-email-card"
            href="mailto:jakub07vavra@email.cz"
          >
            <span className="about-email-caption">NAPIŠTE MI E-MAIL</span>
            <span className="about-email-address">
              jakub07vavra@email.cz
            </span>
            <span className="about-email-arrow" aria-hidden="true">
              ↗
            </span>
          </a>

          <div
            className="about-social-list"
            aria-label="Sociální sítě a další profily"
          >
            {socialLinks.map((social) =>
              social.href ? (
                <a
                  key={social.name}
                  className="about-social-item"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="about-social-name">
                    {social.name}
                  </span>
                  <span className="about-social-detail">
                    {social.detail}
                  </span>
                  <span className="about-social-arrow" aria-hidden="true">
                    ↗
                  </span>
                </a>
              ) : (
                <div
                  key={social.name}
                  className="about-social-item about-social-disabled"
                >
                  <span className="about-social-name">
                    {social.name}
                  </span>
                  <span className="about-social-detail">
                    Brzy doplním
                  </span>
                  <span className="about-social-arrow" aria-hidden="true">
                    —
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
