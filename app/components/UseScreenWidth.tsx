'use client'
import React, { useState, useEffect } from "react";

const UseScreenWidth = () => {
const initialSize:number = window.innerWidth;
  const [screenWidth, setScreenWidth] = useState(initialSize);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenWidth;
};

export default UseScreenWidth;