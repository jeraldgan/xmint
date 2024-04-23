import React, { useState, useEffect } from "react";
import Image from "next/image";

import Phoenix1 from "../../../public/images/projects/Phoenix/1.png";
import Phoenix2 from "../../../public/images/projects/Phoenix/2.png";
import Phoenix3 from "../../../public/images/projects/Phoenix/3.png";
import DRiP1 from "../../../public/images/projects/DRiP/1.png";
import DRiP3 from "../../../public/images/projects/DRiP/3.png";

import ButtonDefault from "../../../public/images/close-default.png";
import ButtonPressed from "../../../public/images/close-pressed.png";

const fetchProjectInfo = (projectName) => {
  const projects = [
    {
      name: "Phoenix",
      title: "Phoenix ",
      description: "DeFi",
      images: [Phoenix1, Phoenix2, Phoenix3],
      theme: "light",
    },
    {
      name: "DRiP",
      title: "DRiP",
      description: "Collectibles App",
      images: [DRiP1, DRiP3],
      theme: "dark",
    },
  ];

  // Find project by name
  return projects.find((project) => project.name === projectName);
};

const Modal = ({ name, isOpen, onClose }) => {
  const [showModal, setShowModal] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [buttonState, setButtonState] = useState("default");

  const project = fetchProjectInfo(name);

  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
      document.body.style.overflow = "hidden";
      document.getElementById("crt").style.opacity = "0";
      // Add a slight delay before starting the animation
      setTimeout(() => {
        setAnimate(true);
      }, 10); // Delay can be very short, just enough to ensure that CSS transitions are triggered
    } else {
      setAnimate(false);
      document.getElementById("crt").style.opacity = "0.3";
      const timer = setTimeout(() => {
        setShowModal(false);
        document.body.style.overflow = "auto";
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!showModal) return null;

  return (
    <>
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 bg-primary-100 ${
          animate ? "opacity-100" : " opacity-0"
        }`}
      >
        <div
          className={`z-10 w-full h-dvh transition-transform duration-300 ${
            isOpen ? "overflow-y-scroll" : "overflow-y-hidden"
          } ${animate ? "scale-100 " : "scale-90"}`}
        >
          <div className="flex items-center justify-center px-8 py-10 mx-auto sm:py-14">
            <h3 className="text-5xl font-heading sm:text-6xl md:text-7xl">
              {project.title} -{" "}
              <span className="inline-block">{project.description}</span>
            </h3>
          </div>
          <div className="w-full max-w-screen-lg px-4 mx-auto space-y-4 sm:space-y-5 sm:px-5 pb-28">
            {project.images.map((img, index) => (
              <div key={index} className="flex">
                <div className="w-[0.3125rem] shrink-0 flex flex-col">
                  <div className="w-full h-[0.3125rem] flex justify-end items-end">
                    <div className="h-[0.15625rem] w-[0.15625rem] bg-primary-200"></div>
                  </div>
                  <div className="flex h-full">
                    <div className={`w-1/2 h-full bg-white`}></div>
                    <div
                      className={`w-1/2 h-full ${
                        project.theme === "light"
                          ? "bg-primary-400"
                          : "bg-black"
                      }`}
                    ></div>
                  </div>
                  <div className="w-full h-[0.3125rem] flex justify-end items-start">
                    <div className="h-[0.15625rem] w-[0.15625rem] bg-white"></div>
                  </div>
                </div>
                <div className="flex flex-col w-full">
                  <div className="w-full h-[0.15625rem] bg-primary-200"></div>
                  <div
                    className={`w-full h-[0.15625rem] ${
                      project.theme === "light" ? "bg-primary-400" : " bg-black"
                    }`}
                  ></div>
                  {/* Content */}
                  <div className="flex-1 text-white bg-primary-900">
                    <Image
                      className="w-full h-full"
                      alt={`${project.name}'s screenshot ${index + 1}`}
                      src={img}
                      quality={100}
                      placeholder="blur"
                    />
                  </div>
                  <div
                    className={`w-full h-[0.15625rem] ${
                      project.theme === "light" ? "bg-primary-400" : "bg-black"
                    }`}
                  ></div>
                  <div className="w-full h-[0.15625rem] bg-white"></div>
                </div>
                <div className="w-[0.3125rem] shrink-0 flex flex-col">
                  <div className="w-full h-[0.3125rem] flex justify-start items-end">
                    <div className="h-[0.15625rem] w-[0.15625rem] bg-primary-200"></div>
                  </div>
                  <div className="flex w-full h-full">
                    <div
                      className={`w-1/2 h-full ${
                        project.theme === "light"
                          ? "bg-primary-400"
                          : "bg-black"
                      }`}
                    ></div>
                    <div className="w-1/2 h-full bg-white"></div>
                  </div>
                  <div className="w-full h-[0.3125rem] flex justify-start items-start">
                    <div className="h-[0.15625rem] w-[0.15625rem] bg-white"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="fixed inset-x-0 bottom-0 z-20 flex items-center justify-center pointer-events-none h-28">
          <button
            onMouseDown={() => setButtonState("pressed")}
            onMouseUp={() => setButtonState("default")}
            onTouchStart={() => setButtonState("pressed")}
            onTouchEnd={() => setButtonState("default")}
            className="cursor-pointer pointer-events-auto "
            onClick={onClose}
          >
            {buttonState === "default" ? (
              <Image
                className="w-[5.625rem] h-auto"
                src={ButtonDefault}
                alt="Close button"
                priority
              />
            ) : (
              <Image
                className="w-[5.625rem] h-auto"
                src={ButtonPressed}
                alt="Close button"
              />
            )}
          </button>

          <div className="absolute inset-x-0 bottom-0 w-full h-24 pointer-events-none modal-gradient -z-10"></div>
        </div>

        <div className="fixed inset-0 w-full h-screen pointer-events-none mix-blend-overlay crt-line opacity-30"></div>
      </div>
    </>
  );
};

export default Modal;
