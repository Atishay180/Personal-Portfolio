import { TechnicalExpertise } from "@/types";
import { FaCloud, FaLaptopCode, FaPaintBrush, FaRobot, FaExchangeAlt } from "react-icons/fa";


export const technicalExpertise: TechnicalExpertise[] = [
    {
        icon: FaLaptopCode,
        iconClassName: "text-indigo-500 text-5xl drop-shadow-md",
        label: "Full Stack Development",
        text: "Built scalable web apps using the MERN stack & Next.js",
    },
    {
        icon: FaRobot,
        iconClassName: "text-yellow-300 text-5xl drop-shadow-md",
        label: "Automation Testing",
        text: "Built Playwright (JS) & Selenium (Java) test suites",
    },
    {
        icon: FaExchangeAlt,
        iconClassName: "text-orange-400 text-5xl drop-shadow-md",
        label: "API Testing",
        text: "Tested and validated APIs with Postman",
    },
    {
        icon: FaCloud,
        iconClassName: "text-blue-400 text-5xl drop-shadow-md",
        label: "Cloud Computing",
        text: "Deployed Web Services on Amazon S3, Render & Vercel",
    },
];