"use client";
import React, { useEffect } from "react";

const TextEffect = ({text}) => {
  return (
    <div>
      <h3 className="animate-charcter">{text}</h3>

      <style jsx>{`
        .animate-charcter {
          font-size: 1.5rem/* 30px */;
          line-height: 2.25rem/* 36px */;
          text-transform: uppercase;
          background-image: linear-gradient(
            -225deg,
            #231557 0%,
            #44107a 29%,
            #ff1361 67%,
            #fff800 100%
          );
          background-size: auto auto;
          background-clip: border-box;
          background-size: 200% auto;
          color: #fff;
          background-clip: text;
          text-fill-color: transparent;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: textclip 2s linear infinite;
          display: inline-block;
          background-color: red;
        }

        @keyframes textclip {
          to {
            background-position: 200% center;
          }
        }
      `}</style>
    </div>
  );
};

export default TextEffect;
