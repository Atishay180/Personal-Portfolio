import { FaInstagram, FaFacebookF, FaLinkedin, FaGithub } from "react-icons/fa";
import { Contact } from "@/types";

export const contact: Contact = {
    discussionTopics: ["Web Development", "Hiring Opportunity", "Automation Testing", "Other"],

    email: "atishayjain8807@gmail.com",
    mobile: "9893312749",
    address: "Jabalpur Madhya Pradesh, India",

    socialMedia: [
        {
            title: "linkedin",
            url: "https://www.linkedin.com/in/atishay180",
            logo: FaLinkedin
        },
        {
            title: "facebook",
            url: "https://www.facebook.com/share/14GQrjiaS4G/",
            logo: FaFacebookF
        },
        {
            title: "Instagram",
            url: "https://www.instagram.com/atishay180",
            logo: FaInstagram
        },
        {
            title: "Github",
            url: "https://github.com/Atishay180",
            logo: FaGithub
        }
    ]
}