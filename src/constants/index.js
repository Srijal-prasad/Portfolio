import project1 from "../assets/projects/project-1.jpg";
import CD from "../assets/projects/CD.png";
import hungry from "../assets/projects/Hungry.png"
import portfolio from "../assets/projects/portfolio.png"

export const HERO_CONTENT = `I am a passionate FrontEnd developer with a talent for crafting responsive and maintainable web applications.With 3+ years of hands-on experience in modern JavaScript frameworks like React, Next, Redux, and a strong background in integrating RESTful APIs, I aim to leverage my skills to create innovative and user-centric solutions that enhance productivity and user engagement.`;
export const ABOUT_TEXT = `I am a Senior Software Engineer with a passion for crafting seamless, user-focused web applications that drive both business growth and customer satisfaction. With a solid foundation in React.js, Next.js, and state management tools like Redux Toolkit, I specialize in building responsive and scalable solutions that deliver exceptional performance across devices.
Currently at Visionet Systems, I focus on optimizing front-end performance using cutting-edge techniques like lazy loading, dynamic imports, and prefetching. I take pride in creating dynamic, accessible interfaces using React.js, Tailwind CSS, and robust design systems, ensuring compliance with WCAG guidelines for inclusivity. My expertise in automated testing with tools like Cypress and Jest ensures high-quality, stable code that reduces production bugs and accelerates delivery timelines.

Previously at Accenture, I collaborated with cross-functional teams to build reusable React components, design intuitive user experiences, and integrate RESTful APIs for dynamic, data-driven web applications. My contributions led to significant improvements in productivity, user interaction speeds, and application maintainability.

In addition to professional roles, I have spearheaded innovative projects like a Cinematic Database and an E-Commerce Platform, where I implemented advanced features such as search, filtering, and real-time updates, enhancing user engagement and functionality.
My technical skill set spans JavaScript (ES6+), HTML5, CSS3, Node.js, Redux, Airtable APIs, and modern frameworks like Tailwind CSS and Storybook. I’m also experienced with performance optimization, dynamic workflows, and Agile collaboration.
What excites me most is the opportunity to combine my technical expertise with creative problem-solving to deliver impactful solutions that meet both user needs and business objectives. When I’m not coding, I’m exploring new technologies, learning about design systems, or diving into a good tech blog.`;

export const EXPERIENCES = [
  {
    year: "Sept 2024 - Present",
    role: "Senior Software Engineer",
    company: "Visionet Systems",
    description: `Architected and developed dynamic, server-rendered components with Next.js, enhancing application scalability and improving load times by 40%. Designed and implemented reusable UI components using React.js and Tailwind CSS, streamlining development workflows and boosting maintainability. Optimized complex state management with Redux Toolkit, ensuring seamless synchronization across features. Diagnosed and resolved critical performance bottlenecks by leveraging systematic debugging and performance profiling, achieving a 30% improvement in overall application stability.`,
    technologies: ["Javascript", "Next.js", "Redux", "Airtable", "Storybook"],
  },
  {
    year: "May 2021 - Oct 2023",
    role: "Application Development Analyst",
    company: "Accenture Solutions Pvt. Ltd.",
    description: `Architected and integrated a suite of reusable React components,enhancing application flexibility and
    maintainability, leading to a 25% increase in developer productivity and a 30% reduction in bug fixes.
    Managed complex application state using Redux and Context API, ensuring seamless state synchronization. Diagnosed and resolved complex bugs and performance issues by systematically analyzing code and using console
    logs to trace errors.
    `,
    technologies: ["Javascript", "React.js", "Redux", "Tailwind CSS"],
  },
  {
    year: "May 2019 - June 2019",
    role: "Summer Trainee",
    company: "RCPL",
    description: ` Worked on Android "Travel Expense Manager" Application Development.Created with the tech stack listed below:
    IDE : Android Studio 
    Programming Language : Java
    UI : XML Layout files & Android UI Toolkit
    Database : SQLite `,
    technologies: ["Java", "XML", "Android Studio"],
  },
];

export const PROJECTS = [
  {
    title: "Cinematic Database",
    image: CD,
    description:
      "A Interactive platform designed to provide users with a comprehensive and engaging movie discovery experience. Built using ReactJS, this application showcases a modern and visually appealing user interface that simplifies the process of finding and exploring movies.",
    technologies: ["HTML", "TailwindCSS", "React", "Redux", "JavaScript"],
  },
  {
    title: "HungryHub Food Delivery Website",
    image: hungry,
    description:
      "A modern food delivery platform designed to provide users with a seamless and intuitive experience when browsing restaurant menus, placing orders, and tracking deliveries.",
    technologies: ["HTML", "CSS", "React", "JavaScript"],
  },
  {
    title: "Portfolio Website",
    image: portfolio,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind" ,"Framer Motion"],
  },
];

export const CONTACT = {
  address: "Bengaluru ",
  phoneNo: "+91 9473446793",
  email: "srijalprasad@gmail.com",
};
