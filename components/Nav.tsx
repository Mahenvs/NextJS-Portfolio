"use client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const links = [
  {
    name: "home",
    path: "/",
  },
  // {
  //   name: "Resume",
  //   path: "/resume",
  // },
  // {
  //   name: "work",
  //   path: "/work",
  // },
  {
    name: "posts",
    path: "/posts",
  },
  // {
  //   name: "about",
  //   path: "/about",
  // },
];
const Nav = () => {
  const pathName = usePathname();
  return (
    // <AnimatePresence>
    //   <motion.div>
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            key={link.path}
            href={link.path}
            className={`${
              pathName === link.path &&
              "text-skin-base border-b-2 border-skin-base"
            }
          capitalize font-medium hover:text-skin-base transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
    // </motion.div>
    // </AnimatePresence>
  );
};

export default Nav;
