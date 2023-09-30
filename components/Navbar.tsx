"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { links } from "@/constants/data";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  const sendEmail = () => {
    const emailAddress = "utepovbekasyl@example.com";

    const mailtoLink = `mailto:${emailAddress}?`;
    window.location.href = mailtoLink;
  };

  return (
    <header className="relative">
      <nav className="fixed bg-opacity-30 flex gap-x-48 items-center justify-center h-20 border-b border-[#040615] h-max-24 w-full  backdrop-blur-10">
        <div className="flex flex-row items-center gap-x-1">
          <Image
            className=" mb-[18px]"
            src={"/cat.png"}
            alt="50"
            quality={100}
            width={40}
            height={40}
          />
          <h3 className="font-bold  text-xl">Bekasyl</h3>
        </div>
        <div>
          <ul className="flex w-[24rem] flex-wrap gap-5 items-center justify-center gap-y-1 text-[1rem] font-medium text-white max-lg:hidden">
            {links.map((link) => (
              <li
                className="h-3/4 flex items-center justify-center"
                key={link.hash}
              >
                <Link
                  className="flex w-full items-center justify-center p-1 font-medium hover:text-gray-300"
                  href={link.hash}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Button
          onClick={sendEmail}
          className="bg-white rounded
           text-[#040615] hover:bg-gray-300 hover:text-black"
          size={"sm"}
          variant={"ghost"}
        >
          Get in touch
        </Button>
      </nav>
    </header>
  );
};

export default Navbar;
