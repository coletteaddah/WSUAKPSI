import { alumni, partner, site } from "@/data/site";
import { ArrowRight } from "./Icons";
import { Waves } from "./Patterns";

export default function Alumni() {
  const rows: (typeof alumni.companies)[] = [];
  for (let i = 0; i < alumni.companies.length; i += alumni.perRow) {
    rows.push(alumni.companies.slice(i, i + alumni.perRow));
  }

  return (
    <section id="partnerships" className="section section-muted relative-clip">
      <Waves />
      <div className="container above">
        <div className="section-head">
          <h2 className="section-title">{alumni.heading}</h2>
          <p className="section-sub">{alumni.sub}</p>
        </div>

        <div className="logo-box">
          <div className="stack-6">
            {rows.map((row, r) => (
              <div key={r} className="logo-row">
                {row.map((c) => (
                  <div key={c.name} className="logo-cell">
                    {c.logo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={c.logo} alt={c.name} />
                    ) : (
                      <span>{c.name}</span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="card partner-card">
          <div className="partner-head">
            <div className="partner-title">{partner.title}</div>
            <div className="partner-desc">{partner.body}</div>
          </div>
          <div className="partner-actions">
            <a href={`mailto:${site.email}`} className="btn btn-outline btn-md">
              Partnership Opportunities
              <ArrowRight />
            </a>
            <a href={site.partnerUrl} className="btn btn-muted btn-md">
              View our Sponsorship Packet
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
