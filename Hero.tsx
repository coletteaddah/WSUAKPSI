import { hero, site } from "@/data/site";
import Counter from "./Counter";
import { ArrowRight, Handshake } from "./Icons";
import { Waves } from "./Patterns";
import Placeholder from "./Placeholder";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <Waves double />
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="hero-heading">
            <h1 className="hero-title">
              {hero.titleTop}
              <br className="lg-only" /> {hero.titleBottom}
            </h1>
            <p className="hero-tagline">{hero.tagline}</p>
          </div>

          <div className="hero-image-mobile">
            <div className="hero-image-mobile-frame">
              <Placeholder src={hero.image} alt={`${site.chapter} members`} />
            </div>
          </div>

          <div className="hero-buttons">
            <a href={site.applyUrl} className="btn btn-primary btn-lg group">
              Apply Now
              <ArrowRight className="arrow" />
            </a>
            <a href={site.partnerUrl} className="btn btn-outline btn-lg group">
              Partner With Us
              <Handshake className="grow" />
            </a>
          </div>

          <div className="hero-stats">
            {hero.stats.map((s) => (
              <div key={s.label} className="hero-stat">
                <div className="hero-stat-value">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <div className="hero-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-image-desktop">
          <div className="hero-image-desktop-frame">
            <Placeholder src={hero.image} alt={`${site.chapter} members`} fit="contain" />
          </div>
        </div>
      </div>
    </section>
  );
}
