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
      { name: "Governing Council", href: "/#about" },
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
      { name: "Publications", href: "/achievements" },
      { name: "Projects", href: "/achievements/projects" },
      { name: "Patents", href: "/achievements/patents" },
      { name: "PhD", href: "/achievements/phd" },
    ],
  },
];

// Pamphlets Array
export const pamphlets: PamphletType[] = [
  {
    title: "Agriculture",
    description:
      "Smart farming is the new buzzword in agriculture and IOT is the next frontier of progress.",
    image: "/images/agriculture.png",
  },
  {
    title: "Smart Education",
    description:
      "Today, internet and mobile technology has helped in elevating the scope and method of learning.",
    image: "/images/edu.png",
  },
  {
    title: "Security",
    description:
      "Security and surveillance capabilities are largely enhanced by IoT technology",
    image: "/images/sec.jpg",
  },
  {
    title: "Healthcare",
    description:
      "IoT is rapidly changing the healthcare industry by introducing new dynamics to the interaction between devices and people.",
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
    image: "/vksehgal.jpg",
    link: "https://www.linkedin.com/in/vivekkumarsehgal/",
  },
  {
    name: "Dr. Ruchi Verma",
    designation: "Internal Member",
    image: "/ruchiverma.jpg",
    link: "https://www.linkedin.com/in/ruchi-verma-682b71175/",
  },
  {
    name: "Dr. Vikas Baghel",
    designation: "Internal Member",
    image: "/vikasbaghel.jpg",
    link: "https://scholar.google.co.in/citations?user=ScoGja0AAAAJ",
  },
  {
    name: "Dr. Tanmay Gupta",
    designation: "Internal Member",
    image: "/tanmay.jpg",
    link: "https://www.linkedin.com/in/dr-tanmay-gupta-a4b79319",
  },
  {
    name: "Dr. Aman Sharma",
    designation: "Internal Member",
    image: "/aman.jpg",
    link: "https://www.linkedin.com/in/dr-aman-sharma-9186485b",
  },
];

export const teamMembersExternal = [
  {
    name: "Prof. Raj Bhatnagar",
    designation: "University of Cincinnati, USA",
    image: "/raj_bhatnagar.jpg",
    link: "https://www.linkedin.com/in/raj-bhatnagar-52546b4/",
  },
  {
    name: "Prof. Deepak Khazanchi",
    designation: "University of Nebraska, Omaha, USA",
    image: "/deepak_khazanchi.jpg",
    link: "https://www.linkedin.com/in/dkhazanchi/",
  },
  {
    name: "Prof. Sartaj Sahni",
    designation: "University of Florida, USA",
    image: "/sartaj_sahni.jpg",
    link: "https://www.linkedin.com/in/sartaj-sahni-4b06ba17",
  },
  {
    name: "Dr. Hemangee K. Kapoor",
    designation: "IIT Guwahati",
    image: "/drhemangee.jpg",
    link: "https://in.linkedin.com/in/hemangee-kapoor-251240",
  },
  {
    name: "Mr. Bharatkumar Sharma",
    designation: "NVIDIA",
    image: "/bharatkumar.jpg",
    link: "https://in.linkedin.com/in/bharatkumar-sharma-a631755",
  },
  {
    name: "Dr. Mohit Singhal",
    designation: "Northeastern University",
    image: "/mohit-singhal.jpg",
    link: "https://www.linkedin.com/in/mohit-singhal-1202",
  },
  {
    name: "Dr. Prashant S Rana",
    designation: "Thapar Institute of Engg & Tech, Patiala",
    image: "/prashant-rana.png",
    link: "https://scholar.google.co.in/citations?user=MNj1Dw4AAAAJ",
  },
  {
    name: "Prof. Arpan Kumar Kar",
    designation: "IIT Delhi",
    image: "/arpan-kumar-kar.jpg",
    link: "https://www.linkedin.com/in/arpankar",
  },
  {
    name: "Dr. Dheeraj Chahal",
    designation: "TCS",
    image: "/dheeraj-chahal.jpg",
    link: "https://www.linkedin.com/in/dheeraj-chahal-phd-72291123",
  },
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
  {
    name: "Small startups (With Process Industries and Software Technology Parks of India",
  },
  { name: "MTech. and Ph.D. with specialization in this field" },
  { name: "Periodical articles in international newsletters and magazines" },
  {
    name: "Professional chapters ACM SIGBED and IEEE Industrial Electronics Society",
  },
  { name: "Workshops related to CPS-Industry 5.0" },
  { name: "Design of Smart Sensors" },
  { name: "Webinars" },
  { name: "FDPs" },
  { name: "MoU with industry and academia" },
  { name: "Patents" },
];

