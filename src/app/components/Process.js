import React from "react";
import { useEffect } from "react";
const Process = ({ width }) => {
  return (
    <div className="w-full h-full">
      <style jsx>{`
        .container {
          width: calc(10% * ${width >= 10 ? 10 : width});
        }
      `}</style>
      <div
        className={`w-0 h-full bg-white text-black rounded-full container text-center transition-all duration-1000`}
      ></div>
      <p className="text-center">
        {width * 10 >=`100` ? `100` : width * 10}
        {"%"}
      </p>
    </div>
  );
};

export default Process;
