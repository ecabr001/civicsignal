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
          A plain-language framework for what Oakland&apos;s mayor can shape,
          what she cannot, and what residents may notice in daily life.
        </p>

        <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-slate-800">
          <p className="font-semibold text-slate-900">Research status</p>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            This is a CivicSignal prototype. It is not yet fully sourced.
            Sections on mayoral power describe the office in general. Recent
            actions are structured placeholders — no specific mayor decisions
            have been verified or attributed here.
          </p>
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">At a glance</h2>
          <ul className="mt-4 space-y-3 text-slate-700">
            <li className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
              <span className="font-medium text-slate-900">Role:</span> Chief
              executive of the City of Oakland; sets priorities, proposes the
              budget, and runs city departments.
            </li>
            <li className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
              <span className="font-medium text-slate-900">
                Issues residents often watch:
              </span>{" "}
              public safety, homelessness and housing, city finances, basic
              services (roads, libraries, parks), and trust in City Hall.
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
          <p className="mt-2 text-slate-600">
            General powers of the office — not a list of what Lee has done.
          </p>
          <div className="mt-4 space-y-4">
            <InfoCard
              title="City budget priorities"
              body="The mayor proposes how Oakland spends money — police staffing levels, library hours, road repair, homeless services, and more. Council must approve the final budget, but the mayor's plan sets the starting point."
            />
            <InfoCard
              title="Department leadership"
              body="The mayor appoints and directs city administrators who run day-to-day operations: police, public works, housing, economic development, and others."
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
          <p className="mt-2 text-slate-600">
            Signals to track once official data and reporting are linked.
          </p>
          <ul className="mt-4 space-y-3 text-slate-700">
            <li className="rounded-2xl border border-slate-200 px-4 py-3">
              <span className="font-medium text-slate-900">
                911 and police response times
              </span>{" "}
              — staffing plans and budget choices may show up here within months,
              not years.
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
              — Oakland has faced budget gaps before. Watch whether the mayor
              closes shortfalls through cuts, new revenue, or both.
            </li>
          </ul>
        </section>

        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Recent actions</h2>
          <p className="text-slate-600">
            Topic placeholders. Each card shows what CivicSignal would fill in
            once sources are linked.
          </p>

          <ActionCard
            title="Public safety staffing"
            whatWeKnow="Barbara Lee holds the mayor's office. In Oakland, the mayor influences police staffing through budget proposals and department leadership. No specific staffing decision has been verified on this page."
            whatThisCouldMean="Residents might notice changes in 911 wait times, how quickly calls get a response, and whether patrol levels feel different in their neighborhood."
            whatWeStillNeed="Whether Lee has proposed or directed any staffing changes, what OPD recruitment or dispatch budget lines look like, and whether any response-time targets were announced."
            sourceTargets="Mayor's office press releases on public safety; Oakland city budget OPD staffing and recruitment line items; OPD or 911 call-center performance dashboards; City Council public safety committee meeting records"
          />

          <ActionCard
            title="Homelessness and encampment policy"
            whatWeKnow="Oakland's mayor helps set local homeless spending and encampment response, but Alameda County runs much of the safety-net system. No specific encampment or shelter policy has been verified on this page."
            whatThisCouldMean="Residents might notice how quickly encampments near them are addressed, whether people are offered shelter before being moved, and whether street conditions change."
            whatWeStillNeed="Any announced encampment protocol changes, shelter-bed funding in the city budget, and whether new county coordination agreements exist."
            sourceTargets="City Council agenda items on homelessness ordinances; mayor's office announcements on encampment or shelter strategy; city budget homeless-services allocations; Oaklandside or SF Chronicle reporting on encampment operations"
          />

          <ActionCard
            title="City services and infrastructure"
            whatWeKnow="The mayor directs department priorities for libraries, parks, and road maintenance through the budget process. No specific service restoration or infrastructure initiative has been verified on this page."
            whatThisCouldMean="Residents might notice library hours, playground upkeep, trash pickup, and how long potholes or broken sidewalks go unfixed."
            whatWeStillNeed="Department budget requests for libraries, parks, and public works; any stated timelines for restoring services; and whether Council approved related spending."
            sourceTargets="City budget line items for libraries, parks, and public works; Public Works service-request or street-repair dashboards; City Council budget hearing records; mayor press releases on city services"
          />

          <ActionCard
            title="Housing production and permitting"
            whatWeKnow="The mayor can influence permitting speed and affordable-housing funding, but state building rules and market conditions limit what City Hall can do alone. No specific permitting or housing funding action has been verified on this page."
            whatThisCouldMean="Residents might notice whether housing approvals move faster, whether affordable projects get funded, and whether new construction shows up nearby over time."
            whatWeStillNeed="Any permitting reform proposals, affordable-housing budget allocations, Planning Bureau staffing changes, and Council votes on related housing items."
            sourceTargets="Planning and Building permit-processing dashboards; City Council housing agenda items and votes; mayor statements or press releases on housing production; Oaklandside or SF Chronicle coverage of permitting backlogs"
          />
        </section>

        <section className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-2xl font-bold">Bottom line</h2>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            Barbara Lee runs Oakland&apos;s executive branch — she can set
            direction, propose spending, and oversee departments that touch
            streets, parks, police response, and housing. She cannot
            single-handedly fix crime, homelessness, or the cost of living.
          </p>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            This page does not yet answer what she has changed. Once CivicSignal
            links sources, the fair test is whether city services improve,
            decisions get clearer, and Oakland&apos;s biggest problems move in
            the right direction — while remembering that Council, the county, the
            state, and the broader economy all share the wheel.
          </p>
        </section>
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
  whatWeKnow,
  whatThisCouldMean,
  whatWeStillNeed,
  sourceTargets,
}: {
  title: string;
  whatWeKnow: string;
  whatThisCouldMean: string;
  whatWeStillNeed: string;
  sourceTargets: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 p-6">
      <h3 className="text-xl font-bold">{title}</h3>
      <dl className="mt-4 space-y-4 text-slate-700">
        <div>
          <dt className="font-medium text-slate-900">What we know:</dt>
          <dd className="mt-1 leading-7">{whatWeKnow}</dd>
        </div>
        <div>
          <dt className="font-medium text-slate-900">What this could mean:</dt>
          <dd className="mt-1 leading-7">{whatThisCouldMean}</dd>
        </div>
        <div>
          <dt className="font-medium text-slate-900">
            What we still need to verify:
          </dt>
          <dd className="mt-1 leading-7">{whatWeStillNeed}</dd>
        </div>
        <div>
          <dt className="font-medium text-slate-900">Source targets:</dt>
          <dd className="mt-1 leading-7">{sourceTargets}</dd>
        </div>
      </dl>
    </div>
  );
}
