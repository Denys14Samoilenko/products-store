"use client";

import { useEffect, useState } from "react";

const ToTopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    window.scrollY > 20 ? setIsVisible(true) : setIsVisible(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={`fixed cursor-pointer hover:animate-bounce bg-[gray] text-[white] border transition-colors duration-300 px-2.5 py-[5px] rounded-[3px] border-solid border-[black] right-3 bottom-4 hover:bg-[#a142a6] ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      type="button"
      onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
    >
      <span className="">&#8593;</span> To top
    </button>
  );
};
export default ToTopBtn;
