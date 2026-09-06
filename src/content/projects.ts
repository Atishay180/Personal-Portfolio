import { Projects } from "@/types"
import { assets } from "../../public/assets/assets";

export const projects: Projects[] = [
    {
        name: "Resume GenAI",
        image: assets.resumeGenAI,
        tech: ["MERN Stack", "Groq", "Puppeteer", "Zod"],
        description:
            "An AI-powered interview prep tool — upload a resume and job description, and it generates a match score, likely interview questions with suggested answers, skill gaps, and a day-by-day prep plan, plus a tailored resume PDF.",
        link: "https://github.com/Atishay180/resume-genai",
        github: "https://github.com/Atishay180/resume-genai",
    },
    {
        name: "Healthcare Management System",
        image: assets.heathCare,
        tech: ["MERN Stack", "Tailwind CSS", "Cloudinary", "Razorpay", "JWT"],
        description:
            "A role-based healthcare platform for patients, doctors, and admins — patients book and pay for appointments via Razorpay, doctors manage their availability and schedule, and admins oversee specialities and appointments across the system.",
        link: "https://healthcare-website-y0yg.onrender.com",
        github: "https://github.com/Atishay180/Healthcare-Website",
    },
    {
        name: "Online Food Delivery & E-Commerce Platform",
        image: assets.onlineFood,
        tech: ["MERN Stack", "Cloudinary", "Stripe"],
        description:
            "A food ordering platform with a customer storefront and a separate admin panel — customers browse the menu and check out with Stripe or cash on delivery, while admins manage the catalog and track orders through to delivery.",
        link: "https://food-ecommerce-website-frontend.onrender.com",
        github: "https://github.com/Atishay180/Food-Delivery-Website",
    },
    {
        name: "Real-Time Chat Application",
        image: assets.chatApp,
        tech: ["MERN Stack", "Tailwind CSS", "Socket.io", "Zustand"],
        description:
            "A one-to-one messaging app built on Socket.io, with live message delivery, online presence tracking, and JWT-secured auth — state managed with Zustand for a lightweight, responsive client.",
        link: "https://chat-application-c3n5.onrender.com",
        github: "https://github.com/Atishay180/Chat-App",
    },
    {
        name: "Twitter Clone",
        image: assets.twitterClone,
        tech: ["MERN Stack", "Tailwind CSS", "TanStack Query", "Cloudinary"],
        description:
            "A Twitter-style social platform — post, like, and follow, with Cloudinary-backed image uploads and TanStack Query handling data fetching and cache updates across the feed.",
        link: "https://twitter-clone-7340.onrender.com",
        github: "https://github.com/Atishay180/Twitter-Clone",
    },
    {
        name: "Personal Portfolio",
        image: assets.personalPortfolio,
        tech: ["Next.js", "Tailwind CSS", "Groq", "AOS", "Framer Motion"],
        description:
            "This site — a Next.js portfolio with an AI chatbot (Groq) that answers questions about my background, plus smooth scroll and text animations via AOS and Framer Motion.",
        link: "https://personal-portfolio-git-main-atishayjain8807-6179s-projects.vercel.app/",
        github: "https://github.com/Atishay180/Personal-Portfolio",
    },
];