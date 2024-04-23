"use client";

import React, { useState } from "react";
import Image from "next/image";

import mail from "../../../public//images/logo/logo-mail.png";
import x from "../../../public//images/logo/logo-x.png";
import linkedin from "../../../public//images/logo/logo-linkedin.png";
import dribbble from "../../../public//images/logo/logo-dribbble.png";
import layers from "../../../public//images/logo/logo-layers.png";

const Social = () => {
  const [isCopied, setIsCopied] = useState(false);
  const email = "hello@bygideon.com";

  const handleCopy = () => {
    window.focus();

    navigator.clipboard
      .writeText(email)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <>
      <button
        aria-label="Copy email"
        onClick={() => handleCopy()}
        disabled={isCopied}
        className="relative cursor-pointer group"
      >
        <Image
          className="h-[3rem] sm:h-[3.75rem] w-auto"
          src={mail}
          alt="Mail"
          width={60}
          height={60}
        />
        <span
          className={`absolute bottom-0 right-0 translate-x-1/2 sm:opacity-0 duration-200 transition-opacity sm:group-hover:opacity-100 ${
            isCopied ? "sm:opacity-100" : "sm:opacity-0"
          }`}
        >
          <Image
            className={`h-[1.5rem] sm:h-[1.875rem] duration-300 transition-opacity w-auto ${
              isCopied ? "opacity-0" : "opacity-100"
            }`}
            src="/images/copy.png"
            alt="Copy"
            width={30}
            height={30}
          />
          <Image
            className={`h-[1.5rem] sm:h-[1.875rem] duration-300 transition-opacity w-auto absolute inset-0 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 ${
              isCopied ? "opacity-100" : "opacity-0"
            }`}
            src="/images/check.png"
            alt="Check"
            width={30}
            height={30}
          />
        </span>
      </button>
      <a
        href="https://twitter.com/bygideon"
        target="_blank"
        className="cursor-pointer"
      >
        <Image
          className="h-[3rem] sm:h-[3.75rem] w-auto"
          src={x}
          alt="X"
          width={60}
          height={60}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/bygideon/"
        target="_blank"
        className="cursor-pointer"
      >
        <Image
          className="h-[3rem] sm:h-[3.75rem] w-auto"
          src={linkedin}
          alt="LinkedIn"
          width={60}
          height={60}
        />
      </a>
      <a
        href="https://layers.to/bygideon"
        target="_blank"
        className="cursor-pointer"
      >
        <Image
          className="h-[3rem] sm:h-[3.75rem] w-auto"
          src={layers}
          alt="Layers"
          width={60}
          height={60}
        />
      </a>
      <a
        href="https://dribbble.com/bygideon"
        target="_blank"
        className="cursor-pointer"
      >
        <Image
          className="h-[3rem] sm:h-[3.75rem] w-auto"
          src={dribbble}
          alt="Dribbble"
          width={60}
          height={60}
        />
      </a>
    </>
  );
};

export default Social;
