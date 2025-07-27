import { StaticImageData } from "next/image";
import { IconType } from "react-icons";

export interface Projects {
    name: string,
    image: StaticImageData,
    tech: string[],
    description: string,
    link: string;
    github: string;
}

export interface Education {
    title: string,
    subtitle: string,
    time: string,
    description: string[],
    icon: IconType,
    button: {
        label: string,
        url: string
    }
}

export interface Achievements {
    icon: IconType,
    iconClassName: string,
    title: string,
    description: string,
    image: StaticImageData,
    link: string
}

export interface SkillItem {
    name: string;
    logo: StaticImageData;
}
export interface Skills {
    [category: string]: SkillItem[];
}

export interface TechnicalExpertise {
    icon: IconType,
    iconClassName: string,
    label: string,
    text: string
}

export interface Contact {
    discussionTopics: string[],
    email: string,
    mobile: string,
    address: string,
    socialMedia: {
        title: string;
        url: string;
        logo: IconType;
    }[],
}

