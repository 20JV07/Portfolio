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

export default function AboutPage() {
  return (
    <main className="about-page">
      <div className="about-container">
        <header className="about-hero">
          <h1>O mně<span className="about-accent">.</span></h1>
          <p>Rád propojuji svět technologií, dat a ekonomie. Tady se o mně a o tom, co mě zajímá, dozvíte trochu víc.</p>
        </header>

        <section className="about-intro" aria-labelledby="about-intro-title">
          <div className="about-photo-art">
            <div className="about-photo-ring" aria-hidden="true" />
            <div className="about-photo-frame">
              {hasAboutPortrait ? (
                <Image
                  src="/about-portrait.png"
                  alt="Portrét Jakuba Vávry"
                  fill
                  priority
                  quality={95}
                  sizes="(max-width: 1000px) 90vw, 40vw"
                  className="portrait-image"
                />
              ) : (
                <div className="about-photo-placeholder">
                  <span className="about-photo-initials">JV<span>.</span></span>
                  <span className="about-photo-hint">Místo pro fotografii</span>
                </div>
              )}
            </div>
          </div>

          <div className="about-intro-copy">
            <span className="about-kicker">01 / PŘEDSTAVENÍ</span>
            <h2 id="about-intro-title">Ahoj, jsem <span>Jakub.</span></h2>
            <p>Studuji <strong>Podnikovou informatiku na Masarykově univerzitě</strong>. Zajímá mě, jak mohou technologie a práce s daty pomáhat lidem a organizacím dělat lepší rozhodnutí.</p>
            <p>Rád se učím nové věci a převádím teorii do praxe. Na tomto webu postupně shromažďuji své studijní výstupy, projekty a zkušenosti.</p>
            <p>Vedle studia se věnuji také doučování a rozvíjím své znalosti v oblasti programování, analytiky a ekonomie.</p>
            <Link href="/studium" className="about-text-link">Více o mém studiu <span aria-hidden="true">↗</span></Link>
          </div>
        </section>

        <section className="about-interests" aria-labelledby="about-interests-title">
          <div className="about-section-heading">
            <div>
              <span className="about-kicker">02 / OBLASTI ZÁJMU</span>
              <h2 id="about-interests-title">Co mě zajímá<span className="about-accent">.</span></h2>
            </div>
          </div>
          <div className="about-interest-grid">
            <article className="about-interest-card">
              <span className="about-interest-number">01</span>
              <h3>Technologie</h3>
              <p>Programování, digitální nástroje a hledání praktických řešení.</p>
            </article>
            <article className="about-interest-card">
              <span className="about-interest-number">02</span>
              <h3>Data a analytika</h3>
              <p>Práce s informacemi, jejich vizualizace a využití při rozhodování.</p>
            </article>
            <article className="about-interest-card">
              <span className="about-interest-number">03</span>
              <h3>Ekonomie a podnikání</h3>
              <p>Jak fungují firmy, trhy a propojení ekonomiky s inovacemi.</p>
            </article>
          </div>
        </section>
      </div>

      <section id="kontakt" className="about-contact" aria-labelledby="about-contact-title">
        <div className="about-container">
          <div className="about-section-heading about-contact-heading">
            <div>
              <span className="about-kicker">03 / SPOJME SE</span>
              <h2 id="about-contact-title">Kontakt<span className="about-accent">.</span></h2>
            </div>
          </div>
          <a className="about-email-card" href="mailto:jakub07vavra@email.cz">
            <span className="about-email-caption">NAPIŠTE MI E-MAIL</span>
            <span className="about-email-address">jakub07vavra@email.cz</span>
            <span className="about-email-arrow" aria-hidden="true">↗</span>
          </a>
          <div className="about-social-list" aria-label="Sociální sítě a další profily">
            {socialLinks.map((social) => (
              social.href ? (
                <a key={social.name} className="about-social-item" href={social.href} target="_blank" rel="noopener noreferrer">
                  <span className="about-social-name">{social.name}</span>
                  <span className="about-social-detail">{social.detail}</span>
                  <span className="about-social-arrow" aria-hidden="true">↗</span>
                </a>
              ) : (
                <div key={social.name} className="about-social-item about-social-disabled">
                  <span className="about-social-name">{social.name}</span>
                  <span className="about-social-detail">Brzy doplním</span>
                  <span className="about-social-arrow" aria-hidden="true">—</span>
                </div>
              )
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
