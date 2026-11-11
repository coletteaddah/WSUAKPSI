import { footer, nav, site } from "@/data/site";
import { Instagram, Linkedin, Mail } from "./Icons";
import { Logo } from "./Navbar";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="mb-4">
              <Logo />
            </div>
            <p className="footer-blurb">{footer.blurb}</p>
            <div className="footer-social">
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-icon" aria-label="Instagram">
                <Instagram />
              </a>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-icon" aria-label="LinkedIn">
                <Linkedin />
              </a>
              <a href={`mailto:${site.email}`} className="btn btn-ghost btn-icon" aria-label="Email">
                <Mail />
              </a>
            </div>
          </div>
          <div>
            <h3 className="footer-heading">Quick Links</h3>
            <div className="footer-links">
              {nav.map((n) => (
                <a key={n.href} href={n.href}>
                  {n.label}
                </a>
              ))}
              <a href={site.hubUrl}>Member Portal</a>
            </div>
          </div>
          <div>
            <h3 className="footer-heading">Contact</h3>
            <div className="footer-contact">
              <p>{site.email}</p>
              {site.location.map((l) => (
                <p key={l}>{l}</p>
              ))}
            </div>
          </div>
        </div>
        <div className="separator" />
        <div className="footer-bottom">
          <p>
            © {year} {site.org} - {site.chapter} Chapter. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
