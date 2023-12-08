"use client";
import React from "react";
import Lottie from "react-lottie-player";
import phoneAnimations from "../../../public/animations/phoneAnimate.json";
import wpAnimations from "../../../public/animations/wpAnimate.json";
import messageAnimations from "../../../public/animations/messageAnimate.json";
import Link from "next/link";

export function UserConnection({ phone_number, whatsapp }: any) {
  return (
    <div className="flex justify-center items-center text-lg ">
      {whatsapp && (
        <Link href={`https://wa.me/${phone_number}`}>
          <span>
            <Lottie
              loop
              animationData={wpAnimations}
              play
              style={{ width: 40, height: 40 }}
            />
          </span>
        </Link>
      )}
      <Link href={`tel:${phone_number}`}>
        <span>
          <Lottie
            loop
            animationData={phoneAnimations}
            play
            style={{ width: 40, height: 40 }}
          />
        </span>
      </Link>
      <Link href={`tel:${phone_number}`}>
        <span>{phone_number}</span>
      </Link>
      <span>
        <Lottie
          loop
          animationData={messageAnimations}
          play
          style={{ width: 40, height: 40 }}
        />
      </span>
    </div>
  );
}
