import project1 from "../assets/projects/project-1.jpg";
import CD from "../assets/projects/CD.png";
import hungry from "../assets/projects/Hungry.png"
import portfolio from "../assets/projects/portfolio.png"

export const HERO_CONTENT = `I am a passionate FrontEnd developer with a talent for crafting responsive and maintainable web applications.With 2+ years of hands-on experience in modern JavaScript frameworks like React, Redux, and a strong background in integrating RESTful APIs, I aim to leverage my skills to create innovative and user-centric solutions that enhance productivity and user engagement.`;

export const ABOUT_TEXT = `I am an innovative problem solver with a creative flair who is passionate about examining the nexus between technology and the human experience. 

Leveraging my experience and adding to interesting projects that fit my values and interests is something I'm excited to do.

In my initial days at Accenture, I have honed my skills in developing and managing strong security solutions for SAP systems. My experience with SAP Security has given me a thorough understanding of role creation, user management, access controls, and compliance requirements.
Driven by a passion for crafting intuitive user experiences ,I transitioned into frontend development,
where I am currently most comfortable making dynamic web apps and bringing concepts to life. Working on dynamic frontend projects that improve user interactions and spur corporate development has allowed me to use my solid foundation in HTML, CSS, and JavaScript.

My journey at RCPL as a trainee furnished me with significant perspectives on the software development lifecycle and acquainted me with the most recent instruments, technologies, and industry best practices.
I have developed an android application, demonstrating expertise in Java, and XML.

My educational background includes a Bachelor's degree in Computer Science from KIIT University. Throughout my academic career, I stressed academic success as well as extracurricular activities. Maintaining a strong academic record, I took advantage of the chance to participate actively in a variety of extracurricular activities.

My technical skills includes front-end development, back end development. I have hands-on experience with tools like Android Studio and Visual Studio Code, and I am fluent in several programming languages, including Java and JavaScript.`;

export const EXPERIENCES = [
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
  address: "Hyderabad, Telangana ",
  phoneNo: "+91 9473446793",
  email: "srijalprasad@gmail.com",
};
