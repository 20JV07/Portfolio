import Link from "next/link";
import type { ReactNode } from "react";

/** Stejná navigace a patička jako na úvodní stránce. */
export default function StudyShell({ children }: { children: ReactNode }) {
  return (
    <>
      <header className="site-header wrap">
        <Link href="/" className="monogram" aria-label="Jakub Vávra — úvodní stránka">JV<span>.</span></Link>
        <nav className="top-nav" aria-label="Hlavní navigace">
          <Link href="/projekty">Projekty</Link>
          <Link href="/o-mne">O mně</Link>
          <a className="nav-contact" href="mailto:jakub07vavra@email.cz">Kontakt <span aria-hidden="true">↗</span></a>
        </nav>
      </header>
      {children}
      <footer className="site-footer wrap">
        <span>© 2026 Jakub Vávra</span><span></span>
        <a href="mailto:jakub07vavra@email.cz">Napište mi ↗</a>
      </footer>
    </>
  );
}
