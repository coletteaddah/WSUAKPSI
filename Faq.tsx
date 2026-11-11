import { faq } from "@/data/site";
import { ChevronDown } from "./Icons";
import { CornerDots } from "./Patterns";

export default function Faq() {
  return (
    <section id="faq" className="section relative-clip">
      <CornerDots />
      <div className="container above">
        <div className="section-head">
          <h2 className="section-title">{faq.heading}</h2>
          <p className="section-sub">{faq.sub}</p>
        </div>
        <div className="faq-list">
          {faq.items.map((item) => (
            <details key={item.q} className="faq-item">
              <summary>
                {item.q}
                <ChevronDown className="faq-chevron" />
              </summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
