"use client";

import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import ButtonDefault from "../../public/images/home-default.png";
import ButtonPressed from "../../public/images/home-pressed.png";

const NotFound = () => {
  const [buttonState, setButtonState] = useState("default");

  return (
    <div className="flex items-center justify-center w-full min-h-screen">
      <h1 className="text-6xl sm:text-7xl font-heading">Error 404</h1>
      <div className="fixed inset-x-0 bottom-0 z-20 flex items-center justify-center pointer-events-none h-28">
        <Link
          href="/"
          onMouseDown={() => setButtonState("pressed")}
          onMouseUp={() => setButtonState("default")}
          onTouchStart={() => setButtonState("pressed")}
          onTouchEnd={() => setButtonState("default")}
          className="cursor-pointer pointer-events-auto"
        >
          {buttonState === "default" ? (
            <Image
              className="w-[5rem] h-auto"
              src={ButtonDefault}
              alt="Close button"
              priority
            />
          ) : (
            <Image
              className="w-[5rem] h-auto"
              src={ButtonPressed}
              alt="Close button"
            />
          )}
        </Link>

        <div className="absolute inset-x-0 bottom-0 w-full h-24 pointer-events-none modal-gradient -z-10"></div>
      </div>
      <div
        id="crt"
        className="fixed inset-0 z-10 w-full h-screen pointer-events-none mix-blend-overlay crt-line opacity-30"
      ></div>
    </div>
  );
};

export default NotFound;
