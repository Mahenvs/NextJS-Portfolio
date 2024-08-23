"use client";

import { useEffect, useState } from "react";

const Themeswitcher = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    // Get the theme from localStorage
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    
    console.log("Current theme:", theme);
  }, [theme]);
  return <div className={`theme-red `}>{children}</div>;
};

export default Themeswitcher;
