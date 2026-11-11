import { board } from "@/data/site";
import { Peak } from "./Patterns";

function initials(name: string) {
  if (name.includes("TBD")) return "?";
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function Board() {
  return (
    <section id="board" className="section section-muted relative-clip">
      <Peak />
      <div className="container above">
        <div className="section-head">
          <h2 className="section-title">{board.heading}</h2>
          <p className="section-sub">{board.sub}</p>
        </div>
        <div className="board-grid">
          {board.members.map((m, i) => (
            <div key={`${m.role}-${i}`} className="card officer group">
              <div className="officer-head">
                <span className="avatar">
                  {m.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={m.image} alt={m.name} />
                  ) : (
                    <span className="avatar-fallback">{initials(m.name)}</span>
                  )}
                </span>
              </div>
              <div className="officer-body">
                <h3>{m.name}</h3>
                <p>{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
