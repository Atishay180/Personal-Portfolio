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
      { name: "MVC Architecture", logo: assets.logoSE }, 
    ],
    Database: [{ name: "MongoDB", logo: assets.logoMongoDb }],
    Frameworks: [
      { name: "Bootstrap", logo: assets.logoBootstrap },
      { name: "Tailwind CSS", logo: assets.logoTailwindCss },
      { name: "Next.js", logo: assets.logoNextJs },
    ],
    "CS Fundamentals": [
      { name: "Data Structures", logo: assets.logoDSA },
      { name: "OOP", logo: assets.logoOOP },
      { name: "Software Engineering", logo: assets.logoSE },
    ],
  };