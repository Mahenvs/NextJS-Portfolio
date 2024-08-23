"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "Resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "about",
    path: "/about",
  },
];
const Nav = () => {
    const pathName = usePathname()
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link key={link.path} href={link.path}
          className={`${pathName === link.path && "text-skin-base border-b-2 border-skin-base"}
          capitalize font-medium hover:text-skin-base transition-all`}>

            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
