import { Projects } from "@/types"
import { assets } from "../../public/assets/assets";

export const projects: Projects[] = [
    {
        name: "Healthcare Website",
        image: assets.heathCare,
        tech: ["MERN Stack", "Tailwind CSS", "Cloudinary", "AOS", "Stripe"],
        description:
            "Role-based portal for doctors, users, and admins with real-time availability, appointment booking, secure login, and online payments.",
        link: "https://healthcare-website-y0yg.onrender.com",
        github: "https://github.com/Atishay180/Healthcare-Website",
    },
    {
        name: "Online Food Ordering Website",
        image: assets.onlineFood,
        tech: ["MERN Stack", "Cloudinary", "Stripe"],
        description:
            "Admin dashboard for managing orders, inventory, and users with dynamic menu browsing and real-time updates.",
        link: "https://food-ecommerce-website-frontend.onrender.com",
        github: "https://github.com/Atishay180/Food-Delivery-Website",
    },
    {
        name: "Real-Time Chat Application",
        image: assets.chatApp,
        tech: ["MERN", "Tailwind CSS", "Socket.io"],
        description:
            "Group/private chat app with typing indicators, real-time presence tracking, media sharing, and smooth UX.",
        link: "https://chat-application-c3n5.onrender.com",
        github: "https://github.com/Atishay180/Chat-App",
    },
    {
        name: "Twitter Clone",
        image: assets.twitterClone,
        tech: ["MERN Stack", "Tailwind CSS", "TanStack Query", "Cloudinary"],
        description:
            "Twitter-like platform with tweeting, following, liking, media uploads, and real-time feed updates.",
        link: "https://twitter-clone-7340.onrender.com",
        github: "https://github.com/Atishay180/Twitter-Clone",
    },
];