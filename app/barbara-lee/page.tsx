import Link from "next/link";

export default function BarbaraLeePage() {
  return (
    <main className="min-h-screen bg-white px-8 py-16 text-slate-900">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="mb-8 inline-block text-sm font-medium text-slate-500 hover:text-slate-900"
        >
          ← Back to CivicSignal
        </Link>

        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-500">
          Representative · California District 12
        </p>

        <h1 className="mb-4 text-4xl font-bold tracking-tight">Barbara Lee</h1>

        <p className="mb-12 text-lg leading-8 text-slate-700">
          Plain-language look at recent votes and bills, and what they may mean
          for everyday life in her district and beyond.
        </p>

        <section className="mb-10">
          <h2 className="mb-4 text-xl font-semibold">At a glance</h2>
          <ul className="space-y-3 text-slate-700">
            <li className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
              <span className="font-medium text-slate-900">Focus areas:</span>{" "}
              housing affordability, healthcare access, climate resilience,
              veterans and military families
            </li>
            <li className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
              <span className="font-medium text-slate-900">Committees:</span>{" "}
              Appropriations (ranking member on State-Foreign Operations)
            </li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-xl font-semibold">Recent actions (summary)</h2>

          <article className="rounded-xl border border-slate-200 p-6">
            <h3 className="mb-2 font-semibold text-slate-900">
              Housing and tenant protections
            </h3>
            <p className="mb-3 text-slate-700 leading-7">
              Supported measures aimed at expanding rental assistance and
              strengthening tenant rights. For renters in high-cost areas, this
              type of legislation is often framed as slowing displacement and
              keeping more households in stable housing.
            </p>
            <p className="text-sm text-slate-500">
              Impact lens: rent burden, eviction risk, local housing supply
            </p>
          </article>

          <article className="rounded-xl border border-slate-200 p-6">
            <h3 className="mb-2 font-semibold text-slate-900">
              Healthcare and Medicare
            </h3>
            <p className="mb-3 text-slate-700 leading-7">
              Voted in favor of expanding access to care and lowering
              out-of-pocket costs in federal health programs. Supporters argue
              this reduces medical debt; critics often raise concerns about
              long-term program costs and provider reimbursement.
            </p>
            <p className="text-sm text-slate-500">
              Impact lens: premiums, prescription costs, clinic access
            </p>
          </article>

          <article className="rounded-xl border border-slate-200 p-6">
            <h3 className="mb-2 font-semibold text-slate-900">
              Climate and disaster preparedness
            </h3>
            <p className="mb-3 text-slate-700 leading-7">
              Backed funding for wildfire response, clean energy transition, and
              community resilience projects. In the Bay Area, that can tie to
              air quality, grid reliability, and federal aid after extreme
              weather events.
            </p>
            <p className="text-sm text-slate-500">
              Impact lens: utility bills, insurance, emergency aid timelines
            </p>
          </article>
        </section>

        <p className="mt-12 text-sm text-slate-500">
          Summaries are illustrative for demo purposes. Connect official
          roll-call data and bill text for production use.
        </p>
      </div>
    </main>
  );
}
