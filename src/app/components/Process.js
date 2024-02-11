import React from "react";
import { useEffect } from "react";
const Process = ({ width }) => {
  return (
    <div className="w-full h-full">
      <style jsx>{`
        .container {
          width: calc(10% * ${width >= 10 ? 10 : width});
          border-radius:${width >= 10 ? "9999px" : "9999px 0 0 9999px"} ;
        }
      `}</style>
      <div
        className={`w-0 h-full bg-white text-black container text-center transition-all duration-1000`}
      ></div>
      <p className="text-center">
        {width * 10 >=`100` ? `100` : width * 10}
        {"%"}
      </p>
    </div>
  );
};

export default Process;
