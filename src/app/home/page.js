"use client"
import React from "react";

const HomePage = () => {
  const config = "flex justify-center items-center"
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <style jsx>{`
        .trapezium{
          text-align: center;
          z-index: 1;
          position: relative;
          width: 350px;
          height: 120px;
          background-color: #FF9A8B;
          transform: skew(0deg, -10deg);
          background-image: linear-gradient(90deg, #FF9A8B 0%, #FF6A88 55%, #FF99AC 100%);
        }
        .trapezium:before {
          content: "";
          z-index: -1;
          position: absolute;
          top: 71%;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #FEE140;
          background-image: linear-gradient(90deg, #FEE140 0%, #FA709A 100%);
          transform: skew(0deg, 26deg);
        }
        .trapezium:after {
          content: "";
          z-index: -1;
          position: absolute;
          top: 71%;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #FF9A8B;
          background-image: linear-gradient(90deg, #FF9A8B 0%, #FF6A88 55%, #FF99AC 100%);
          transform: skew(0deg, 26deg);
          clip-path: polygon(0 0, 0% 100%, 70% 0);
        }
      `}</style>
      <div className="relative">
        <div className={`trapezium ${config}`}>
          <div className="bg-transparent text-3xl font-bold">Chúc Mừng Năm Mới</div>
        </div>
        <div className={`trapezium absolute top-[21.5%] left-0 ${config}`}>
          <div className="bg-transparent text-3xl font-bold">2024</div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
