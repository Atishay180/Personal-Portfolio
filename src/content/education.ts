import { MdWork } from "react-icons/md";
import { FaGraduationCap, FaSchool } from "react-icons/fa";

import { Education } from "@/types"

export const education: Education[] = [
    {
        title: "Gyan Ganga College of Technology",
        subtitle: "BTech - CSE",
        time: "2021 - 2025",
        description: [
            "Completed a 4-year graduation in Computer Science and Engineering.",
            "CGPA: 8.27",
        ],
        icon: MdWork,
        button: { label: "Details", url: "#" },
    },
    {
        title: "Noble Children Academy",
        subtitle: "Higher Secondary Education",
        time: "2020 - 2021",
        description: [
            "Completed 12th standard with PCM stream.",
            "Percentage: 63.2%",
        ],
        icon: FaGraduationCap,
        button: { label: "Website", url: "#" },
    },
    {
        title: "Stemfield International School",
        subtitle: "Senior Secondary Education",
        time: "2018 - 2019",
        description: [
            "Completed 10th standard under CBSE board with a focus on foundational subjects.",
            "Percentage: 64.8%",
        ],
        icon: FaSchool,
        button: { label: "Website", url: "#" },
    },
];