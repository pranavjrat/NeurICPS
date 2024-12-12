export type PamphletType = {
  title: string;
  description: string;
  image: string;
}

export const links = [
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

export const pamphlets: PamphletType = [
  {
    title: 'Agriculture',
    description: 'Innovative solutions for modern farming.',
    image: '/images/agriculture.png'
  },
  {
    title: 'Smart Education',
    description: 'Technology for smarter learning.',
    image: '/images/agriculture.png'
  },
  {
    title: 'Security',
    description: 'Advanced tools for enhanced safety.',
    image: '/images/agriculture.png'
  },
  {
    title: 'Healthcare',
    description: 'Improving lives with better health solutions.',
    image: '/images/agriculture.png'
  },
  {
    title: 'IIoT',
    description: 'Connecting industries with smart devices.',
    image: '/images/agriculture.png'
  },
  {
    title: 'Industrial',
    description: 'With robotics and artificial intelligence taking precedence in industrial infrastructure, IoT comes to the forefront of the next industrial revolution.',
    image: '/images/agriculture.png'
  },
  ,
] as const;


