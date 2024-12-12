export const links: LinkType = [
  {
    name: "About Us",
    href: "about",
    subLinks: [
      { name: 'Governing Council', href: '/about/governing-council' },
      { name: 'Vision', href: '/about/Vision' },
      { name: 'Awards', href: '/about/awards' },
    ]
  },
  {
    name: "Events",
    href: "events",
    subLinks: [
      { name: 'Workshops', href: '/events/workshops' },
      { name: 'FDP', href: '/events/fdp' },
      { name: 'Seminars/Webinars', href: '/events/seminars' },
      { name: 'International Connections', href: '/events/international-connections' },
    ]

  },
  {
    name: "Focus Area",
    href: "focus-area",
    subLinks: [
      { name: 'Core Tech', href: '/events/core-tech' },
      { name: 'Application Verticals', href: '/events/application-verticals' },
    ]
  },
  {
    name: "Achievements",
    href: "achievements",
    subLinks: [
      { name: 'Publications', href: '/achievements/publications' },
      { name: 'Projects', href: '/achievements/projects' },
      { name: 'Patents', href: '/achievements/patents' },
    ]
  },
] as const;

