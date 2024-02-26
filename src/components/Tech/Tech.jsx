import React from "react";

import BallCanvas from "@/components/canvas/Ball";
import { technologies } from "@/const";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10 my-20">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default Tech;
