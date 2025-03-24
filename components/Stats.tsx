"use client";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

const Stats = () => {
  const [stats, setStats] = useState([
    {
      num: 6,
      text: "Years of experience",
    },
    {
      num: 0,
      text: "Contributions in 2024",
    },
    {
      num: 0,
      text: "Contributions in 2025",
    },
  ]);
  const [currentYear, setCurrentYear] = useState(2024);

  const getData = async (year: number) => {
    try {
      const response = await fetch(`/api/contributions?year=${year}`);
      const result = await response.json();
      const contributions = result.contributions;
      setStats((prevStats) => {
        const newStats = [...prevStats];
        if (year === 2024) {
          newStats[1] = { ...newStats[1], num: contributions };
        } else {
          newStats[2] = { ...newStats[2], num: contributions };
        }
        return newStats;
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData(2024);
    getData(2025);
    const interval = setInterval(() => {
      setCurrentYear((prevYear) => (prevYear === 2024 ? 2025 : 2024));
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div
          className="flex flex-wrap gap-6 max-w-[80vw] 
        xl:max-w-none mx-auto"
        >
          {stats.slice(0, 1).map((item) => (
            <div
              key={item.text}
              className="
            flex-1 
            flex lg:flex-col items-center sm:mx-auto gap-4 justify-center 
             "
            >
              <CountUp
                end={item.num}
                duration={5}
                delay={2}
                className="text-4xl xl:text-6xl font-extrabold"
              />
              <p
                className={`${
                  item.text.length < 15 ? "max-w-[100px]" : "max-w-[160px]"
                } leading-snug text-white/80
                     `}
              >
                {item.text}
              </p>
            </div>
          ))}
          <div
            className="
            flex-1 
            flex lg:flex-col items-center sm:mx-auto gap-4 justify-center 
             "
          >
            <CountUp
              end={stats[currentYear === 2024 ? 1 : 2].num}
              duration={5}
              delay={2}
              className="text-4xl xl:text-6xl font-extrabold"
            />
            <p
              className={`${
                stats[currentYear === 2024 ? 1 : 2].text.length < 15
                  ? "max-w-[100px]"
                  : "max-w-[160px]"
              } leading-snug text-white/80
                     `}
            >
              {stats[currentYear === 2024 ? 1 : 2].text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
