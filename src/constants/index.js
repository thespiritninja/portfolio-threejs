import {
  mobile,
  web,
  javascript,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  threejs,
  backend1,
  creator,
  csharp,
  unity,
  postgres,
  python,
  r,
  osa,
  sunark,
  accenture,
  shipmantra,
  crisp,
  fantactic,
  pokego,
  carRace,
  minecraft,
  flying,
  iu,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend1,
  },
  {
    title: "Reliability Engineer",
    icon: web,
  },
  {
    title: "Game Programmer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Postgres",
    icon: postgres,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "R",
    icon: r,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "unity",
    icon: unity,
  },
  {
    name: "c-sharp",
    icon: csharp,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Graduate Research Assistant (Unity Developer)",
    company_name: "Indiana University-Bloomington",
    icon: iu,
    iconBg: "#fcfcfc",
    date: "Jun 2023 - Present",
    points: [
      "Working under Prof. Andreas Bueckle on developing the HRA Organ Gallery in VR using Unity.",
      "Notable acheivements: wrote editor scripts in C# to automate pre build checks procedure before exporting to .apk",
      "Worked on development of HRA VR Organ Gallery app targeted for Meta Quest 2 and similar XR devices.",
      "Participated in code reviews and weekly SCRUMs with professor, to ensure sprints are delivered on time.",
    ],
  },
  {
    title: "Product R&D Intern",
    company_name: "Osa Commerce",
    icon: osa,
    iconBg: "#9242d8",
    date: "Jun 2023 - Dec 2023",
    points: [
      "Developed tailored components on ReactJS as POCs aligning to meet client’s requirement. Participated in code-reviews and implemented enhancements to existing component, ensuring to maintain coding standards and style guidelines",
      "Developed secure, high-performing APIs using C# and .NET Framework for e-commerce and logistics solutions. Designed and implemented automated test cases for the component and APIs, ensuring robust functionality.",
      "Ensured end-to-end deployment of builds on AWS amplify by virtue of Github CI/CD and integrated APIs as RESTful service on AWS APIgateway. ",
    ],
  },
  {
    title: "Sr. Full Stack Developer",
    company_name: "Shipmantra",
    icon: shipmantra,
    iconBg: "#fcfcfc",
    date: "Jul 2021 - Aug 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related frontend technologies to ensure cross-browser compatibility.",
      "Designing and Developing RESTful microservices using Node.js and integrated with other shipment API services",
      "Collaborating with cross-functional teams including designers and leading other developers to create high-quality sprint stories.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Sun Ark Services",
    icon: sunark,
    iconBg: "#fcfcfc",
    date: "Aug 2019 - May 2021",
    points: [
      "Developed OLAP/OLTP web app (C# & MS-SQL) for streamlined access to 3.5M+ records, eliminating Excel dependency.",
      "Implemented in-house ETL tool for automated inventory updates, enhancing efficiency.",
      "Created pricing update scheduler as batch jobs, reducing seller portal updates TAT from 24Hrs to 2 Hrs (83% time saved)",
      "Result: 47% increase in company sales, driving significant business growth.",
    ],
  },
  {
    title: "Associate Software Engineer",
    company_name: "Accenture",
    icon: accenture,
    iconBg: "#fcfcfc",
    date: "Sep 2018 - Aug 2019",
    points: [
      "Orchestrated billing application maintenance using C++, implementing new coding logic for UK retail clients, reducing errors and enhancing performance.",
      "Diagnostics led to a 29% decrease in customer escalations. Automated Python scripts streamlined manual error analysis, reducing BAU time by 99%.",
      "Demonstrated expertise as a Site Reliability Engineer, focusing on automation using AI stratergies, driving team performance and efficient solutions.",
    ],
  },
];

const projects = [
  {
    name: "CRISP Webapp",
    description:
      "SaaS portal for Nature Journal's paper authored by Dr. Hasan Kurban. Tool designed to simulate results of ML model designed in R on a 3D graph.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "r-plumber",
        color: "green-text-gradient",
      },
      {
        name: "docker",
        color: "white-text-gradient",
      },
      {
        name: "machine-learning",
        color: "orange-text-gradient",
      },
    ],
    image: crisp,
    source_code_link: "https://github.com/thespiritninja/dsaa-webapp",
  },
  {
    name: "Fantactic Tool",
    description:
      "Web-based SaaS portal for client to perform CRUD operation and visualise different specifics of a Fan like performance, torque and octave on graphs. Developed a patent search algorithm to result best fan per user inputs",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "orange-text-gradient",
      },
      {
        name: "aws",
        color: "white-text-gradient",
      },
    ],
    image: fantactic,
    source_code_link: "https://github.com/thespiritninja/ENCON-FanDB",
  },
  {
    name: "Minecraft Game",
    description:
      "Minecraft clone with basic gameplay using React and Three. Designed the webapp to understand the working of WebGL and Physics for Game Programming and Development",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three",
        color: "white-text-gradient",
      },
      {
        name: "react-three",
        color: "orange-text-gradient",
      },
    ],
    image: minecraft,
    source_code_link: "https://simple-minecraft-react3fibre.vercel.app/",
  },
  {
    name: "Hotwheels Game",
    description:
      "A basic car racing game designed with React and Three. To further understand and dive deep into working of Camera perspective, Velocity, Physics and their interaction with 3D models.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three",
        color: "white-text-gradient",
      },
      {
        name: "react-three",
        color: "orange-text-gradient",
      },
    ],
    image: carRace,
    source_code_link: "https://hotwheels-track.vercel.app/",
  },
  {
    name: "Flight Sim Game",
    description:
      "Flight simulation game with React and Three. Designed this game to work with bigger environments and aerodynamic physics and velocity.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three",
        color: "white-text-gradient",
      },
      {
        name: "react-three",
        color: "orange-text-gradient",
      },
    ],
    image: flying,
    source_code_link: "https://github.com/thespiritninja/react-flying-plane",
  },
  {
    name: "2D PokémonGO Clone",
    description:
      "2D PokeMon Go Clone in XCode using MapKit, SpriteKit and CoreData. With Realtime random instantiation of pokemons on map and interactable fight scene when tapped. Worked on this app to showcase my zeal for mobile gaming as AI for C323 class",
    tags: [
      {
        name: "XCode",
        color: "blue-text-gradient",
      },
      {
        name: "swift",
        color: "orange-text-gradient",
      },
      {
        name: "iOS",
        color: "pink-text-gradient",
      },
    ],
    image: pokego,
    source_code_link: "https://github.com/thespiritninja",
  },
  {
    name: "EduLearning Mobile App",
    description:
      "EduLearning Mobile App designed to give users a OTG learning experience. The app was designed using React Native and Strapi backend service for course details.",
    tags: [
      {
        name: "cross_platform",
        color: "blue-text-gradient",
      },
      {
        name: "expo",
        color: "white-text-gradient",
      },
      {
        name: "react-native",
        color: "orange-text-gradient",
      },
    ],
    image: iu,
    source_code_link: "https://github.com/thespiritninja/EduLearningApp",
  },
];

export { services, technologies, experiences, projects };
