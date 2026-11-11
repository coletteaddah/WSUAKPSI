import { hub, site } from "@/data/site";
import { Calendar, ClipboardCheck, FileText, Megaphone, Users } from "./Icons";
import { GridLines } from "./Patterns";

const icons = { calendar: Calendar, check: ClipboardCheck, users: Users, megaphone: Megaphone };

export default function Hub() {
  return (
    <section className="section section-plain relative-clip">
      <GridLines />
      <div className="container above">
        <div className="section-head">
          <h2 className="section-title">{hub.heading}</h2>
          <p className="section-sub">{hub.sub}</p>
        </div>
        <div className="hub-grid">
          <div className="stack-6">
            <div className="stack-4">
              <h3 className="hub-title">{hub.title}</h3>
              <p className="hub-body">{hub.body}</p>
            </div>
            <div className="hub-features">
              {hub.features.map((f) => {
                const Icon = icons[f.icon as keyof typeof icons] ?? FileText;
                return (
                  <div key={f.title} className="hub-feature">
                    <div className="icon-tile">
                      <Icon />
                    </div>
                    <div>
                      <h4>{f.title}</h4>
                      <p>{f.body}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="pt-4">
              <a href={site.hubUrl} className="btn btn-primary btn-md shadow-lg">
                <Users className="mr-2" />
                Open the Hub
              </a>
            </div>
          </div>

          <div className="hub-card">
            <div className="hub-card-head">
              <div className="hub-card-icon">
                <FileText />
              </div>
              <div className="hub-card-title">{hub.cardTitle}</div>
            </div>
            <div className="hub-card-body">
              <div className="stack-3">
                {hub.cardRows.map((r) => (
                  <div key={r.label} className="hub-row">
                    <span>{r.label}</span>
                    <span>{r.meta}</span>
                  </div>
                ))}
              </div>
              <div className="hub-note">
                <p>{hub.cardNote}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