export const coreTech = [
  {
    description: "Raspberry Pi 4 Model-B and Raspberry Pi 5 with 8 GB RAM",
    quantity: 5,
  },
  {
    description:
      "Official USB Type-C 15.3 W Power Supply for Raspberry Pi-4 Black",
    quantity: 5,
  },
  {
    description: "SanDisk Micro SD/SDHC 32GB Class 10 Memory Card",
    quantity: 5,
  },
  {
    description:
      "7” Official Raspberry Pi Display with Capacitive Touch Screen",
    quantity: 5,
  },
  {
    description:
      "Raspberry Pi4 Model Touch Screen 7 Inch Display Case-ABS, Red",
    quantity: 5,
  },
  {
    description: "5MP Raspberry Pi ¾ Model B Camera Module Rev 1.3 with Cable",
    quantity: 5,
  },
  {
    description: "SanDisk Micro SD Card/ Micro Storage Card 32GB",
    quantity: 9,
  },
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
  { modelName: "3pin Photosensitive Sensor Module Light-Dependent Control" },
];

export const publications = [
  {
    authors: "Amit Kumar, Bhupendra Kr Pathak, Kaustubh Mishra, Rajiv Kumar",
    year: "2024",
    title: "Driver Drowsiness Detection System",
    journal: "I. J. Engineering and Manufacturing, 14 (4), 26-36",
  },
  {
    authors: "Pankaj Thakur, Shubham Goel, Emjee Puthooran",
    year: "2024",
    title: "Edge AI Enabled IoT Framework for Secure Smart Home Infrastructure",
    journal: "Procedia Computer Science, 235 (2024), 3369-3378",
  },
  {
    authors: "Naresh Rana, Tanishk Thakur, Shruti Jain",
    year: "2024",
    title:
      "Smart Seizure Detection System: Machine Learning Based Model in Healthcare IoT",
    journal: "Current Aging Science, 17",
  },
  {
    authors:
      "Geetanjali Rathee, Farhan Ahmad, Naveen Jaglan, Charalambos Konstantinou",
    year: "2023",
    title:
      "A Secure and Trusted Mechanism for Industrial IoT Network Using Blockchain",
    journal: "IEEE Transactions on Industrial Informatics, 19 (2), 1894-1902",
  },
  {
    authors: "Shweta Pandit, Alok Kumar, Prabhat Thakur, G. Singh",
    year: "2022",
    title:
      "SEE-MAC: Spectrum and Energy Efficient-Medium Access Control Protocol for Internet of Things",
    journal: "International Journal of Communication Systems, 35 (15), 1-28",
  },
  {
    authors: "Thakur, Payal, and Vivek Kumar Sehgal",
    year: "2021",
    title:
      "Emerging architecture for heterogeneous smart cyber-physical systems for industry 5.0",
    journal: "Computers & Industrial Engineering 162 (2021): 107750",
  },
  {
    authors:
      "Dey, Bhawna, Parthh Dikshit, Samridhi Sehgal, Vasuda Trehan, and Vivek Kumar Sehgal",
    year: "2022",
    title:
      "Intelligent solutions for earthquake data analysis and prediction for future smart cities",
    journal: "Computers & Industrial Engineering 170 (2022): 108368",
  },
  {
    authors: "Thakur, Payal, and Vivek Kumar Sehgal",
    year: "2024",
    title:
      "Synergizing edge computing and blockchain for cyber‐physical systems",
    journal:
      "Concurrency and Computation: Practice and Experience 36, no. 12 (2024): e8066",
  },
  {
    authors: "Thakur, Payal, and Vivek Kumar Sehgal",
    year: "2022",
    title:
      "Temperature Management Using Smart Thermostat in Cyber Physical Systems",
    journal: "2022 IEEE Delhi Section Conference (DELCON), pp. 1-5. IEEE",
  },
  {
    authors: "Thakur, Payal, and Vivek Kumar Sehgal",
    year: "2022",
    title:
      "A framework for IoT based on Blockchain and Edge Computing in Cyber Physical Systems",
    journal:
      "2022 IEEE 19th India Council International Conference (INDICON), pp. 1-6. IEEE",
  },
  {
    authors: "Garima Thakur, Harsh Sohal, Shruti Jain",
    year: "2022",
    title: "Low-power Approximate Arithmetic Circuits for IoT devices",
    journal:
      "Recent Advances in Electrical and Electronic Engineering, 15 (5), 421-428",
  },
  {
    authors:
      "Sudip Paul, Shruti Jain, Bikram Majhi, Karobi Pegu, Vinayak Majhi",
    year: "2022",
    title: "A Non-Invasive IoT-Based Glucose Level Monitoring System",
    journal: "Current Signal Transduction Therapy, 17 (2022), 1-10",
  },
  {
    authors: "Himani Bhardwaj, Shruti Jain, Harsh Sohal",
    year: "2022",
    title:
      "Power Optimization using Current-mode signaling technique for IoT Applications",
    journal: "Measurement: Sensors, 24 (2022), 1-10",
  },
  {
    authors:
      "Geetanjali Rathee, A Sharma, R Iqbal, M Aloqaily, Naveen Jaglan, Rajiv Kumar",
    year: "2019",
    title:
      "A Blockchain Framework for Securing Connected and Autonomous Vehicles",
    journal: "Sensors, 19 (14), 1-12",
  },
];

