import Link from "next/link";
import Image from "next/image";

// Po pořízení fotografie ji vlož do public/portrait.jpg a změň na true.
const hasPortrait = false;

const sections = [
  { number: "01", title: "O mně", slug: "o-mne", description: "Kdo jsem a co mě zajímá", arrow: "↗" },
  { number: "02", title: "Studium", slug: "studium", description: "Moje vzdělání a studijní výstupy", arrow: "↗" },
  { number: "03", title: "Projekty", slug: "projekty", description: "Nápady, analýzy a realizace", arrow: "↗" },
  { number: "04", title: "Dovednosti", slug: "dovednosti", description: "Nástroje a oblasti, ve kterých se rozvíjím", arrow: "↗" },
  { number: "05", title: "Pracovní zkušenosti", slug: "zkusenosti", description: "Moje dosavadní praxe", arrow: "↗" },
];

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

function Portrait() {
  return (
    <div className="portrait-frame">
      {hasPortrait ? (
        <Image src="/portrait.jpg" alt="Portrét Jakuba Vávry v podzimní přírodě" fill priority sizes="(max-width: 780px) 90vw, 40vw" className="portrait-image" />
      ) : (
        <div className="portrait-placeholder" aria-label="Zatím zástupná ilustrace podzimní krajiny" role="img">
          <div className="sun" />
          <div className="hill hill-back" />
          <div className="hill hill-front" />
          <div className="tree tree-one"><span /></div>
          <div className="tree tree-two"><span /></div>
          <div className="tree tree-three"><span /></div>
          <p className="photo-note"><span className="note-spark">✳</span> Místo pro podzimní fotografii</p>
        </div>
      )}
      <span className="portrait-corner" aria-hidden="true">JV<span>®</span></span>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header wrap">
        <Link href="/" className="monogram" aria-label="Jakub Vávra — úvodní stránka">JV<span>.</span></Link>
        <nav className="top-nav" aria-label="Hlavní navigace">
          <Link href="/projekty">Projekty</Link>
          <Link href="/o-mne">O mně</Link>
          <a className="nav-contact" href="mailto:kontakt@jakubvavra.eu">Kontakt <ArrowIcon /></a>
        </nav>
      </header>

      <section className="hero wrap" aria-labelledby="main-heading">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> STUDIJNÍ & PROFESNÍ PORTFOLIO</p>
          <h1 id="main-heading">Jakub<br /><span>Vávra</span><span className="period">.</span></h1>
          <div className="hero-description">
            <p>Studuji <strong>podnikovou informatiku</strong> na Masarykově univerzitě. Zajímá mě, jak se propojují technologie, data a ekonomie.</p>
            <p>Na tomto webu sdílím své projekty, studijní výstupy a zkušenosti.</p>
          </div>
          <div className="hero-actions">
            <Link className="button-primary" href="/projekty">Prohlédnout projekty <ArrowIcon /></Link>
            <Link className="button-link" href="/o-mne">Více o mně <ArrowIcon /></Link>
          </div>
        </div>
        <div className="hero-art"><div className="art-outline" aria-hidden="true" /><Portrait /><div className="art-index" aria-hidden="true">PORTFOLIO — 2026</div></div>
      </section>

      <section className="explore" aria-labelledby="explore-title">
        <div className="wrap">
          <div className="section-heading"><div><p className="eyebrow">CO TU NAJDETE</p><h2 id="explore-title">Poznejte mou práci<span className="period">.</span></h2></div><p>Vyberte si oblast, která vás zajímá.</p></div>
          <div className="section-list">
            {sections.map((item) => (
              <Link href={`/${item.slug}`} className="section-link" key={item.number}>
                <span className="section-number">{item.number}</span>
                <span className="section-name">{item.title}</span>
                <span className="section-description">{item.description}</span>
                <span className="section-arrow" aria-hidden="true">{item.arrow}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="site-footer wrap"><span>© 2026 Jakub Vávra</span><span>Vytvořeno s důrazem na jednoduchost a detail.</span><a href="mailto:kontakt@jakubvavra.eu">Napište mi ↗</a></footer>
    </main>
  );
}
