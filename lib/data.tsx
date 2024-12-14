// Define PamphletType
export type PamphletType = {
  title: string;
  description: string;
  image: string;
};

// Navigation Links
export const links = [
  {
    name: "About Us",
    href: "#about",
    subLinks: [
      { name: "Governing Council", href: "/about/governing-council" },
      { name: "Vision", href: "/about/vision" },
      { name: "Awards", href: "/about/awards" },
    ],
  },
  {
    name: "Events",
    href: "/events",
    subLinks: [
      { name: "Workshops", href: "/events/workshops" },
      { name: "FDP", href: "/events/fdp" },
      { name: "Seminars/Webinars", href: "/events/seminars" },
      {
        name: "International Connections",
        href: "/events/international-connections",
      },
    ],
  },
  {
    name: "Focus Area",
    href: "/focus-area",
    subLinks: [
      { name: "Core Tech", href: "/events/core-tech" },
      { name: "Application Verticals", href: "/events/application-verticals" },
    ],
  },
  {
    name: "Achievements",
    href: "/achievements",
    subLinks: [
      { name: "Publications", href: "/achievements/publications" },
      { name: "Projects", href: "/achievements/projects" },
      { name: "Patents", href: "/achievements/patents" },
    ],
  },
];

// Pamphlets Array
export const pamphlets: PamphletType[] = [
  {
    title: "Agriculture",
    description: "Innovative solutions for modern farming.",
    image: "/images/agriculture.png",
  },
  {
    title: "Smart Education",
    description: "Technology for smarter learning.",
    image: "/images/agriculture.png",
  },
  {
    title: "Security",
    description: "Advanced tools for enhanced safety.",
    image: "/images/agriculture.png",
  },
  {
    title: "Healthcare",
    description: "Improving lives with better health solutions.",
    image: "/images/agriculture.png",
  },
  {
    title: "IIoT",
    description: "Connecting industries with smart devices.",
    image: "/images/agriculture.png",
  },
  {
    title: "Industrial",
    description:
      "With robotics and artificial intelligence taking precedence in industrial infrastructure, IoT comes to the forefront of the next industrial revolution.",
    image: "/images/agriculture.png",
  },
];

export const images = [
  {
    src: "/owl.jpg",
    alt: "Volcano and lava field against a stormy sky",
    caption: "Mountains and volcanos",
  },
  {
    src: "/owl.jpg",
    alt: "Guy on a bike on a wooden bridge with a forest backdrop",
    caption: "Adventure getaways",
  },
  {
    src: "/owl.jpg",
    alt: "Person standing alone in a misty forest",
    caption: "Forest escapes",
  },
  {
    src: "/owl.jpg",
    alt: "Person standing alone in a misty forest",
    caption: "Forest escapes",
  },
];

// lib/messages.ts
export const messages = [
  "To establish Cyber Physical Systems Hub, specially designed and created to focus in the fields of interdisciplinary research and teaching by integrating embedded systems, to realize and solve global grand engineering challenges.",
  "To actively engage in fundamental and applied research to solve radical problems using Computer vision, Machine learning, Sensor Networks, Data Analytics, Network and Data security.",
  "To promote Industrial collaboration in cutting edge technologies for innovative product development.",
];

export const teamMembers = [
  {
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "/owl.jpg",
  },
  {
    name: "Jane Smith",
    designation: "Product Manager",
    image:
      "/owl.jpg",
  },
  {
    name: "Alice Brown",
    designation: "UI/UX Designer",
    image:
      "/owl.jpg",
  },
  {
    name: "Bob Johnson",
    designation: "Data Scientist",
    image:
      "/owl.jpg",
  },
];

export const externalMembers = [
  { name: "Alice Brown" },
  { name: "Bob Johnson" },
  { name: "Charlie Wilson" },
];

