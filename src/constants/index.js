import {
  // mobile,
  // backend,
  // creator,
  // web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  // redux,
  tailwind,
  // nodejs,
  // mongodb,
  git,
  figma,
  labkom,
  osi,
  // carrent,
  // jobit,
  // tripguide,
  // threejs,
  upl,
  scoolaa,
  telkominfra
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  // {
  //   title: "Web Developer",
  //   icon: web,
  // },
  // {
  //   title: "React Native Developer",
  //   icon: mobile,
  // },
  // {
  //   title: "Backend Developer",
  //   icon: backend,
  // },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "PT Oemah Solution Indonesia",
    icon: osi,
    iconBg: "#E6DEDD",
    date: "Aug 2022 - Present",
    points: [
      "Developing and maintaining web applications using Vue.js and Next.js.",
      "Translate design concepts into clean and efficient code for optimal user experience.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers.",
    ],
  },
  {
    title: "Laboratory Assistant",
    company_name: "Labkom FMIPA UNS",
    icon: labkom,
    iconBg: "#E6DEDD",
    date: "Sep 2020 - Aug 2022",
    points: [
      "Perform routine maintenance tasks to keep the computer laboratory in optimal condition.",
      "Provide technical assistance to students, faculty, and staff in the computer laboratory.",
      "Troubleshoot and resolve hardware and software issues on computers and peripherals.",
      "Install and update software applications on computers as needed.",
    ],
  },
  {
    title: "Front End Developer Intern",
    company_name: "PT Oemah Solution Indoensia",
    icon: osi,
    iconBg: "#E6DEDD",
    date: "Sep 2021 - Jan 2022",
    points: [
      "Lead the frontend development efforts for the 'Mantra' application.",
      "Drive innovation and optimization in frontend development processes.",
      "Collaborate with backend developers to integrate frontend components with server-side logic.",
      "Work closely with the UI/UX design team to implement design concepts into responsive and user-friendly frontend interfaces.",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Telkominfra Dashboard",
    description:
      "Telkominfra Dashboard is a monitoring tool designed to track and analyze the KPIs of BTS operations. Leveraging Next.js and Graphql technologies, this application provides real-time insights into the performance metrics of BTS systems, facilitating informed decision-making for network optimization and maintenance.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "graphql",
        color: "pink-text-gradient",
      },
      {
        name: "chakraui",
        color: "green-text-gradient",
      },
    ],
    image: telkominfra,
    source_code_link: "",
  },
  {
    name: "Scoolaa.id",
    description:
      "Scoolaa.id is a web-based and mobile application that can help manage educational facilities. Services offered include attendance, tuition payment, pocket money, health reports, grade reports, class schedules, donations and many more. This system is built with Go, Vue js, and Flutter.",
    tags: [
      {
        name: "vuejs",
        color: "green-text-gradient",
      },
      {
        name: "graphql",
        color: "pink-text-gradient",
      },
      {
        name: "bootstrap",
        color: "blue-text-gradient",
      },
    ],
    image: scoolaa,
    source_code_link: "",
  },
  {
    name: "UPL Tracko",
    description:
      "UPL Tracko is a sales tracking application tailored for PT UPL Indonesia. Leveraging Vue JS and Graphql technologies, this application enables seamless tracking of sales activities, offering comprehensive insights into PT UPL Indonesia's sales performance.",
    tags: [
      {
        name: "vuejs",
        color: "green-text-gradient",
      },
      {
        name: "graphql",
        color: "pink-text-gradient",
      },
      {
        name: "bootstrap",
        color: "blue-text-gradient",
      },
    ],
    image: upl,
    source_code_link: "",
  },
];

export { services, technologies, experiences, testimonials, projects };