import Link from "next/link";

/** Společná navigace pro celé portfolio. */
export default function Header() {
  return (
    <header className="site-header wrap">
      <Link href="/" className="monogram" aria-label="Jakub Vávra — úvodní stránka">
        JV<span>.</span>
      </Link>
      <nav className="top-nav" aria-label="Hlavní navigace">
        <Link href="/projekty">Projekty</Link>
        <Link href="/o-mne">O mně</Link>
        <Link className="nav-contact" href="/o-mne#kontakt">
          Kontakt <span aria-hidden="true">↗</span>
        </Link>
      </nav>
    </header>
  );
}
