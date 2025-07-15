"use client";

import { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircularProgress = () => {
  const [progress, setProgress] = useState(75);

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <div className="w-32 h-32">
        <CircularProgressbar
          value={progress}
          text={`${progress}`}
          styles={buildStyles({
            pathColor: "#000000",
            textColor: "#000000",
            trailColor: "transparant",
          })}
        />
      </div>
    </div>
  );
};

export default CircularProgress;