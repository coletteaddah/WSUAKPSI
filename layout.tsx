import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AKPsi Beta Lambda",
  description:
    "Beta Lambda, the Washington State University chapter of Alpha Kappa Psi, the oldest and largest professional business fraternity.",
};

// Sets light/dark before the page paints so there is no flash.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;var r=document.documentElement;r.classList.toggle('dark',d);r.classList.add('js')}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
