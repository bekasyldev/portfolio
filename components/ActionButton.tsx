import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Menu } from "lucide-react";
import { links } from "@/constants/data";
import Link from "next/link";
import { Button } from "./ui/button";

const ActionButton = () => {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden flex text-white">
        <Menu />
      </SheetTrigger>
      <SheetContent className="w-[400px] sm:w-[540px] py-20">
        <div className="flex items-center justify-center flex-col gap-y-10">
          <ul className="flex items-center justify-center flex-col gap-5">
            {links.map((link) => (
              <li key={link.hash}>
                <Link href={link.hash}>{link.name}</Link>
              </li>
            ))}
          </ul>
          <Button className="text-black rounded-xl bg-white ">
            <Link href={"#contact"}>Get in touch</Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ActionButton;
