"use client";
import React, { useEffect, useState, useRef } from "react";

export function UserName({ userName }: any) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLParagraphElement | null>(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const textElement = textRef.current;

    if (textElement && container) {
      setShouldAnimate(textElement.scrollWidth > container.clientWidth);
    }
  }, []);
  return (
    <div
      id="scrollContainer"
      ref={containerRef}
      className="mt-2 md:w-[180px] sm:w-[150px] no-scrollbar md:text-xl sm:text-lg  whitespace-nowrap overflow-x-auto overflow-y-hidden"
    >
      <h2
        id="scrollingText"
        ref={textRef}
        className={`${shouldAnimate && "animate-marquee"}`}
      >
        {userName}
      </h2>
    </div>
  );
}
