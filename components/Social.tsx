import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
const socials = [
  {
    icon: <FaGithub />,
    path: "",
  },
  {
    icon: <FaLinkedinIn />,
    path: "",
  },
];
const Social = ({ containerStyles, iconStyles }) => {
  return <div className={containerStyles}>
    {socials.map((item,_) => {
        return (
            <Link key={item.path} href={item.path}
            className={iconStyles}>
                {item.icon}
            </Link>
        )
    })}
  </div>;
};

export default Social;
