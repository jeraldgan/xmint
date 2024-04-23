"use client";

import React, { useEffect, useRef, useState } from "react";
import useSound from "use-sound";

const piano = {
  sound: {
    C3: "/audios/piano/C3.mp3",
    Db3: "/audios/piano/Db3.mp3",
    D3: "/audios/piano/D3.mp3",
    Eb3: "/audios/piano/Eb3.mp3",
    E3: "/audios/piano/E3.mp3",
    F3: "/audios/piano/F3.mp3",
    Gb3: "/audios/piano/Gb3.mp3",
    G3: "/audios/piano/G3.mp3",
    Ab3: "/audios/piano/Ab3.mp3",
    A3: "/audios/piano/A3.mp3",
    Bb3: "/audios/piano/Bb3.mp3",
    B3: "/audios/piano/B3.mp3",
    C4: "/audios/piano/C4.mp3",
    Db4: "/audios/piano/Db4.mp3",
    D4: "/audios/piano/D4.mp3",
    Eb4: "/audios/piano/Eb4.mp3",
    E4: "/audios/piano/E4.mp3",
    F4: "/audios/piano/F4.mp3",
    Gb4: "/audios/piano/Gb4.mp3",
    G4: "/audios/piano/G4.mp3",
    Ab4: "/audios/piano/Ab4.mp3",
    A4: "/audios/piano/A4.mp3",
    Bb4: "/audios/piano/Bb4.mp3",
    B4: "/audios/piano/B4.mp3",
    C5: "/audios/piano/C5.mp3",
    Db5: "/audios/piano/Db5.mp3",
    D5: "/audios/piano/D5.mp3",
    Eb5: "/audios/piano/Eb5.mp3",
    E5: "/audios/piano/E5.mp3",
  },
  //     desktop: [
  //      "W",
  //      "B",
  //      "W",
  //      "B",
  //      "W",
  //      "W",
  //      "B",
  //      "W",
  //      "B",
  //      "W",
  //      "B",
  //      "W",
  //      "W",
  //      "B",
  //      "W",
  //      "B",
  //      "W",
  //      "W",
  //      "B",
  //      "W",
  //      "B",
  //      "W",
  //      "B",
  //      "W",
  //      "W",
  //      "B",
  //      "W",
  //      "B",
  //      "W",
  //     ],
  //     mobile: [
  //      "W",
  //      "B",
  //      "W",
  //      "B",
  //      "W",
  //      "B",
  //      "W",
  //      "W",
  //      "B",
  //      "W",
  //      "B",
  //      "W",
  //      "W",
  //      "B",
  //      "W",
  //      "B",
  //      "W",
  //      "B",
  //      "W",
  //      "W",
  //     ],
  //   },
  layout: {
    desktop: [
      "C3",
      "Db3",
      "D3",
      "Eb3",
      "E3",
      "F3",
      "Gb3",
      "G3",
      "Ab3",
      "A3",
      "Bb3",
      "B3",
      "C4",
      "Db4",
      "D4",
      "Eb4",
      "E4",
      "F4",
      "Gb4",
      "G4",
      "Ab4",
      "A4",
      "Bb4",
      "B4",
      "C5",
      "Db5",
      "D5",
      "Eb5",
      "E5",
    ],
    mobile: [
      "F3",
      "Gb3",
      "G3",
      "Ab3",
      "A3",
      "Bb3",
      "B3",
      "C4",
      "Db4",
      "D4",
      "Eb4",
      "E4",
      "F4",
      "Gb4",
      "G4",
      "Ab4",
      "A4",
      "Bb4",
      "B4",
      "C5",
    ],
  },
};

