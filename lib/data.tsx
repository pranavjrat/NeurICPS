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
    href: "/about",
    subLinks: [
      { name: "Governing Council", href: "/about/governing-council" },
      { name: "Venue", href: "/about/venue" },
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
    description: "Smart farming is the new buzzword in agriculture and IOT is the next frontier of progress.",
    image: "/images/agriculture.png",
  },
  {
    title: "Smart Education",
    description: "Today, internet and mobile technology has helped in elevating the scope and method of learning.",
    image: "/images/edu.png",
  },
  {
    title: "Security",
    description: "Security and surveillance capabilities are largely enhanced by IoT technology",
    image: "/images/sec.jpg",
  },
  {
    title: "Healthcare",
    description: "IoT is rapidly changing the healthcare industry by introducing new dynamics to the interaction between devices and people.",
    image: "/images/health.png",
  },
   {
    title: "Industrial",
    description:
      "With robotics and artificial intelligence taking precedence in industrial infrastructure, IoT comes to the forefront of the next industrial revolution.",
    image: "/images/indus.jpg",
  },
];

export const images = [
  {
    src: "/infrastructure.jpg",
    alt: "infrastructure",
    caption: "Existing Infrastructure",
    route: "/about",
  },
  {
    src: "/venue.jpeg",
    alt: "venue",
    caption: "Existing Venues",
    route: "/about/venue",
  },
  {
    src: "/tech.jpg",
    alt: "Person standing alone in a misty forest",
    caption: "Technology Used",
    route: "/focus-area",
  },
  {
    src: "/events.jpg",
    alt: "Person standing alone in a misty forest",
    caption: "Events",
    route: "/events",
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
    name: "Prof. Vivek Kumar Sehgal",
    designation: "Chairman",
    image:
      "/vksehgal.jpg",
  },
  {
    name: "Dr. Ruchi Verma",
    designation: "Internal Member",
    image:
      "/ruchiverma.jpg",
  },
  {
    name: "Dr. Vikas Baghel",
    designation: "Internal Member",
    image:
      "/vikasbaghel.jpg",
  },
  {
    name: "Dr. Tanmay Gupta",
    designation: "Internal Member",
    image:
      "/tanmay.jpg",
  },
  {
    "name": "Prof. Raj Bhatnagar",
    "designation": "University of Cincinnati, USA",
    "image": "/raj_bhatnagar.jpg"
  },
  {
    "name": "Prof. Deepak Khazanchi",
    "designation": "University of Nebraska, Omaha, USA",
    "image": "/deepak_khazanchi.jpg"
  },
  {
    "name": "Prof. Sartaj Sahni",
    "designation": "University of Florida, USA",
    "image": "/sartaj_sahni.jpg"
  }
];

export const externalMembers = [
  { name: "Prof. Raj Bhatnagar" },
  { name: "Prof. Deepak Khazanchi" },
  { name: "Prof. Sartaj Sahni" },
];

export const activities = [
  { name: "Technical Talks" },
  { name: "Research Proposals (DST, DRDO, NSF)" },
  { name: "Publications in ranked conferences" },
  { name: "Industrial consultancy " },
  { name: "Symposium / Industry 5.0 week technically sponsored by ACM/IEEE " },
  { name: "Small startups (With Process Industries and Software Technology Parks of India" },
  { name: "MTech. and Ph.D. with specialization in this field" },
  { name: "Periodical articles in international newsletters and magazines" },
  { name: "Professional chapters ACM SIGBED and IEEE Industrial Electronics Society" },
  { name: "Workshops related to CPS-Industry 5.0" },
  { name: "Design of Smart Sensors" },
  { name: "Webinars" },
  { name: "FDPs" },
  { name: "MoU with industry and academia" },
  { name: "Patents" }
];

export const coreTech = [
  { description: "Raspberry Pi 4 Model-B and Raspberry Pi 5 with 8 GB RAM", quantity: 5 },
  { description: "Official USB Type-C 15.3 W Power Supply for Raspberry Pi-4 Black", quantity: 5 },
  { description: "SanDisk Micro SD/SDHC 32GB Class 10 Memory Card", quantity: 5 },
  { description: "7” Official Raspberry Pi Display with Capacitive Touch Screen", quantity: 5 },
  { description: "Raspberry Pi4 Model Touch Screen 7 Inch Display Case-ABS, Red", quantity: 5 },
  { description: "5MP Raspberry Pi ¾ Model B Camera Module Rev 1.3 with Cable", quantity: 5 },
  { description: "SanDisk Micro SD Card/ Micro Storage Card 32GB", quantity: 9 },
  { description: "Waveshare 77 FOV Camera", quantity: 9 },
  { description: "AC8265 Wireless NIC for Jetson Nano", quantity: 9 },
  { description: "5V-4A Adapter for Jetson Nano Dev", quantity: 9 },
  { description: "HDMI Cable", quantity: 9 },
  { description: "Jetson Nano Developer Kit", quantity: 9 },
];

export const sensors = [
  { modelName: "KY-008 650nm Laser Sensor Module 6mm 5V" },
  { modelName: "Infrared Obstacle Avoidance Tracking Sensor Module" },
  { modelName: "IR Infrared Flame Detection Sensor Module" },
  { modelName: "315Mhz RF Wireless Transmitter and Receiver Kit" },
  { modelName: "TCRT5000 Tracking Module" },
  { modelName: "SW-420 Normally Closed Vibration Sensor Module" },
  { modelName: "SW1801P 3pin Normally Open Vibration Sensor Module" },
  { modelName: "MQ-2 Smoke Gas LPG Butane Hydrogen Sensor Module" },
  { modelName: "Sound Sensor Module" },
  { modelName: "DHT11 Temperature and Humidity Sensor Module" },
  { modelName: "HC-SR04 Ultrasonic Sensor 4pin" },
  { modelName: "DS1302 RTC Real Time Clock Module (No Battery)" },
  { modelName: "HC-SR501 PIR Motion Sensor Module Green" },
  { modelName: "Soil Moisture Detection Humidity Sensor Module" },
  { modelName: "Raindrops Detection Sensor Module Snow Rain Weather" },
  { modelName: "3pin Photosensitive Sensor Module Light-Dependent Control" }
];

