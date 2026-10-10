import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const pages: Record<string, { title: string; description: string }> = {
  "o-mne": { title: "O mně", description: "Více o mém zaměření, zájmech a motivaci." },
  studium: { title: "Studium", description: "Přehled studia, předmětů a vybraných výstupů." },
  projekty: { title: "Projekty", description: "Prostor pro případové studie a dokončené projekty." },
  dovednosti: { title: "Dovednosti", description: "Technologie, analytické nástroje a další dovednosti." },
  zkusenosti: { title: "Pracovní zkušenosti", description: "Přehled zkušeností a profesního rozvoje." },
};

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return pages[slug] ? { title: pages[slug].title, description: pages[slug].description } : {};
}

export default async function Subpage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) notFound();
  return (
    <main className="subpage">
      <header className="site-header wrap"><Link href="/" className="monogram" aria-label="Zpět na úvod">JV<span>.</span></Link><Link className="back-link" href="/">← Zpět na úvod</Link></header>
      <section className="subpage-main wrap"><p className="eyebrow"><span className="eyebrow-line" /> SOUČÁST PORTFOLIA</p><h1>{page.title}<span className="period">.</span></h1><p>{page.description}</p><div className="coming-soon">Tuto stránku právě připravuji. Brzy zde najdete více.</div><Link className="button-primary" href="/">Zpět na hlavní stránku <span aria-hidden="true">↗</span></Link></section>
    </main>
  );
}
