import { about, intro } from "@/data/site";
import { Waves } from "./Patterns";
import Placeholder from "./Placeholder";

export function Intro() {
  return (
    <section className="section section-muted">
      <div className="container">
        <div className="two-col two-col-wide">
          <div className="intro-image" data-reveal data-delay>
            <Placeholder src={intro.image} alt="Chapter photo" className="zoom" />
          </div>
          <div className="stack-6" data-reveal>
            <h2 className="section-title intro-title">{intro.heading}</h2>
            <div className="stack-4 body-text">
              {intro.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <section id="about" className="section section-muted relative-clip">
      <Waves double />
      <div className="container above">
        <div className="two-col">
          <div className="stack-6" data-reveal>
            <h2 className="section-title">{about.heading}</h2>
            <div className="stack-4 body-text muted">
              {about.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
              <blockquote className="quote">
                “{about.quote.text}”<cite>— {about.quote.cite}</cite>
              </blockquote>
            </div>
          </div>
          <div data-reveal data-delay>
            <div className="about-image">
              <Placeholder src={about.image} alt="Pledge class photo" className="zoom" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
