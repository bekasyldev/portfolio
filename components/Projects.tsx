"use client";

import { useRef } from "react";
import { projectsData } from "@/constants/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Project() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0 flex gap-6 flex-col justify-center items-center"
    >
      <h2 className="text-3xl font-medium mb-10">My Projects</h2>
    </motion.div>
  );
}
