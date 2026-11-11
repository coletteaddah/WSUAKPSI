// All site content lives here. Edit this file to update text, people, links and photos.
// Anything marked TODO is a placeholder.
// Photos: drop files into /public/images and set the path, e.g. image: "/images/hero.png".
// Leave image empty ("") to show a placeholder box.

export const site = {
  chapter: "Beta Lambda",
  org: "Alpha Kappa Psi",
  greek: "ΑΚΨ",
  school: "Washington State University",
  location: ["Washington State University", "Pullman, WA 99164"],
  email: "betalambda@example.com", // TODO real chapter email
  instagram: "https://instagram.com/", // TODO
  linkedin: "https://linkedin.com/", // TODO
  applyUrl: "#faq", // TODO rush form link
  partnerUrl: "#partnerships", // TODO sponsorship packet link
  hubUrl: "#", // TODO Beta Lambda Hub URL
  logo: "", // TODO chapter logo, e.g. "/images/logo.png" (shows text if empty)
};

export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Board", href: "#board" },
  { label: "Partnerships", href: "#partnerships" },
];

export const hero = {
  titleTop: "Alpha",
  titleBottom: "Kappa Psi",
  tagline: "The oldest and largest professional business fraternity, here at Washington State.",
  // Tip: a photo collage PNG with a transparent background looks best here (like the reference site).
  image: "", // TODO
  stats: [
    { value: 5, suffix: "", label: "Career Tracks" },
    { value: 50, suffix: "+", label: "Members" }, // TODO real member count
  ],
};

export const intro = {
  heading: "Building Principled Business Leaders",
  body: [
    "Welcome to the Beta Lambda Chapter of Alpha Kappa Psi at Washington State University. We prepare members for their careers through hands-on professional development, mentorship, and real experience you won't get from class alone.",
    "Grow alongside some of WSU's most driven future analysts, consultants, marketers, accountants, and entrepreneurs.",
  ],
  image: "", // TODO chapter photo
};

export const about = {
  heading: "About AKPsi",
  body: [
    "Founded in 1904 at New York University, Alpha Kappa Psi is the oldest and largest professional business fraternity in the world, open to students of every major.",
    "Our mission is to develop principled business leaders through brotherhood, integrity, knowledge, service, and unity.",
  ],
  quote: {
    text: "TODO: Add a short quote from a member about what AKPsi has meant to them.",
    cite: "Member Name, Pledge Class",
  },
  image: "", // TODO pledge class photo
};

export const tracks = {
  heading: "Our Five Career Tracks",
  sub: "Every member joins an AZ Group with an 8-week rotating curriculum each semester",
  items: [
    { name: "Finance", body: "Markets, valuation, and modeling to prep you for banking, corporate finance, and accounting roles." },
    { name: "Communications", body: "Public speaking, professional writing, and PR skills that make you the clearest voice in the room." },
    { name: "Tech", body: "Business analysis, data, and IT consulting tools that connect people, process, and technology." },
    { name: "Marketing", body: "Brand strategy, consumer insight, and campaign planning with real projects for your portfolio." },
    { name: "Advertising", body: "Creative direction, content, and media planning, from the first idea to the final pitch." },
  ],
};

export const board = {
  heading: "Executive Board",
  sub: "Meet the leaders driving our chapter forward",
  members: [
    { name: "Colette Addah", role: "President", image: "" },
    { name: "Name TBD", role: "VP of Membership", image: "" }, // TODO
    { name: "Name TBD", role: "VP of Professional Development", image: "" }, // TODO
    { name: "Name TBD", role: "VP of Finance", image: "" }, // TODO
    { name: "Name TBD", role: "VP of Communications", image: "" }, // TODO
    { name: "Name TBD", role: "VP of Alumni Relations", image: "" }, // TODO
    { name: "Name TBD", role: "VP of Operations", image: "" }, // TODO
    { name: "Name TBD", role: "Master of Rituals", image: "" }, // TODO
    { name: "Name TBD", role: "Secretary", image: "" }, // TODO
    { name: "Name TBD", role: "Historian", image: "" }, // TODO
  ],
};

export const hub = {
  heading: "Member Hub",
  sub: "Everything active members need to stay on top of chapter life, in one place",
  title: "Beta Lambda Hub",
  body: "Our chapter portal for events, attendance, announcements, and career tracks. Sign in with your WSU account.",
  features: [
    { icon: "calendar", title: "Events & RSVP", body: "Chapter events and sign-ups" },
    { icon: "check", title: "Attendance", body: "Check in and track points" },
    { icon: "users", title: "Alumni Directory", body: "Connect with Beta Lambda alumni" },
    { icon: "megaphone", title: "Announcements", body: "Updates from exec" },
  ],
  cardTitle: "Inside the Hub",
  cardRows: [
    { label: "Rush & Interviews", meta: "Recruitment" },
    { label: "AZ Groups Calendar", meta: "5 tracks" },
    { label: "Forms & Attendance", meta: "Weekly" },
    { label: "Alumni Directory", meta: "Networking" },
  ],
  cardNote: "Members only. Sign in with your WSU account.",
};

export const alumni = {
  heading: "Where Beta Lambda Alumni Work",
  sub: "Beta Lambda graduates are making an impact across every industry",
  // TODO replace with real alumni employers. Add logo files to /public/images/logos and set `logo`.
  companies: Array.from({ length: 24 }, (_, i) => ({ name: `Company ${i + 1}`, logo: "" })),
  perRow: 8,
};

export const partner = {
  title: "Partner with Beta Lambda",
  body: "Connect with driven WSU business students and help shape the next generation of leaders",
};

export const faq = {
  heading: "Frequently Asked Questions",
  sub: "Everything you need to know about AKPsi",
  items: [
    { q: "Do I have to be a business major?", a: "No. AKPsi is open to every major. What matters is that you want to grow professionally." },
    { q: "What does the time commitment look like?", a: "TODO: Weekly chapter meetings, your AZ Group sessions, and a few events each month. Pledge semester is more involved." },
    { q: "What if I can't afford dues?", a: "TODO: Describe payment plans or scholarships. Money should never be the reason someone doesn't rush." },
    { q: "What are AZ Groups?", a: "Career tracks (Finance, Communications, Tech, Marketing, Advertising) with an 8-week rotating curriculum each semester." },
    { q: "How does AKPsi help with career development?", a: "Resume reviews, mock interviews, company visits, alumni mentorship, and a national network of professionals." },
    { q: "What's the rush process like?", a: "TODO: Info nights, a professional event, a social event, then interviews. Follow us on Instagram for dates." },
  ],
};

export const footer = {
  blurb: "The premier professional business fraternity at Washington State University.",
};
