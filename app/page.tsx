export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 px-8 py-20 text-slate-900">
      <div className="mx-auto max-w-4xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          CivicSignal
        </p>

        <h1 className="max-w-3xl text-6xl font-bold tracking-tight">
          Politics explained through real-world impact.
        </h1>

        <p className="mt-8 max-w-2xl text-xl leading-8 text-slate-600">
          CivicSignal translates political actions into plain-language summaries
          focused on how policies may affect daily life, public services, taxes,
          housing, safety, and city functioning.
        </p>

        <div className="mt-12 flex gap-4">
          <a
            href="/barbara-lee"
            className="rounded-2xl bg-slate-900 px-6 py-4 font-semibold text-white transition hover:bg-slate-700"
          >
            View Oakland Example
          </a>

          <button className="rounded-2xl border border-slate-300 px-6 py-4 font-semibold text-slate-700">
            More Cities Coming Soon
          </button>
        </div>
      </div>
    </main>
  );
}