"use client";

import { useEffect, useState } from "react";

const Themeswitcher = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "red"; // Default to 'red' theme
    setTheme(storedTheme);
  }, []);
  useEffect(() => {
    const timeout = setTimeout(() => {
      const random = Math.floor(Math.random() * 3);
      let themeGenerated = localStorage.setItem("theme", "red") ;

      if(random == 0){
        themeGenerated=  localStorage.setItem("theme", "red");

      }
      else if(random == 1){
        themeGenerated =localStorage.setItem("theme", "blue");

      }
      else{
        themeGenerated  =localStorage.setItem("theme", "green");
      }
      console.log("Theme set to red:", localStorage.getItem("theme"));
      setTheme(localStorage.getItem("theme"));
    }, 10000);

    // Clear timeout if the component unmounts
    return () => clearTimeout(timeout);
  }, [theme]);

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.remove(
        "theme-red",
        "theme-green",
        "theme-blue"
      ); // Remove existing theme
      document.documentElement.classList.add(`theme-${theme}`); // Add new theme class
    }
  }, [theme]);

  return <>{children}</>;
};

export default Themeswitcher;
