"use client";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import { links } from "./Nav";
import Link from "next/link";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div 
        className="mt-32 mb-40 text-center text-2xl">
          <Link href={"/"}>
          <h1 className="text-4xl font-semibold">
    Mahe <span className="text-skin-base">.</span>
          </h1>

          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
        {links.map((link, index) => {
        return (
          <Link key={link.path} href={link.path}
          className={`${pathname === link.path && "text-accent border-b-2 border-accent"}
          capitalize text-xl hover:text-accent transition-all`}>

            {link.name}
          </Link>
        );
      })} </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
