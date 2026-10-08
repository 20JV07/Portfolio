
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-6 text-white">
      <div className="max-w-2xl text-center">
        <p className="mb-4 text-sm uppercase tracking-widest text-blue-400">
          Studijní portfolio
        </p>

        <h1 className="mb-6 text-5xl font-bold">
          Ahoj, jsem Jakub.
        </h1>

        <p className="mb-8 text-lg leading-relaxed text-slate-300">
          Studuji podnikovou informatiku na Masarykově univerzitě.
          Na tomto webu budu sdílet své projekty, studijní
          výstupy a zkušenosti.
        </p>

        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-500"
        >
          Můj GitHub
        </a>
      </div>
    </main>
  );
}
