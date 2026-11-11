"use client";

import { useEffect, useState } from "react";
import { nav, site } from "@/data/site";
import { Menu, Moon, Sun, Users, X } from "./Icons";

export function Logo() {
  if (site.logo) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={site.logo} alt={`${site.org} ${site.chapter}`} className="logo-img" />;
  }
  return (
    <span className="logo-text">
      <span className="logo-greek">{site.greek}</span>
      <span className="logo-chapter">{site.chapter}</span>
    </span>
  );
}

function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const dark = !root.classList.contains("dark");
    root.classList.toggle("dark", dark);
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch {}
  };
  return (
    <button className="btn btn-ghost btn-icon theme-toggle" onClick={toggle}>
      <Sun className="icon-sun" />
      <Moon className="icon-moon" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className="site-header">
      <div className="container">
        <div className="header-row">
          <a href="#home" className="header-logo" aria-label="Home">
            <Logo />
          </a>

          <nav aria-label="Main" className="header-nav">
            <ul>
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="nav-link">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-actions">
            <a href={site.hubUrl} className="btn btn-outline btn-sm portal-btn">
              <Users className="mr-2" />
              Member Portal
            </a>
            <ThemeToggle />
            <button className="btn btn-ghost btn-icon menu-btn" onClick={() => setOpen(true)}>
              <Menu />
              <span className="sr-only">Toggle navigation menu</span>
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="sheet" role="dialog" aria-modal="true">
          <div className="sheet-overlay" onClick={() => setOpen(false)} />
          <div className="sheet-panel">
            <button className="btn btn-ghost btn-icon sheet-close" onClick={() => setOpen(false)}>
              <X />
              <span className="sr-only">Close</span>
            </button>
            <div className="sheet-logo">
              <Logo />
            </div>
            <nav className="sheet-nav">
              {nav.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              ))}
              <a href={site.hubUrl} className="btn btn-outline" onClick={() => setOpen(false)}>
                <Users className="mr-2" />
                Member Portal
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
