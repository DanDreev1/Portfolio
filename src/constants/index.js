import { meta, shopify, starbucks, tesla, Electromagnit, EuroPlastic } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Front End Developer",
        company_name: "EuroPlastic",
        icon: EuroPlastic,
        iconBg: "#accbe1",
        date: "October 2022 - April 2023",
        points: [
            "Developed a simple web application at the beginning of my journey to optimize both SEO and performance.",
        ],
    },
    {
        title: "Front End Developer",
        company_name: "Electromagnit",
        icon: Electromagnit,
        iconBg: "linear-gradient(to right, #ff7a00 0%, #ffd600 100%)",
        date: "April 2023 - May 2024",
        points: [
            "Developing and maintaining web applications using Next.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Interacted with other developers to achieve better results",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/DanDreev1',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Electomagnit',
        description: 'Developed a web application with excellent SEO and performance for a company that deals with cargo electromagnets.',
        link: 'https://electromagnit.vercel.app',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'EuroPlastic',
        description: 'Developed a web application with the SEO and translation for a company that creates custom plastic.',
        link: 'https://www.europlastics.com.ua/%D0%A3%D1%81%D0%BB%D1%83%D0%B3%D0%B8%20EN.html',
    },
];