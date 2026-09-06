import { Skills } from "@/types";
import { assets } from "../../public/assets/assets";

export const skills: Skills = {
  "Programming Languages": [
    { name: "JavaScript", logo: assets.logoJs },
    { name: "C++", logo: assets.logoCpp },
    { name: "Core Java", logo: assets.logoJava },
  ],
  "Frontend Technologies": [
    { name: "HTML", logo: assets.logoHtml },
    { name: "CSS", logo: assets.logoCss },
    { name: "React.js", logo: assets.logoReact },
  ],
  "Server Technologies": [
    { name: "Node.js", logo: assets.logoNodeJs },
    { name: "Express.js", logo: assets.logoExpressJs },
  ],
  Database: [{ name: "MongoDB", logo: assets.logoMongoDb }],
  Frameworks: [
    { name: "Tailwind CSS", logo: assets.logoTailwindCss },
    { name: "Next.js", logo: assets.logoNextJs },
  ],
  "Testing & Automation": [
    { name: "Selenium", logo: assets.logoSelenium },
    { name: "Playwright", logo: assets.logoPlaywright },
    { name: "Postman", logo: assets.logoPostman },
  ],
};