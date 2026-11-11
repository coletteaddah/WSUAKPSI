import { tracks } from "@/data/site";
import { trackIcons } from "./Icons";
import { CornerDots } from "./Patterns";

export default function Pillars() {
  return (
    <section className="section relative-clip">
      <CornerDots />
      <div className="container above">
        <div className="section-head">
          <h2 className="section-title">{tracks.heading}</h2>
          <p className="section-sub">{tracks.sub}</p>
        </div>
        <div className="pillars">
          {tracks.items.map((t) => {
            const Icon = trackIcons[t.name as keyof typeof trackIcons] ?? trackIcons.Tech;
            return (
              <div key={t.name} className="card pillar group">
                <div className="pillar-head">
                  <div className="pillar-icon">
                    <Icon />
                  </div>
                  <div className="pillar-title">{t.name}</div>
                </div>
                <div className="pillar-body">
                  <div>{t.body}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