const Key = ({ blackKeyWidth, note, isBlack = false }) => {
  const [play] = useSound(piano.sound[note], {
    volume: 0.5,
    interrupt: true,
  });
  const [isPressed, setIsPressed] = useState(false);

  const handleKeyDown = (e) => {
    e.preventDefault();
    setIsPressed(true);
    play();
  };

  const handleKeyUp = (e) => {
    e.preventDefault();
    setIsPressed(false);
  };

  const renderKey = (isBlack, isPressed) => {
    if (isBlack) {
      if (isPressed) {
        return (
          <div
            onMouseDown={handleKeyDown}
            onMouseUp={handleKeyUp}
            onTouchStart={handleKeyDown}
            onTouchEnd={handleKeyUp}
            className="flex shrink-0 aspect-[9/27] z-10 -mt-[0.625rem] cursor-pointer"
            style={{
              width: `${blackKeyWidth}px`,
              marginLeft: `${blackKeyWidth / -2}px`,
              marginRight: `${blackKeyWidth / -2}px`,
            }}
          >
            {/* Left */}
            <div className="w-[0.3125rem] shrink-0 flex flex-col">
              <div className="w-full h-[0.3125rem] flex shrink-0"></div>
              <div className="w-full h-[0.15625rem] flex shrink-0 justify-end">
                <div className="w-1/2 h-full bg-black"></div>
              </div>

              <div className="w-full h-[0.15625rem] flex shrink-0">
                <div className="w-1/2 h-full bg-black"></div>
                <div className="w-1/2 h-full bg-primary-700"></div>
              </div>
              <div className="flex flex-1 w-full h-full">
                <div className="w-1/2 h-full bg-black"></div>
                <div className="w-1/2 h-full bg-primary-700"></div>
              </div>
              <div className="w-full h-[0.3125rem] flex shrink-0">
                <div className="w-full h-full bg-black"></div>
              </div>
            </div>

            {/* Mid */}
            <div className="flex flex-col flex-1 w-full">
              <div className="w-full h-[0.3125rem] flex shrink-0"></div>
              <div className="w-full h-[0.15625rem] flex shrink-0">
                <div className="w-full h-full bg-black"></div>
              </div>
              <div className="w-full h-[0.15625rem] flex shrink-0">
                <div className="w-full h-full bg-primary-700"></div>
              </div>
              <div className="flex-1 w-full h-full">
                <div className="w-full h-full bg-black">
                  <span className="hidden">{note}</span>
                </div>
              </div>
              <div className="w-full h-[0.15625rem] flex shrink-0">
                <div className="w-full h-full bg-primary-700"></div>
              </div>
              <div className="w-full h-[0.15625rem] flex shrink-0">
                <div className="w-full h-full bg-black"></div>
              </div>
            </div>

            {/* Right */}
            <div className="w-[0.3125rem] shrink-0 flex flex-col">
              <div className="w-full h-[0.3125rem] flex shrink-0"></div>
              <div className="w-full h-[0.15625rem] flex shrink-0 justify-start">
                <div className="w-1/2 h-full bg-black"></div>
              </div>

              <div className="w-full h-[0.15625rem] flex shrink-0">
                <div className="w-1/2 h-full bg-primary-800"></div>
                <div className="w-1/2 h-full bg-black"></div>
              </div>
              <div className="flex flex-1 w-full h-full">
                <div className="w-1/2 h-full bg-primary-700"></div>
                <div className="w-1/2 h-full bg-black"></div>
              </div>
              <div className="w-full h-[0.3125rem] flex shrink-0">
                <div className="w-full h-full bg-black"></div>
              </div>
            </div>
          </div>
        ); // Pressed state for black key
      } else {
        return (
          <div
            onMouseDown={handleKeyDown}
            onMouseUp={handleKeyUp}
            onTouchStart={handleKeyDown}
            onTouchEnd={handleKeyUp}
            className="flex shrink-0 aspect-[9/27] z-10 -mt-[0.625rem] cursor-pointer"
            style={{
              width: `${blackKeyWidth}px`,
              marginLeft: `${blackKeyWidth / -2}px`,
              marginRight: `${blackKeyWidth / -2}px`,
            }}
          >
            {/* Left */}
            <div className="w-[0.3125rem] shrink-0 flex flex-col">
              <div className="w-full h-[0.15625rem] flex shrink-0 justify-end">
                <div className="w-1/2 h-full bg-black"></div>
              </div>

              <div className="w-full h-[0.15625rem] flex shrink-0">
                <div className="w-1/2 h-full bg-black"></div>
                <div className="w-1/2 h-full bg-primary-800"></div>
              </div>
              <div className="flex flex-1 w-full h-full">
                <div className="w-1/2 h-full bg-black"></div>
                <div className="w-1/2 h-full bg-primary-700"></div>
              </div>
              <div className="w-full h-[0.625rem] flex shrink-0">
                <div className="w-full h-full bg-black"></div>
              </div>
            </div>

            {/* Mid */}
            <div className="flex flex-col flex-1 w-full">
              <div className="w-full h-[0.15625rem] flex shrink-0">
                <div className="w-full h-full bg-black"></div>
              </div>
              <div className="w-full h-[0.15625rem] flex shrink-0">
                <div className="w-full h-full bg-primary-700"></div>
              </div>
              <div className="flex-1 w-full h-full">
                <div className="w-full h-full bg-black">
                  <span className="hidden">{note}</span>
                </div>
              </div>
              <div className="w-full h-[0.15625rem] flex shrink-0">
                <div className="w-full h-full bg-primary-700"></div>
              </div>
              <div className="w-full h-[0.46875rem] flex shrink-0">
                <div className="w-full h-full bg-black"></div>
              </div>
            </div>

            {/* Right */}
            <div className="w-[0.3125rem] shrink-0 flex flex-col">
              <div className="w-full h-[0.15625rem] flex shrink-0 justify-start">
                <div className="w-1/2 h-full bg-black"></div>
              </div>

              <div className="w-full h-[0.15625rem] flex shrink-0">
                <div className="w-1/2 h-full bg-primary-800"></div>
                <div className="w-1/2 h-full bg-black"></div>
              </div>
              <div className="flex flex-1 w-full h-full">
                <div className="w-1/2 h-full bg-primary-700"></div>
                <div className="w-1/2 h-full bg-black"></div>
              </div>
              <div className="w-full h-[0.625rem] flex shrink-0">
                <div className="w-full h-full bg-black"></div>
              </div>
            </div>
          </div>
        ); // Default state for black key
      }
    } else {
      if (isPressed) {
        return (
          <div
            onMouseDown={handleKeyDown}
            onMouseUp={handleKeyUp}
            onTouchStart={handleKeyDown}
            onTouchEnd={handleKeyUp}
            className="flex w-full aspect-[13/37] h-auto cursor-pointer"
          >
            {/* Left */}
            <div className="w-[0.3125rem] shrink-0 flex flex-col">
              <div className="w-full h-[0.3125rem] flex shrink-0"></div>
              <div className="w-full h-[0.15625rem] flex shrink-0">
                <div className="w-1/2 h-full bg-[#999999]"></div>
                <div className="w-1/2 h-full bg-black"></div>
              </div>
              <div className="w-full h-[0.15625rem] flex shrink-0">
                <div className="w-full h-full bg-black"></div>
              </div>
              <div className="flex flex-1 w-full h-full">
                <div className="w-1/2 h-full bg-black"></div>
                <div className="w-1/2 h-full bg-white"></div>
              </div>
              <div className="w-full h-[0.15625rem] flex shrink-0">
                <div className="w-1/2 h-full bg-black"></div>
                <div className="w-1/2 h-full bg-[#999999]"></div>
              </div>
              <div className="w-full h-[0.15625rem] flex shrink-0">
                <div className="w-full h-full bg-black"></div>
              </div>
            </div>

            {/* Mid */}
            <div className="flex flex-col flex-1 w-full">
              <div className="w-full h-[0.3125rem] flex shrink-0"></div>
              <div className="w-full h-[0.15625rem] flex shrink-0">
                <div className="w-full h-full bg-black"></div>
              </div>
              <div className="w-full h-[0.15625rem] flex shrink-0">
                <div className="w-full h-full bg-white"></div>
              </div>
              <div className="flex-1 w-full h-full">
                <div className="w-full h-full bg-[#E6E6E6]">
                  <span className="hidden">{note}</span>
                </div>
              </div>
              <div className="w-full h-[0.15625rem] flex shrink-0">
                <div className="w-full h-full bg-white"></div>
              </div>
              <div className="w-full h-[0.15625rem] flex shrink-0">
                <div className="w-full h-full bg-black"></div>
              </div>
            </div>

            {/* Right */}
            <div className="w-[0.3125rem] shrink-0 flex flex-col">
              <div className="w-full h-[0.3125rem] flex shrink-0"></div>
              <div className="w-full h-[0.15625rem] flex shrink-0">
                <div className="w-1/2 h-full bg-black"></div>
                <div className="w-1/2 h-full bg-[#999999]"></div>
              </div>
              <div className="w-full h-[0.15625rem] flex shrink-0">
                <div className="w-full h-full bg-black"></div>
              </div>
              <div className="flex flex-1 w-full h-full">
                <div className="w-1/2 h-full bg-white"></div>
                <div className="w-1/2 h-full bg-black"></div>
              </div>
              <div className="w-full h-[0.15625rem] flex shrink-0">
                <div className="w-1/2 h-full bg-[#999999]"></div>
                <div className="w-1/2 h-full bg-black"></div>
              </div>
              <div className="w-full h-[0.15625rem] flex shrink-0">
                <div className="w-full h-full bg-black"></div>
              </div>
            </div>
          </div>
        ); // Pressed state for white key
      } else {
        return (
          <div
            onMouseDown={handleKeyDown}
            onMouseUp={handleKeyUp}
            onTouchStart={handleKeyDown}
            onTouchEnd={handleKeyUp}
            className="flex w-full aspect-[13/37] h-auto cursor-pointer"
          >
            {/* Left */}
            <div className="w-[0.3125rem] shrink-0 flex flex-col">
              <div className="w-full h-[0.15625rem] flex shrink-0">
                <div className="w-1/2 h-full bg-[#999999]"></div>
                <div className="w-1/2 h-full bg-black"></div>
              </div>
              <div className="w-full h-[0.15625rem] flex shrink-0">
                <div className="w-full h-full bg-black"></div>
              </div>
              <div className="flex flex-1 w-full h-full">
                <div className="w-1/2 h-full bg-black"></div>
                <div className="w-1/2 h-full bg-white"></div>
              </div>
              <div className="w-full h-[0.46875rem] flex shrink-0">
                <div className="w-1/2 h-full bg-black"></div>
                <div className="w-1/2 h-full bg-[#999999]"></div>
              </div>
              <div className="w-full h-[0.15625rem] flex shrink-0">
                <div className="w-full h-full bg-black"></div>
              </div>
            </div>

            {/* Mid */}
            <div className="flex flex-col flex-1 w-full">
              <div className="w-full h-[0.15625rem] flex shrink-0">
                <div className="w-full h-full bg-black"></div>
              </div>
              <div className="w-full h-[0.15625rem] flex shrink-0">
                <div className="w-full h-full bg-white"></div>
              </div>
              <div className="flex-1 w-full h-full">
                <div className="w-full h-full bg-[#E6E6E6]">
                  <span className="hidden">{note}</span>
                </div>
              </div>
              <div className="w-full h-[0.15625rem] flex shrink-0">
                <div className="w-full h-full bg-white"></div>
              </div>
              <div className="w-full h-[0.3125rem] flex shrink-0">
                <div className="w-full h-full bg-[#999999]"></div>
              </div>
              <div className="w-full h-[0.15625rem] flex shrink-0">
                <div className="w-full h-full bg-black"></div>
              </div>
            </div>

            {/* Right */}
            <div className="w-[0.3125rem] shrink-0 flex flex-col">
              <div className="w-full h-[0.15625rem] flex shrink-0">
                <div className="w-1/2 h-full bg-black"></div>
                <div className="w-1/2 h-full bg-[#999999]"></div>
              </div>
              <div className="w-full h-[0.15625rem] flex shrink-0">
                <div className="w-full h-full bg-black"></div>
              </div>
              <div className="flex flex-1 w-full h-full">
                <div className="w-1/2 h-full bg-white"></div>
                <div className="w-1/2 h-full bg-black"></div>
              </div>
              <div className="w-full h-[0.46875rem] flex shrink-0">
                <div className="w-1/2 h-full bg-[#999999]"></div>
                <div className="w-1/2 h-full bg-black"></div>
              </div>
              <div className="w-full h-[0.15625rem] flex shrink-0">
                <div className="w-full h-full bg-black"></div>
              </div>
            </div>
          </div>
        ); // Default state for white key
      }
    }
  };

  return <>{renderKey(isBlack, isPressed)}</>;
};

