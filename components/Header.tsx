import Link from "next/link";
import React from "react";
import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href={"/"}>
          <h1 className="text-4xl font-semibold">
            Mahe
            <span className="text-skin-base">.</span>
          </h1>
        </Link>
        <div className="hidden lg:flex items-center gap-8">
          <Nav />
          <Link href={"/"}>
            <Button>Hire me </Button>
          </Link>
        </div>
        <div className="lg:hidden">
        <MobileNav/>
      </div>
      </div>

    </header>
  );
};

export default Header;
