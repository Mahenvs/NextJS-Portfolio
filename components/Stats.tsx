"use client";
import CountUp from "react-countup";

const stats = [
  {
    num: 4,
    text: "Years of experience",
  },
  {
    num: 6,
    text: "Projects Completed",
  },
  {
    num: 7,
    text: "Technologies Mastered",
  },
  {
    num: 302,
    text: " Commits in 2024",
  },
];
const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        
        <div
          className="flex flex-wrap gap-6 max-w-[80vw] 
        xl:max-w-none mx-auto"
        >
          {stats.map((item, index) => {
            return (
                <div
                key={item.text}
                className="
            flex-1 
            flex items-center gap-4 justify-center 
            xl:justify-start "
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p className={`${item.text.length < 15 ? 
                    "max-w-[100px]" : "max-w-[160px]"
                    } leading-snug text-white/80
                     `}>{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
