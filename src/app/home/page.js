"use client";
import React from "react";
import "./index.css";
import { useEffect, useState } from "react";
const HomePage = () => {
  const [isAnimationComplete, setAnimationComplete] = useState(false);

  // Effect hook để theo dõi sự thay đổi của isAnimationComplete
  useEffect(() => {
    if (isAnimationComplete) {
      const secondaryRibbon = document.querySelector(".secondary-ribbon");
      const primaryRibbon2 = document.querySelector(".primary-ribbon2");
      secondaryRibbon?.classList?.remove("z-40");
      secondaryRibbon?.classList?.add("z-10");
      primaryRibbon2?.style?.setProperty("height", "500px");
      primaryRibbon2?.style?.setProperty("top", "36%");
    }
  }, [isAnimationComplete]);

  // Callback được chuyển vào sự kiện kết thúc animation
  const handleAnimationEnd = () => {
    // Cập nhật state để thông báo rằng animation đã hoàn thành
    setAnimationComplete(true);
  };
  return (
    <div className="w-full md:px-[30%] px-[10%]">
      <div className="relative h-[800px] w-[80%]">
        <div className="primary">
          <div className="primary-ribbon skew-y-[-10deg] z-50 absolute top-[10%] left-0">
            <div className="bg-transparent text-3xl font-bold textEffect1 pt-[50px] text-center">
              Chúc Mừng Năm Mới
            </div>
          </div>
          <div className="primary-ribbon2 absolute top-[33%] left-0 z-40 skew-y-[-10deg] bg-black"></div>
          <div className="primary-ribbon absolute top-[33.8%] left-0 skew-y-[-10deg] z-30">
            <div className="bg-transparent text-3xl font-bold textEffect2 pt-[50px] text-center">
              2024
            </div>
          </div>
        </div>
        <div className="secondary">
          <div
            className="secondary-ribbon skew-y-[20deg] absolute top-[21.9%] left-0 z-40"
            onAnimationEnd={handleAnimationEnd}
          ></div>
          <div className="secondary-ribbon skew-y-[20deg] absolute top-[41.7%] left-0 z-10"></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
