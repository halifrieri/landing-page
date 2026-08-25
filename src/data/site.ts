/**
 * Single source of truth for identity and links.
 * Deliberately does NOT include a phone number — the resume carries one,
 * a public web page should not.
 */
export const site = {
  name: "Haley Lifrieri",
  role: "Founding Engineer",
  org: "Koi",
  location: "New York, NY",
  url: "https://haleylifrieri.com",
  email: "halifrieri@gmail.com",
  resume: "/Haley-Lifrieri-Resume.pdf",
  description:
    "Founding engineer at Koi. I build products end to end — from the first prototype to the infrastructure that keeps them running. Applied AI, production systems on AWS and Azure, and enterprise analytics tools.",
  links: {
    github: "https://github.com/halifrieri",
    linkedin: "https://www.linkedin.com/in/haleylifrieri/",
  },
} as const;

export const nav = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Resume", href: site.resume },
  { label: "Contact", href: "/#contact" },
];
