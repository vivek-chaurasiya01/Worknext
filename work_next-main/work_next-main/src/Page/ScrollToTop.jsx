import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 bg-green-600 text-white p-3 rounded-full shadow-xl 
        transition-all duration-300 hover:bg-green-700 z-[9999]
        ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <FaArrowUp size={20} />
    </button>
  );
}
