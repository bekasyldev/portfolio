import Image from "next/image";
import { links } from "@/constants/data";
import Link from "next/link";
import { Button } from "./ui/button";
import ActionButton from "./ActionButton";

const Navbar = () => {
  return (
    <header className="relative">
      <nav className="w-full py-4 flex items-center justify-between flex-row px-10 sm:px-20 md:px-40">
        <div className="flex flex-row items-center sm:flex">
          <Image
            className="mb-4 md:mb-3"
            src={"/cat.png"}
            alt="cat-logo"
            width={40}
            height={40}
          />
          <h3 className="text-2xl md:text-xl">Bekasyl</h3>
        </div>
        <ul className="hidden lg:flex items-center justify-center flex-row gap-5">
          {links.map((link) => (
            <li key={link.hash}>
              <Link href={link.hash}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <Button className="hidden lg:block text-black rounded-xl bg-white ">
          <Link href={"#contact"}>Get in touch</Link>
        </Button>
        <ActionButton />
      </nav>
    </header>
  );
};

export default Navbar;
