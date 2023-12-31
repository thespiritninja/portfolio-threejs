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
    flying
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
        title: "Product R&D Intern",
        company_name: "Osa Commerce",
        icon: osa,
        iconBg: "#9242d8",
        date: "Jun 2023 - Present",
        points: [
            "Leverage integration skills for accurate solutions and drive process improvement by crafting orchestrations designed in JavaScript.",
            "Utilize integration expertise and technical skills for accurate and timely solutions, mastering data sources, ETL, API, and integration processes.",
            "Automate processes with AI, driving efficiency and continuous improvement, resulting in streamlined operations and enhanced performance.",
            "Engage in end-to-end integration projects, advancing ML capabilities, and delivering innovative solutions. Achieved a remarkable 60% increase in clients' business process efficiency at OSA.",
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
            "Created pricing update scheduler as batch jobs, reducing seller portal updates TAT from 24Hrs to 2 Hrs with 97% accuracy.",
            "Result: 60% increase in company sales, driving significant business growth."
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
        name: "Minecraft Clone",
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
        source_code_link: "https://github.com/thespiritninja/react-minecraft",
    },
    {
        name: "Car Racing Game",
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
        source_code_link: "https://github.com/thespiritninja/react-three-physics",
    },
    {
        name: "Take a Flight",
        description:
            "Flight simulation game with React and Three. Designed this game to work with bigger enironments and aerodynamic physics and velocity. Its a WIP",
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
];

export { services, technologies, experiences, projects };