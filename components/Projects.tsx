"use client";

import { useRef } from "react";
import { projectsData } from "@/constants/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Project() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <div className="group mb-3 sm:mb-8 last:mb-0 flex gap-6 flex-col justify-center items-center">
      {projectsData.map((project) => (
        <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] text-black">
          <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
              {project.description}
            </p>
            <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
              {project.tags.map((tag, index) => (
                <li
                  className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
            <Link href={project.link}>
              <Button className="bg-slate-700 text-white hover:bg-slate-900 rounded-xl mt-5">
                Show demo
              </Button>
            </Link>
          </div>

          <Image
            src={`/${project.imageUrl}.png`}
            width={450}
            height={450}
            alt={project.imageUrl}
            quality={95}
            className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40"
          />
        </section>
      ))}
    </div>
  );
}
