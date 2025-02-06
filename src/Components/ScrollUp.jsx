import React, { useState, useEffect } from "react";
import "./ScrollUp.css"; // Ensure this file is properly linked

function ScrollUp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`gg-chevron-up-r ${isVisible ? "visible" : "hidden"}`}
      onClick={scrollToTop}
    ></div>
  );
}

export default ScrollUp;