const Piano = () => {
  const [blackKeyWidth, setBlackKeyWidth] = useState(0);
  const pianoRef = useRef(null);
  const [isDesktop, setisDesktop] = useState(true);
  const layout = isDesktop ? piano.layout.desktop : piano.layout.mobile;

  useEffect(() => {
    const updateKeyWidth = () => {
      const pianoWidth = pianoRef.current.offsetWidth;
      const isDesktopView = window.innerWidth >= 640; // Use 640 assuming Tailwind's sm breakpoint
      const whiteKeyCount = isDesktopView ? 17 : 12;
      setisDesktop(isDesktopView);
      const whiteKeyWidth = pianoWidth / whiteKeyCount;
      setBlackKeyWidth(whiteKeyWidth * 0.6923);
    };

    window.addEventListener("resize", updateKeyWidth);
    updateKeyWidth(); // Call initially to set dimensions

    return () => window.removeEventListener("resize", updateKeyWidth);
  }, []);

  return (
    <>
      <div className="flex">
        {/* Left */}
        <div className="w-[1.5625rem] shrink-0 flex flex-col">
          <div className="w-full h-[0.15625rem] flex shrink-0 justify-end">
            <div className="h-full w-[1.25rem] bg-black"></div>
          </div>
          <div className="w-full h-[0.15625rem] flex shrink-0 justify-end">
            <div className="h-full w-[0.15625rem] bg-black"></div>
            <div className="h-full w-[1.25rem] bg-white"></div>
          </div>
          <div className="w-full h-[0.9375rem] flex shrink-0">
            <div className="h-full w-[0.15625rem] bg-black"></div>
            <div className="h-full w-[0.15625rem] bg-white"></div>
            <div className="h-full w-[1.25rem] bg-[#E6E6E6]"></div>
          </div>
          <div className="w-full h-[0.15625rem] flex shrink-0">
            <div className="h-full w-[0.15625rem] bg-black"></div>
            <div className="h-full w-[0.15625rem] bg-white"></div>
            <div className="h-full w-[0.9375rem] bg-[#E6E6E6]"></div>
            <div className="h-full w-[0.3125rem] bg-white"></div>
          </div>
          <div className="w-full h-[0.625rem] flex shrink-0">
            <div className="h-full w-[0.15625rem] bg-black"></div>
            <div className="h-full w-[0.15625rem] bg-white"></div>
            <div className="h-full w-[0.9375rem] bg-[#E6E6E6]"></div>
            <div className="h-full w-[0.15625rem] bg-white"></div>
            <div className="h-full w-[0.15625rem] bg-[#999999]"></div>
          </div>
          <div className="flex flex-1 w-full h-full">
            <div className="h-full w-[0.15625rem] bg-black"></div>
            <div className="h-full w-[0.15625rem] bg-white"></div>
            <div className="h-full w-[0.9375rem] bg-[#E6E6E6]"></div>
            <div className="h-full w-[0.15625rem] bg-white"></div>
            <div className="h-full w-[0.15625rem] bg-black"></div>
          </div>
          <div className="w-full h-[0.15625rem] flex shrink-0">
            <div className="h-full w-[0.15625rem] bg-black"></div>
            <div className="h-full w-[0.15625rem] bg-[#999999]"></div>
            <div className="h-full w-[0.9375rem] bg-[#E6E6E6]"></div>
            <div className="h-full w-[0.15625rem] bg-[#999999]"></div>
            <div className="h-full w-[0.15625rem] bg-black"></div>
          </div>
          <div className="w-full h-[0.15625rem] flex shrink-0">
            <div className="h-full w-[0.15625rem] bg-black"></div>
            <div className="h-full w-[0.3125rem] bg-[#999999]"></div>
            <div className="h-full w-[0.625rem] bg-[#E6E6E6]"></div>
            <div className="h-full w-[0.3125rem] bg-[#999999]"></div>
            <div className="h-full w-[0.15625rem] bg-black"></div>
          </div>
          <div className="w-full h-[0.46875rem] flex shrink-0">
            <div className="h-full w-[0.15625rem] bg-black"></div>
            <div className="h-full w-[1.25rem] bg-[#999999]"></div>
            <div className="h-full w-[0.15625rem] bg-black"></div>
          </div>
          <div className="w-full h-[0.15625rem] flex shrink-0">
            <div className="h-full w-[0.15625rem] bg-black"></div>
            <div className="h-full w-[1.40625rem] bg-[#999999]"></div>
          </div>
          <div className="w-full h-[0.15625rem] flex shrink-0 justify-end">
            <div className="h-full w-[0.15625rem] bg-black"></div>
            <div className="h-full w-[1.25rem] bg-[#999999]"></div>
          </div>
          <div className="w-full h-[0.15625rem] flex shrink-0 justify-end">
            <div className="h-full w-[1.25rem] bg-black"></div>
          </div>
        </div>

        {/* Mid */}
        <div className="flex flex-col flex-1 w-full">
          <div className="w-full h-[0.15625rem] flex shrink-0">
            <div className="w-full h-full bg-black"></div>
          </div>
          <div className="w-full h-[0.15625rem] flex shrink-0">
            <div className="w-full h-full bg-white"></div>
          </div>
          <div className="w-full h-[0.9375rem] flex shrink-0">
            <div className="w-full h-full bg-[#E6E6E6]"></div>
          </div>
          <div className="w-full h-[0.15625rem] flex shrink-0">
            <div className="w-full h-full bg-white"></div>
          </div>
          <div className="w-full h-[0.625rem] flex shrink-0">
            <div className="w-full h-full bg-[#999999]"></div>
          </div>
          <div className="w-full h-[0.15625rem] flex shrink-0">
            <div className="w-full h-full bg-black"></div>
          </div>
          {/* Content */}
          <div className="w-full h-full relative flex-1 bg-[#B3B3B3]">
            <div className="w-full h-full p-1.5">
              <div
                ref={pianoRef}
                className="flex items-start justify-center flex-1 w-full h-full space-x-[-0.15625rem]"
              >
                {layout.map((note, index) => (
                  <Key
                    key={index}
                    note={note}
                    isBlack={note.includes("b")}
                    blackKeyWidth={blackKeyWidth}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="w-full h-[0.15625rem] flex shrink-0">
            <div className="w-full h-full bg-black"></div>
          </div>
          <div className="w-full h-[0.3125rem] flex shrink-0">
            <div className="w-full h-full bg-[#999999]"></div>
          </div>
          <div className="w-full h-[0.15625rem] flex shrink-0">
            <div className="w-full h-full bg-black"></div>
          </div>
        </div>

        {/* Right */}
        <div className="w-[1.5625rem] shrink-0 flex flex-col">
          <div className="w-full h-[0.15625rem] flex shrink-0 justify-start">
            <div className="h-full w-[1.25rem] bg-black"></div>
          </div>
          <div className="w-full h-[0.15625rem] flex shrink-0 justify-start">
            <div className="h-full w-[1.25rem] bg-white"></div>
            <div className="h-full w-[0.15625rem] bg-black"></div>
          </div>
          <div className="w-full h-[0.9375rem] flex shrink-0">
            <div className="h-full w-[1.25rem] bg-[#E6E6E6]"></div>
            <div className="h-full w-[0.15625rem] bg-white"></div>
            <div className="h-full w-[0.15625rem] bg-black"></div>
          </div>
          <div className="w-full h-[0.15625rem] flex shrink-0">
            <div className="h-full w-[0.3125rem] bg-white"></div>
            <div className="h-full w-[0.9375rem] bg-[#E6E6E6]"></div>
            <div className="h-full w-[0.15625rem] bg-white"></div>
            <div className="h-full w-[0.15625rem] bg-black"></div>
          </div>
          <div className="w-full h-[0.625rem] flex shrink-0">
            <div className="h-full w-[0.15625rem] bg-[#999999]"></div>
            <div className="h-full w-[0.15625rem] bg-white"></div>
            <div className="h-full w-[0.9375rem] bg-[#E6E6E6]"></div>
            <div className="h-full w-[0.15625rem] bg-white"></div>
            <div className="h-full w-[0.15625rem] bg-black"></div>
          </div>
          <div className="flex w-full h-full">
            <div className="h-full w-[0.15625rem] bg-black"></div>
            <div className="h-full w-[0.15625rem] bg-white"></div>
            <div className="h-full w-[0.9375rem] bg-[#E6E6E6]"></div>
            <div className="h-full w-[0.15625rem] bg-white"></div>
            <div className="h-full w-[0.15625rem] bg-black"></div>
          </div>
          <div className="w-full h-[0.15625rem] flex shrink-0">
            <div className="h-full w-[0.15625rem] bg-black"></div>
            <div className="h-full w-[0.15625rem] bg-[#999999]"></div>
            <div className="h-full w-[0.9375rem] bg-[#E6E6E6]"></div>
            <div className="h-full w-[0.15625rem] bg-[#999999]"></div>
            <div className="h-full w-[0.15625rem] bg-black"></div>
          </div>
          <div className="w-full h-[0.15625rem] flex shrink-0">
            <div className="h-full w-[0.15625rem] bg-black"></div>
            <div className="h-full w-[0.3125rem] bg-[#999999]"></div>
            <div className="h-full w-[0.625rem] bg-[#E6E6E6]"></div>
            <div className="h-full w-[0.3125rem] bg-[#999999]"></div>
            <div className="h-full w-[0.15625rem] bg-black"></div>
          </div>
          <div className="w-full h-[0.46875rem] flex shrink-0">
            <div className="h-full w-[0.15625rem] bg-black"></div>
            <div className="h-full w-[1.25rem] bg-[#999999]"></div>
            <div className="h-full w-[0.15625rem] bg-black"></div>
          </div>
          <div className="w-full h-[0.15625rem] flex shrink-0">
            <div className="h-full w-[1.40625rem] bg-[#999999]"></div>
            <div className="h-full w-[0.15625rem] bg-black"></div>
          </div>
          <div className="w-full h-[0.15625rem] flex shrink-0 justify-start">
            <div className="h-full w-[1.25rem] bg-[#999999]"></div>
            <div className="h-full w-[0.15625rem] bg-black"></div>
          </div>
          <div className="w-full h-[0.15625rem] flex shrink-0 justify-start">
            <div className="h-full w-[1.25rem] bg-black"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Piano;
