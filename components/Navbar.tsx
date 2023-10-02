import Image from "next/image";
import { links } from "@/constants/data";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <header className="relative">
      <nav className="w-full p-4 flex items-center justify-center flex-row sm:gap-80 lg:gap-40">
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
        <Button className="hidden sm:block text-black rounded-xl bg-white">
          <Link href={"#contact"}>Get in touch</Link>
        </Button>
      </nav>
    </header>
  );
};

export default Navbar;
