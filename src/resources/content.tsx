import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Caden",
  lastName: "Maxwell",
  name: `Caden Maxwell`,
  role: "Software Developer",
  avatar: "/images/avatar.png",
  email: "cadenmax@pm.me",
  location: "Australia/Brisbane", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/CadenMax",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/caden-maxwell",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Translating ideas into interactive experiences.</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <Text marginRight="4" onBackground="brand-medium">
          MyProjects
        </Text>
      </Row>
    ),
    href: "/work/godot-cybsec-escape-room",
  },
  subline: (
    <>
      I'm Caden, an up and coming software developer based in Brisbane, Australia
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Hi, I’m Caden Maxwell, a Brisbane-based software developer with a passion for front-end design
        and creative problem solving. I love exploring new technologies, experimenting with open-source
        projects, and crafting web experiences that blend functionality with imagination.
      </>
    ),
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "Griffith University",
        timeframe: "2021 – 2025",
        description: (
          <>
            <b><i>Bachelor of Information Technology</i> | <i>Major in Software Development</i></b>
            <br />
            Developed a comprehensive understanding of software development and IT systems, focusing on building modern, scalable applications with contemporary technologies and frameworks. Key areas of experience include:
            <ul>
              <li>Programming fundamentals and Object-Oriented coding using <b>Python</b></li>
              <li>Front-end development using <b>React</b> and <b>Angular</b></li>
              <li>Mobile application development with <b>React Native (Expo)</b></li>
              <li>Relational database design and integration with <b>SQL</b>, <b>Laravel</b>, and <b>PHP</b></li>
              <li>Back-end configuration and deployment using <b>AWS</b>, <b>Docker</b>, and <b>Linux</b></li>
              <li>Game design and development using <b>Unity</b> and <b>Godot</b></li>
            </ul>
            Strengthened collaboration, version control, and analytical problem-solving skills through practical, project-based coursework and cross-disciplinary teamwork.
          </>
        ),
      },
      {
        name: "RMIT University (via Open Universities Australia)",
        timeframe: "2020 – 2021",
        description: (
          <>
            <b><i>Bachelor of Information Technology – Pathway Program</i></b>
            <br />
            Completed foundational programming and computer systems courses in preparation for tertiary-level IT study.
            Built a strong grounding in software logic, web technologies, and the principles of modern computing. Establishing the foundation for advanced study at Griffith University.
          </>
        ),
      },
      {
        name: "VET Certification",
        timeframe: "2017 – 2019",
        description: (
          <>
            <b><i>Certificate III in Information, Digital Media and Technology</i></b>
            <br />
            Gained early exposure to IT operations, hardware configuration, and digital media production.
            This course sparked a lasting interest in technology and laid the groundwork for pursuing a career in software development.
          </>
        ),
      },
    ],
  },

  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "ECKOO",
        timeframe: "April 2023 - Present",
        role: "IT Support Officer",
        achievements: [
          <>
            Manage and maintain IT infrastructure for primary schools across Brisbane. 
          </>,
          <>
            Troubleshooting hardware and software issues, ensuring network security, and providing timely support to staff and students.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        company: "Academy of Interactive Entertainment",
        timeframe: "2016 Work Experience",
        role: "Game Devloper",
        achievements: [
          <>
            Completed a 1 week crash course on game development with professionals in the industry
          </>,
          <>
            Created a playable game using Unity and Maya 3D
          </>,
        ],
        images: [],
      },
    ],
  },
  technical: {
  display: true,
  title: "Technical skills",
  skills: [
    {
      title: "Front-End Development",
      description: (
        <>
          Experienced building responsive, user-focused interfaces using modern
          JavaScript frameworks and strong fundamentals in HTML and CSS. Able to 
          design and implement component-based UIs, manage application state, and 
          create clean, maintainable front-end architectures.
        </>
      ),
      tags: [
        { name: "JavaScript", icon: "javascript" },
        { name: "React", icon: "react" },
        { name: "React Native (Expo)", icon: "react" },
        { name: "Angular", icon: "angular" },
        { name: "HTML", icon: "html5" },
        { name: "CSS", icon: "css3" },
      ],
      images: [],
    },
    {
      title: "Game Development",
      description: (
        <>
          Built multiple 2D/3D interactive projects using Unity and Godot, including
          a full capstone escape room game. Strong understanding of scene
          management, gameplay logic, event systems, asset pipelines, and 
          collaborative game development workflows.
        </>
      ),
      tags: [
        { name: "Unity", icon: "unity" },
        { name: "Godot", icon: "godot" },
        { name: "C#", icon: "csharp" },
        { name: "GDScript", icon: "godot" },
      ],
      images: [],
    },
    {
      title: "Full-Stack & Backend Essentials",
      description: (
        <>
          Capable of building small-scale backend services, integrating APIs, and 
          deploying applications. Comfortable working with REST APIs, Node.js, 
          relational databases, and authentication systems. Strong focus on practical 
          problem-solving rather than unnecessary complexity.
        </>
      ),
      tags: [
        { name: "Node.js", icon: "nodejs" },
        { name: "Express", icon: "nodejs" },
        { name: "SQL", icon: "database" },
        { name: "PHP", icon: "php" },
        { name: "REST APIs", icon: "api" },
      ],
      images: [],
    },
    {
      title: "Cloud, Deployment & DevOps",
      description: (
        <>
          Familiar with deploying applications using Docker, Linux environments, and 
          cloud services. Used AWS and Docker in university projects and for hosting 
          game deployments, including containerising web builds for client delivery.
        </>
      ),
      tags: [
        { name: "Docker", icon: "docker" },
        { name: "Linux", icon: "linux" },
        { name: "AWS", icon: "aws" },
      ],
      images: [],
    },
    {
      title: "UI/UX & Prototyping",
      description: (
        <>
          Able to design wireframes, scene flows, and prototypes using Figma. 
          Comfortable translating designs directly into functional UIs across web, 
          mobile, and game projects.
        </>
      ),
      tags: [
        { name: "Figma", icon: "figma" },
      ],
      images: [],
    },
    {
      title: "Scripting & General Programming",
      description: (
        <>
          Strong foundation in programming fundamentals, object-oriented design,
          and problem-solving across multiple languages. Experienced in Python,
          C#, JavaScript, and GDScript through coursework and personal projects.
        </>
      ),
      tags: [
        { name: "Python", icon: "python" },
        { name: "JavaScript", icon: "javascript" },
        { name: "C#", icon: "csharp" },
        { name: "GDScript", icon: "godot" },
      ],
      images: [],
    },
    {
      title: "Procedural Generation & Creative Tools",
      description: (
        <>
          Developed multiple D&D generators from scratch using vanilla JavaScript, 
          including taverns, loot, travelers, and potion systems. Experienced with 
          building custom logic systems, weighted randomness, and integrating 
          external APIs such as ChatGPT for enhanced features.
        </>
      ),
      tags: [
        { name: "JavaScript", icon: "javascript" },
        { name: "OpenAI API", icon: "api" },
        { name: "Procedural Generation", icon: "sparkles" },
      ],
      images: [],
    }
  ],
}

};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
