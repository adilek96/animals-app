"use client";
import Lottie from "react-lottie-player";
import animationsLoad from "@/public/animations/loadAnimate.json";

export default function Loading() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h3>Идет поиск...</h3>

        <Lottie
          loop
          animationData={animationsLoad}
          play
          style={{ width: 150, height: 150 }}
        />
      </div>
    </>
  );
}
