"use client";
import { motion } from "framer-motion";
import Image from "next/image";
// import me from '../public/me'
const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 2,
            duration: 0.4,
            ease: "easeIn",
          },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2.4,
              duration: 0.4,
              ease: "easeInOut",
            },
          }}
          className="w-[278px] rounded-full ml-3 xl:ml-4 xl:mt-2.5  mt-2 h-[278px] xl:w-[478px]
            xl:h-[478px] bg-primary absolute"
        >
          <Image
            src="/assets/self.JPG"
            priority
            quality={100}
            fill
            alt=""
            className="rounded-full object-cover p-[4px] mix-blend-dar"
          />
        </motion.div>
        <motion.svg
          className="w-[300px] xl:w-[506px] h-[300px]
        xl:h-[506px]"
          fill={"transparent"}
          viewBox="0 0 506 506"
          xmlns={"http://www.w3.org/2000/svg"}
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#f40746"
            strokeWidth={"4"}
            strokeLinecap={"round"}
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
