"use client";

import React, { useState } from "react";

import Image from "next/image";

import Modal from "@/app/_components/modal";

import PhoenixLogo from "../../../public/images/logo/logo-phoenix.png";
import DripLogo from "../../../public/images/logo/logo-drip.png";

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [project, setProject] = useState(null);

  return (
    <>
      <div className="flex flex-col px-1 space-y-4 sm:space-y-0 sm:flex-row sm:space-x-5">
        <button
          onClick={() => {
            setIsOpen(true);
            setProject("Phoenix");
          }}
          className="block w-full cursor-view"
        >
          <div className="flex w-full aspect-video">
            <div className="w-[0.3125rem] flex shrink-0 flex-col">
              <div className="w-full h-[0.3125rem] flex justify-end items-end">
                <div className="h-[0.15625rem] w-[0.15625rem] bg-primary-300"></div>
              </div>
              <div className="flex w-full h-full">
                <div className="w-1/2 h-full bg-white"></div>
                <div className="w-1/2 h-full bg-black"></div>
              </div>
              <div className="w-full h-[0.3125rem] flex justify-end items-start">
                <div className="h-[0.15625rem] w-[0.15625rem] bg-white"></div>
              </div>
            </div>
            <div className="flex flex-col w-full">
              <div className="w-full h-[0.15625rem] bg-primary-300"></div>
              <div className="w-full h-[0.15625rem] bg-black"></div>
              {/* Content */}
              <div className="bg-[#FF773C] flex-1 flex justify-center items-center">
                <Image
                  className="w-[2.09375rem] h-auto"
                  src={PhoenixLogo}
                  alt="Phoenix"
                />
              </div>
              <div className="w-full h-[0.15625rem] bg-black"></div>
              <div className="w-full h-[0.15625rem] bg-white"></div>
            </div>
            <div className="w-[0.3125rem] flex shrink-0 flex-col">
              <div className="w-full h-[0.3125rem] flex justify-start items-end">
                <div className="h-[0.15625rem] w-[0.15625rem] bg-primary-300"></div>
              </div>
              <div className="flex w-full h-full">
                <div className="w-1/2 h-full bg-black"></div>
                <div className="w-1/2 h-full bg-white"></div>
              </div>
              <div className="w-full h-[0.3125rem] flex justify-start items-start">
                <div className="h-[0.15625rem] w-[0.15625rem] bg-white"></div>
              </div>
            </div>
          </div>
        </button>
        <button
          onClick={() => {
            setIsOpen(true);
            setProject("DRiP");
          }}
          className="block w-full cursor-view"
        >
          <div className="flex w-full aspect-video">
            <div className="w-[0.3125rem] shrink-0 flex flex-col">
              <div className="w-full h-[0.3125rem] flex justify-end items-end">
                <div className="h-[0.15625rem] w-[0.15625rem] bg-primary-300"></div>
              </div>
              <div className="flex w-full h-full">
                <div className="w-1/2 h-full bg-white"></div>
                <div className="w-1/2 h-full bg-black"></div>
              </div>
              <div className="w-full h-[0.3125rem] flex justify-end items-start">
                <div className="h-[0.15625rem] w-[0.15625rem] bg-white"></div>
              </div>
            </div>
            <div className="flex flex-col w-full">
              <div className="w-full h-[0.15625rem] bg-primary-300"></div>
              <div className="w-full h-[0.15625rem] bg-black"></div>
              {/* Content */}
              <div className="flex items-center justify-center flex-1 bg-primary-900">
                <Image
                  className="w-[7.5rem] h-auto"
                  src={DripLogo}
                  alt="DRiP"
                />
              </div>
              <div className="w-full h-[0.15625rem] bg-black"></div>
              <div className="w-full h-[0.15625rem] bg-white"></div>
            </div>
            <div className="w-[0.3125rem] shrink-0 flex flex-col ">
              <div className="w-full h-[0.3125rem] flex justify-start items-end">
                <div className="h-[0.15625rem] w-[0.15625rem] bg-primary-300"></div>
              </div>
              <div className="flex w-full h-full">
                <div className="w-1/2 h-full bg-black"></div>
                <div className="w-1/2 h-full bg-white"></div>
              </div>
              <div className="w-full h-[0.3125rem] flex justify-start items-start">
                <div className="h-[0.15625rem] w-[0.15625rem] bg-white"></div>
              </div>
            </div>
          </div>
        </button>
      </div>
      <Modal name={project} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default Projects;
