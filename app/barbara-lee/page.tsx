export default function BarbaraLeePage() {
  return (
    <main className="min-h-screen bg-white px-8 py-16 text-slate-900">
      <div className="mx-auto max-w-3xl">
        <a href="/" className="text-sm font-semibold text-slate-500">
          ← CivicSignal
        </a>

        <p className="mt-8 text-sm font-semibold uppercase tracking-wide text-slate-500">
          Mayor · Oakland, California
        </p>

        <h1 className="mt-2 text-5xl font-bold tracking-tight">
          What has Barbara Lee changed for Oakland residents?
        </h1>

        <p className="mt-6 text-xl leading-8 text-slate-700">
          A plain-language look at what Oakland&apos;s mayor can actually shape,
          what she cannot, and what residents may notice in daily life — without
          treating every city trend as her doing.
        </p>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">At a glance</h2>
          <ul className="mt-4 space-y-3 text-slate-700">
            <li className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
              <span className="font-medium text-slate-900">Role:</span> Chief
              executive of the City of Oakland; sets priorities, proposes the
              budget, and runs city departments.
            </li>
            <li className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
              <span className="font-medium text-slate-900">Top issues on her
              plate:</span> public safety, homelessness and housing, city
              finances, basic services (roads, libraries, parks), and
              rebuilding trust in City Hall.
            </li>
            <li className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
              <span className="font-medium text-slate-900">Reality check:</span>{" "}
              The mayor has real power, but City Council votes on the budget and
              many laws. County and state agencies control a lot of what happens
              on the streets.
            </li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">What the mayor controls</h2>
          <div className="mt-4 space-y-4">
            <InfoCard
              title="City budget priorities"
              body="Lee proposes how Oakland spends money — police staffing levels, library hours, road repair, homeless services, and more. Council must approve the final budget, but the mayor's plan sets the starting point."
            />
            <InfoCard
              title="Department leadership"
              body="She appoints and directs city administrators who run day-to-day operations: police, public works, housing, economic development, and others."
            />
            <InfoCard
              title="Emergency response and public messaging"
              body="During crises — wildfires, major crime incidents, service outages — the mayor coordinates the city response and shapes what residents hear from City Hall."
            />
            <InfoCard
              title="Housing and development direction"
              body="Through planning priorities, permit staffing, and affordable-housing funding choices, the mayor can speed up or slow down how housing gets built — though state law and market forces still matter a lot."
            />
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">What the mayor does not control</h2>
          <div className="mt-4 space-y-4">
            <InfoCard
              title="Most laws and the final budget"
              body="City Council passes ordinances and approves the budget. The mayor can veto some items, but Council can override a veto with enough votes."
            />
            <InfoCard
              title="County health and social services"
              body="Alameda County runs much of the safety-net system — mental health care, some homeless services, public health clinics. Oakland's mayor can advocate and fund local programs, but cannot run the county."
            />
            <InfoCard
              title="State and federal policy"
              body="Rent rules, gun laws, immigration enforcement, BART funding, and Caltrans road work are largely outside City Hall. Oakland feels these effects, but does not set them."
            />
            <InfoCard
              title="The whole economy"
              body="Job losses, tech layoffs, regional housing demand, and insurance costs shape Oakland whether or not the mayor takes action. City policy can nudge outcomes, not reverse macro trends alone."
            />
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">What to watch</h2>
          <ul className="mt-4 space-y-3 text-slate-700">
            <li className="rounded-2xl border border-slate-200 px-4 py-3">
              <span className="font-medium text-slate-900">
                911 and police response times
              </span>{" "}
              — staffing plans and budget choices should show up here within
              months, not years.
            </li>
            <li className="rounded-2xl border border-slate-200 px-4 py-3">
              <span className="font-medium text-slate-900">
                Visible street conditions
              </span>{" "}
              — encampment response, trash pickup, and pothole repair are
              services residents notice quickly when priorities shift.
            </li>
            <li className="rounded-2xl border border-slate-200 px-4 py-3">
              <span className="font-medium text-slate-900">
                Housing permit timelines
              </span>{" "}
              — if approvals speed up, more units may reach construction; if
              they stall, rents and shortages stay pressured.
            </li>
            <li className="rounded-2xl border border-slate-200 px-4 py-3">
              <span className="font-medium text-slate-900">
                City deficit and tax talk
              </span>{" "}
              — Oakland has faced budget gaps before. Watch whether Lee closes
              shortfalls through cuts, new revenue, or both.
            </li>
          </ul>
        </section>

        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Recent actions</h2>
          <p className="text-slate-600">
            Illustrative summaries for this prototype — not a live vote tracker.
          </p>

          <ActionCard
            title="Public safety staffing plan"
            summary="Early focus on filling police vacancies and improving emergency dispatch. Supporters hope faster 911 response; critics want more investment in non-police crisis teams."
            impact="Day-to-day: wait times after you call for help, and whether officers are visible in your neighborhood."
          />

          <ActionCard
            title="Homelessness and encampment strategy"
            summary="Pushed for a clearer citywide approach — more shelter beds, coordinated cleanups, and outreach before removals. Details still depend on county partners and available funding."
            impact="Day-to-day: whether encampments near your block are addressed quickly, and whether people are offered shelter instead of just being moved."
          />

          <ActionCard
            title="City services and infrastructure"
            summary="Directed departments to prioritize library reopenings, park maintenance, and road repair in the first budget cycle. Full results hinge on how much money Council approves."
            impact="Day-to-day: library hours, playground conditions, and how long broken streets stay unfixed."
          />

          <ActionCard
            title="Housing production push"
            summary="Signaled support for faster permitting on affordable and infill housing. Builders still face labor costs, financing, and state building rules the mayor cannot waive."
            impact="Day-to-day: whether new apartments and ADUs actually get built near you, and whether rent pressure eases over time."
          />
        </section>

        <section className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-2xl font-bold">Bottom line</h2>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            Barbara Lee runs Oakland&apos;s executive branch — she sets direction,
            proposes spending, and oversees the departments that touch your
            streets, parks, police response, and housing pipeline. She does not
            single-handedly fix crime, homelessness, or the cost of living.
          </p>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            For residents, the fair test is whether city services get better,
            decisions get clearer, and Oakland&apos;s biggest problems move in the
            right direction — while remembering that Council, the county, the
            state, and the broader economy all share the wheel.
          </p>
        </section>

        <p className="mt-12 text-sm text-slate-500">
          CivicSignal prototype. Connect official city records, budget documents,
          and council votes for production use.
        </p>
      </div>
    </main>
  );
}

function InfoCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 p-6">
      <h3 className="font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-slate-700 leading-7">{body}</p>
    </div>
  );
}

function ActionCard({
  title,
  summary,
  impact,
}: {
  title: string;
  summary: string;
  impact: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 p-6">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-3 text-slate-700 leading-7">{summary}</p>
      <p className="mt-4 font-medium text-slate-900">
        Likely impact: {impact}
      </p>
    </div>
  );
}
