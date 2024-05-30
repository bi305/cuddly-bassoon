"use client";
import React from "react";
import BallCanvas from "@/app/components/canvas/Ball";
import { technologies } from "@/app/const";

const Tech = () => {
  const isMobile = typeof navigator !== 'undefined' && /Mobi|Android/i.test(navigator.userAgent);

  const MobileTechnologies = technologies?.slice(0, 7);
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10 my-20">
      {isMobile ? (
        <>
          {MobileTechnologies?.map((technology) => (
            <div className="w-28 h-28" key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          ))}
        </>
      ) : (
        <>
          {technologies.map((technology) => (
            <div className="w-28 h-28" key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Tech;
