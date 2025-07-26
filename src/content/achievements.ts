import { Achievements } from "@/types";
import { assets } from "../../public/assets/assets";
import { FaCertificate, FaTrophy } from "react-icons/fa";

export const achievements: Achievements[] = [
    {
        icon: FaTrophy,
        iconClassName: "text-yellow-400 text-4xl",
        title: "ISTQB Certified Tester",
        description: "Certified for foundational knowledge in software testing principles and techniques.",
        image: assets.istqb,
        link: "https://drive.google.com/file/d/1qdCwneCwG48pycuMyi6ZZndFGHxLrTyD/view?usp=drive_link",
    },
    {
        icon: FaCertificate,
        iconClassName: "text-blue-400 text-4xl",
        title: "AWS Certified Cloud Practitioner",
        description: "Earned foundational certification from AWS demonstrating cloud fluency and understanding of core services.",
        image: assets.awsPractitioner,
        link: "https://drive.google.com/file/d/1coqEQ6zUk7FJf4S0WfO2poaGLfkmU936/view?usp=drive_link",
    },
    {
        icon: FaCertificate,
        iconClassName: "text-green-400 text-4xl",
        title: "AWS Cloud Foundations",
        description: "Completed introductory training on AWS core services, global infrastructure, and pricing models.",
        image: assets.awsFoundation,
        link: "https://drive.google.com/file/d/1JOIkD1nmTfb2O-_QJnRHi65K5b8qQHFP/view?usp=drive_link",
    },
    {
        icon: FaCertificate,
        iconClassName: "text-pink-400 text-4xl",
        title: "Certificate of Appreciation",
        description: "Recognized for conducting training workshops on AWS Cloud and Modern Web Development during academic tenure.",
        image: assets.appreciation,
        link: "https://drive.google.com/file/d/1jpBAX4wvCJK84beYiEFFCR5a4grnYkYm/view?usp=drive_link",
    },
];