export const patents = [
  {
    title:
      "Smart Mobile Cover System With AI-Driven Safety Features and Real-Time Protective Mechanisms",
    authors: "Pardeep Garg et al.",
    patent_number: "202411059294",
    date: "23-08-2024",
  },
  {
    title:
      "Autonomous Firefighting Robot System with Dynamic Sensor Fusion and AI-Enhanced Navigation",
    authors: "Vikas Baghel et al.",
    patent_number: "202411045083",
    date: "28-06-2024",
  },
  {
    title:
      "Integrative Water Quality Monitoring System: IoT Sensors, ML Analysis, and LLM Guidance for Real-Time Potability Assessment and Sustainable Water Management",
    authors: "Shruti Jain et al.",
    patent_number: "202411005596",
    date: "09-02-2024",
  },
  {
    title:
      "Real-time automated recognition and classification of Indian Arts and Paintings using AI and Deep Learning",
    authors: "Pardeep Garg et al.",
    patent_number: "202311061868",
    date: "15-12-2023",
  },
  {
    title:
      "Real-Time Monitoring and Identification System for Diabetic Retinopathy with Remote Consultation Capability",
    authors: "Shruti Jain et al.",
    patent_number: "202311041412",
    date: "19-06-2023",
  },
  {
    title: "An IoT-Based Automated DIY Drip Irrigation And Pest Control",
    authors: "Shruti Jain et al.",
    patent_number: "202311008596",
    date: "17-02-2023",
  },
  {
    title: "Shoes",
    authors: "Nishant Jain et al.",
    patent_number: "378538-001",
    date: "03-02-2023",
  },
  {
    title:
      "Internet of Things (IoT) based infrared health monitoring system for newborn babies",
    authors: "Vivek Sehgal et al.",
    patent_number: "202205",
    date: "04-06-2022",
  },
  {
    title: "Artificial Intelligence and Voice Based Patients Monitoring System",
    authors: "Shruti Jain et al.",
    patent_number: "202041048080",
    date: "13-11-2020",
  },
  {
    title:
      "An Artificial Intelligence Based System to Identity the Medical Condition Prior To Doctor Consultation",
    authors: "Aman Sharma et al.",
    patent_number: "2020103509",
    date: "18-11-2020",
  },
];

export const projects = [
  {
    title: "Heartbeat On The Go: The Portable ECG Machine",
    authors: "Himanshi Sood (201006), Mokshika (201014)",
  },
  {
    title: "Security Lock Automation System using Telegram",
    authors: "Manav Modi (201009), Varidhi (2015440)",
  },
  {
    title: "IoT based Automated Quality Assessment for Fruits",
    authors: "Ayush Gupta (211007), Adrita Kar (211069)",
  },
  {
    title: "Aerial Surveillance Security System",
    authors: "Harshit Thakur (191001), Saksham Gupta (191005)",
  },
  {
    title: "Smart Wheelchair Component System",
    authors: "Ripunjay Singh Jandrotia (191017), Kartik Katoch (191020)",
  },
  {
    title: "Traffic Sign Recognition System for Autonomous Vehicle",
    authors: "Saanidhya Yadav (191008), Saransh Rohilla (191023)",
  },
  {
    title: "Accidental Prevention System",
    authors: "Abhishek (191013), Vimal Bhatia (191019)",
  },
  {
    title: "IoT based Smart Agricultural Automation",
    authors: "Devansh Gupta (191038), Sanskriti Choudhary (191040)",
  },
  {
    title: "Disease Detection Using IoT From Urine",
    authors: "Shreyansh Shrivastava (191044), Prajjwal Shukla (191048)",
  },
  {
    title: "IoT Based Bot for Military Applications",
    authors: "Aditya Kumar Jaiswal (181007), Avinash Verma (181019)",
  },
  {
    title: "IoT Social Distancing and Monitoring Robot For Queue",
    authors: "Surbhi Kumari (181010), Kirti Parshionikar (181024)",
  },
];

export const phdResearchData = {
  heading: "PhD in Neuromorphic Computing for Intelligent Systems (CPIS)",
  subHeading: "Payal Thakur - A Trailblazer in Neuromorphic Research",
  description: (
    <p>
      Payal Thakur's PhD research in the field of Neuromorphic Computing focuses on the development of innovative computational models that simulate the human brain's neural network to improve artificial intelligence systems. Her work on Neuromorphic CPIS (Cognitive and Perceptive Intelligent Systems) aims to enhance the efficiency and learning capabilities of AI through biologically inspired systems, with potential applications in robotics, healthcare, and autonomous vehicles.
      <br />
      The research is groundbreaking in its potential to create more adaptive, intelligent, and energy-efficient systems.
    </p>
  ),
  images: [
    {
      src: "/payal-thakur-photo1.jpg", // Replace with the actual image path
      alt: "Payal Thakur's PhD Research",
      caption: "PhD Research in Neuromorphic Computing",
      route: "/research-details" // Replace with the actual route
    },
    {
      src: "/neuromorphic-model.jpg", // Replace with the actual image path
      alt: "Neuromorphic Model",
      caption: "Neuromorphic Models and AI Systems",
      route: "/neuromorphic-model" // Replace with the actual route
    }
  ]
};

