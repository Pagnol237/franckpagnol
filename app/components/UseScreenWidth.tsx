'use client'
import React, { useState, useEffect } from "react";

const UseScreenWidth = () => {
  if (typeof window !== "undefined") {
    // Code dépendant de 'window'
  }
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenWidth;
};

export default UseScreenWidth;