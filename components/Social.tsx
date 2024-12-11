import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
type SocialItem = {
  id: number;
  name: string;
  icon: React.ReactNode;
  url: string;
};

type SocialProps = {
  containerStyles?: string;
  iconStyles?: string;
};
const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/Mahenvs/",
  },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/mahendrau044/",
  },
];

const Social = ({ containerStyles, iconStyles }: SocialProps) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, _) => {
        return (
          <Link key={item.path} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
