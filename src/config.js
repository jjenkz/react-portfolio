import { Icon } from "@iconify/react";

// Navbar Logo image (add image to the src/images directory and uncomment the line below to import image)
// import newLogo from "./images/yourFileName"

import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";

// Projects Images (add images to the images directory and import below)
import Logo from "./images/logo.svg";

export const githubUsername = "jjenkz";

// Navbar Logo image
export const navLogo = null;

export const Blog = null;

// Hero images (imported above - lines 8-9)
export { HeroLight as Light };
export { HeroDark as Dark };

export const moreInfo =
  "I'm an ex-baseball player and Division I athlete who always had a passion for problem solving. After one love of mine ended (baseball career), another one came into my life(software development and programming) and I am dedicated to make this one last longer than my previous love.";

export const skillData = [
  {
    id: 1,
    skill: <Icon icon="mdi:language-html5" className="display-4" />,
    name: "HTML5",
  },
  {
    id: 2,
    skill: <Icon icon="ion:logo-css3" className="display-4" />,
    name: "CSS3",
  },
  {
    id: 3,
    skill: <Icon icon="fa6-brands:js" className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 4,
    skill: <Icon icon="ri:bootstrap-fill" className="display-4" />,
    name: "BootStrap",
  },
  {
    id: 5,
    skill: <Icon icon="mdi:react" className="display-4" />,
    name: "React",
  },
  {
    id: 6,
    skill: <Icon icon="file-icons:styledcomponents" className="display-4" />,
    name: "Styled Components",
  },
  {
    id: 7,
    skill: <Icon icon="akar-icons:redux-fill" className="display-4" />,
    name: "Redux",
  },
  {
    id: 8,
    skill: <Icon icon="bi:git" className="display-4" />,
    name: "Git",
  },
  {
    id: 9,
    skill: <Icon icon="fa6-brands:square-github" className="display-4" />,
    name: "GitHub",
  },
];

export const resume = "https://jake-jenkins.tiiny.site";

export const filteredProjects = [
  "tech-blog",
  "weather-dashboard",
  "text-editor",
  "readme-generator",
  "e-commerce-back-end",
  "social-network-api",
];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 7-8)
export const projectCardImages = [
  {
    name: "example-1",
    image: Logo,
  },
];

export const formspreeUrl = "https://formspree.io/f/xpwardoj";

// Footer icons theme (light or dark)
export const footerTheme = "dark";
