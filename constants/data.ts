import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Personal Blog Website",
    description:
      "Full-stack blog website with using latest teck technology",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma", "Shadcn UI", "NodeJS", "Typescript"],
    imageUrl: "personalBlog",
    link: "https://blog-bekasyl.vercel.app/"
  },
  {
    title: "Game-Hub",
    description: "Focused on showcasing React expertise, Implemented key React concepts and hooks for sorting by genre, platform, and date.",
    tags: ["React", "Typescript", "Chakra-UI"],
    imageUrl: "game-hub",
    link: "https://game-hub-phi-ashen.vercel.app/"
  }
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "SQL",
  "Framer Motion",
] as const;