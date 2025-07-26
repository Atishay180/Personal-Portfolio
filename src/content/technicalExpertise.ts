import { TechnicalExpertise } from "@/types";
import { FaCloud, FaLaptopCode, FaPaintBrush, FaRobot } from "react-icons/fa";


export const technicalExpertise: TechnicalExpertise[] = [
        {
            icon: FaLaptopCode,
            iconClassName: "text-indigo-500 text-5xl drop-shadow-md",
            label: "Full Stack Development",
            text: "Built scalable web apps using the MERN stack",
        },
        {
            icon: FaPaintBrush,
            iconClassName: "text-green-400 text-5xl drop-shadow-md",
            label: "Frontend Development",
            text: "Crafted responsive UIs with React & Tailwind",
        },
        {
            icon: FaRobot,
            iconClassName: "text-yellow-300 text-5xl drop-shadow-md",
            label: "Automation Testing",
            text: "Tested apps with Selenium, Java & TestNG",
        },
        {
            icon: FaCloud,
            iconClassName: "text-blue-400 text-5xl drop-shadow-md",
            label: "Cloud Computing",
            text: "Deployed Web Services on Amazon S3",
        },
    ];