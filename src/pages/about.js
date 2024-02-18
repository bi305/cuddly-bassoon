import { useEffect, useState } from "react";
import gsap from "gsap";

export default function HomePage() {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func(...args);
      }, wait);
    };
  }

  useEffect(() => {
    const sections = document.querySelectorAll(".section");

    const handleScroll = (e) => {
      e.preventDefault();
      if (e.deltaY > 0) {
        // Scrolling down
        if (currentSectionIndex < sections.length - 1) {
          setCurrentSectionIndex(currentSectionIndex + 1);
        }
      } else {
        // Scrolling up
        if (currentSectionIndex > 0) {
          setCurrentSectionIndex(currentSectionIndex - 1);
        }
      }
    };

    const debouncedHandleScroll = debounce(handleScroll, 90);

    window.addEventListener("wheel", debouncedHandleScroll, { passive: false });

    const handleKeyDown = (e) => {
      if (e.key === "ArrowDown") {
        if (currentSectionIndex < sections.length - 1) {
          setCurrentSectionIndex(currentSectionIndex + 1);
        }
      } else if (e.key === "ArrowUp") {
        if (currentSectionIndex > 0) {
          setCurrentSectionIndex(currentSectionIndex - 1);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", debouncedHandleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentSectionIndex]);

  useEffect(() => {
    gsap.to(`.section:nth-of-type(${currentSectionIndex + 1})`, {
      opacity: 1,
      duration: 0.5,
      onComplete: () => {
        gsap.set(`.section:not(:nth-of-type(${currentSectionIndex + 1}))`, {
          opacity: 0,
        });
      },
    });
  }, [currentSectionIndex]);

  return (
    <div style={{ overflowY: "auto", height: "100vh" }}>
      <div
        className="section flex justify-center "
        style={{
          background: "#ff0",
        }}
      >
        <h1 className=" text-6xl	 ">Scroll down</h1>
      </div>
      <div
        className="section flex justify-center  align-text-bottom max-h-dvh"
        style={{
          background: "#f0f",
        }}
      >
        <h1 className=" text-6xl	 ">Second section</h1>
      </div>
      <div
        className="section flex justify-center "
        style={{
          background: "#0ff",
        }}
      >
        <h1 className=" text-6xl	 ">Third section</h1>
      </div>
    </div>
  );
}
