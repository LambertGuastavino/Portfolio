const settings = {
  isSplash: true, 
  useCustomCursor: true, 
  googleTrackingID: "UA-174238252-2",
};

// Home Page
const greeting = {
  title: "Hello world 👋",
  title2: "Lambert Guastavino",
  nickname: "Lambert",
  full_name: "Lambert Guastavino",
  subTitle:
    "Front-End developer",
  resumeLink:
    "https://drive.google.com/file/d/10GBlUpMWFeRP9YhwzNo3cRJ2YEehePvN/view?usp=sharing",
  mail: "mailto:guastavino.lambert@gmail.com",
};

const socialMediaLinks = {
// Social Media Link 
  github: "https://github.com/LambertGuastavino",
  linkedin: "https://www.linkedin.com/in/lambert-guastavino-b8a811192/",
  gmail: "guastavino.lambert@gmail.com",
};

// Skills
const skills = {
  data: [
    {
      title: "Front-End skills",
      fileName: "FullStackImg",
      skills: [
        "⚡ Verifying good UI/UX design and setting up the CI/CD",
        "⚡ Write modern, performant, maintainable code for a diverse array of client and projects",
        "⚡ Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, React, PHP, WordPress and Java",
        "⚡ Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis"
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#7377AD",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
       {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820",
          },
        },
        {
           skillName: "Visual Studio Code",
           fontAwesomeClassname: "simple-icons:visualstudiocode",
           style: {
             color: "#007ACC",
           },
         },
         {
          skillName: "IntelliJ IDEA",
          fontAwesomeClassname: "simple-icons:intellijidea",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Wordpress",
          fontAwesomeClassname: "simple-icons:wordpress",
          style: {
            color: "#207297",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#181717",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Experience hosting and managing websites",
        "⚡ Experience with Continuous Integration",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#5b77ef",
          },
        },
      ],
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Works and Projects",
  description:
    "I've mostly done projects on my own but now, I am actively looking for work. I love pair programming to share my knowledge with others and i like challenge. Actually, I work with Java and JavaScript (React) for increase my skills.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "WordPress Blog",
          company: "Pryos Education",
          company_url: "https://www.pryos-education.com/",
          logo_path: "pryos.jpg",
          duration: "Jan 2020 - Present",
          location: "Work From Home",
          description:
          `Setting up a WordPress blog for a friend. 
          She wanted something simple and quick with a "contact" tab and a "services" tab. 
          Added a legal notice and a cookie policy.
          `,
          color: "#00bf3f",
        },
        {
          title: "WordPress e-commerce",
          company: "Le Langage des Maux",
          company_url: "https://le-langage-des-maux.com/",
          logo_path: "langage-maux.jpg",
          duration: "Feb 2020 - Present",
          location: "Work From Home",
          description:
          `Setting up an e-commerce store with WordPress for a friend. 
          Possibility to order with or without an account, to manage her stock, 
          to create loyalty cards and gift cards. Added legal notice, privacy policy, 
          cookie policy and payment method.
          `,
          color: "#00bf3f",
        },
        {
          title: "WordPress e-commerce",
          company: "Kemati Créations",
          company_url: "https://www.kemati-creations.com/",
          logo_path: "kemati.png",
          duration: "Nov 2020 - Present",
          location: "Work From Home",
          description:
          `Setting up an e-commerce store with WordPress for my wife. 
          Possibility to order with or without an account, to manage her stock, 
          to create loyalty cards and gift cards. Added legal notice, privacy policy, 
          cookie policy and payment method.
          `,
          color: "#00bf3f",
        }
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create React Project and Java. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile-pic.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
};

// Projects
const projects = {
  data: [
    {
      id: "0",
      name: "Beer Loader",
      url: "https://github.com/LambertGuastavino/Beer-Loader",
      description: "A very small loader fully realized in CSS and HTML.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
      ],
    },
    {
      id: "1",
      name: "MineSweeper",
      url: "https://github.com/LambertGuastavino/MineSweeper",
      description:
        "Minesweeper made in JavaScript. Coded in July 2021. 4 levels of difficulty. Project put aside, scores, time etc... are missing.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
    {
      id: "2",
      name: "Java Mail",
      url: "https://github.com/LambertGuastavino/JavaMail",
      description:
        "Complete User Login and Registration Backend + Email Verification. Develop a complete backend application for user login and registration using Spring Boot including email verification links.",
      languages: [
        {
          name: "Java",
          iconifyClass: "logos-java",
        },
      ],
    },
    {
      id: "3",
      name: "Tic-Tac-Toe",
      url: "https://github.com/LambertGuastavino/Tic-Tac-Toe",
      description:
        "We are sometimes led to occupy ourselves as we can when we find nothing to do. That's how I implemented a Morpion coded in JavaScript. For this tic-tac-toe game, I used the jQuery library. ",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "JQuery",
          iconifyClass: "logos-jquery",
        },
      ],
    },
    {
      id: "4",
      name: "COVID-19 Tracker",
      url: "https://github.com/LambertGuastavino/Covid19-Tracker",
      description: "Simple Covid-19 Tracker.",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
      ],
    },
    {
      id: "5",
      name: "Netflix",
      url: "https://github.com/LambertGuastavino/Flouflix",
      description: "A simply Netflix clone.",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
