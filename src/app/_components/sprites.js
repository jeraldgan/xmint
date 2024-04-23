"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import spriteSheet from "../../../public/images/sprites/sprite-sheet.png";
import emoji from "../../../public/images/sprites/emoji.png";
import shadow from "../../../public/images/sprites/shadow.png";

const spritesAnimation = {
  right: ["0 0", "0 -40px", "0 -80px", "0 -120px"],
  down: [
    "0 -160px",
    "-40px 0",
    "-40px -40px",
    "-40px -80px",
    "-40px -120px",
    "-40px -160px",
    "-80px 0",
    "-80px -40px",
  ],
  up: [
    "-80px -80px",
    "-80px -120px",
    "-80px -160px",
    "-120px 0",
    "-120px -40px",
    "-120px -80px",
    "-120px -120px",
    "-120px -160px",
  ],
};

const emojiAnimation = {
  typing: [
    "0 -160px",
    "0 -160px",
    "-40px 0",
    "-40px 0",
    "-40px -40px",
    "-40px -40px",
  ],
  smiley: [
    "0 0",
    "0 0",
    "0 0",
    "0 0",
    "0 -40px",
    "0 0",
    "0 -40px",
    "0 0",
    "0 0",
    "0 0",
    "0 0",
  ],
  glasses: [
    "-40px -120px",
    "-40px -160px",
    "-80px 0",
    "-80px -40px",
    "-80px -80px",
    "-80px -120px",
    "-80px -160px",
    "-120px 0",
    "-120px -40px",
    "-120px -80px",
    "-120px -120px",
    "-120px -160px",
    "-40px -120px",
    "-40px -120px",
    "-40px -120px",
    "-40px -120px",
  ],
  heart: [
    "0 -80px",
    "0 -80px",
    "0 -80px",
    "0 -80px",
    "0 -80px",
    "0 -80px",
    "0 -80px",
    "0 -80px",
    "0 -120px",
    "0 -80px",
    "0 -120px",
  ],
  battery: [
    "-160px 0",
    "-160px 0",
    "-160px -40px",
    "-160px -40px",
    "-160px -80px",
    "-160px -80px",
    "-160px -120px",
    "-160px -120px",
    "-160px -160px",
    "-160px -160px",
  ],
};

const Sprites = () => {
  const contentHeight = 1375;
  const [currentIndex, setCurrentIndex] = useState({
    spritesAnimation: 0,
    emojiAnimation: 0,
    typingAnimation: 0,
  });
  const [currentDirection, setCurrentDirection] = useState(
    spritesAnimation.right
  );
  const [currentEmoji, setCurrentEmoji] = useState(emojiAnimation.smiley);
  const [isTyping, setIsTyping] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [idleTimer, setIdleTimer] = useState(null);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [firstScrollUpAfterBottom, setFirstScrollUpAfterBottom] =
    useState(false);

  const flash = (shouldSetBottom = false) => {
    let flashCount = 0;
    const maxFlashes = 4;
    const intervalId = setInterval(() => {
      setIsVisible((visible) => !visible);
      flashCount += 1;
      if (flashCount >= maxFlashes) {
        clearInterval(intervalId);
        setIsVisible(true);
        if (shouldSetBottom !== undefined) {
          setIsAtBottom(shouldSetBottom);
          if (!shouldSetBottom) {
            setFirstScrollUpAfterBottom(false);
          }
        }
      }
    }, 100);
  };

  const handleMouseEnter = () => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
    }, 1200);
  };

  const handleMouseLeave = () => {
    if (!isTyping) {
      setTimeout(() => {
        // Get all keys except 'typing'
        const emojis = Object.keys(emojiAnimation).filter(
          (key) => key !== "typing"
        );

        // Find the key that matches the value in currentEmoji
        let currentIndex = -1;
        for (let i = 0; i < emojis.length; i++) {
          if (emojiAnimation[emojis[i]] === currentEmoji) {
            currentIndex = i;
            break;
          }
        }

        // Calculate the next index
        const nextIndex = (currentIndex + 1) % emojis.length;
        const nextEmoji = emojis[nextIndex];

        setCurrentEmoji(emojiAnimation[nextEmoji]);
        setIsTyping(true);
      }, 300);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      let directionToSet = spritesAnimation.right;

      // Check if scrolled to the bottom of the page
      const scrolledToBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight;

      if (scrolledToBottom && !isAtBottom && currentScrollY < contentHeight) {
        flash(true); // Flash before moving to bottom
        setFirstScrollUpAfterBottom(true); // Set up for detecting the first scroll up after hitting bottom
      } else if (
        !scrolledToBottom &&
        currentScrollY < lastScrollY &&
        isAtBottom &&
        firstScrollUpAfterBottom &&
        currentScrollY < contentHeight
      ) {
        // Detect the first scroll up after hitting bottom
        setIsAtBottom(false); // Immediately change back to sticky
        setFirstScrollUpAfterBottom(false); // Reset the detection flag
        flash(); // Trigger the flashing effect
      } else if (
        currentScrollY > lastScrollY &&
        currentScrollY < contentHeight
      ) {
        directionToSet = spritesAnimation.down;
      } else if (
        currentScrollY < lastScrollY &&
        currentScrollY < contentHeight
      ) {
        directionToSet = spritesAnimation.up;
      }

      if (directionToSet !== currentDirection) {
        setCurrentIndex((prevIndex) => ({
          ...prevIndex,
          spritesAnimation: 0,
        }));
        setCurrentDirection(directionToSet);
      }

      setLastScrollY(currentScrollY);

      if (idleTimer) {
        clearTimeout(idleTimer);
      }
      const newIdleTimer = setTimeout(() => {
        setCurrentDirection(spritesAnimation.right); // Reset to idle after a delay
      }, 120);

      setIdleTimer(newIdleTimer);
    };

    // Listen for scroll events
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Clean up the event listener and idle timer when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (idleTimer) clearTimeout(idleTimer);
    };
  }, [
    lastScrollY,
    currentDirection,
    idleTimer,
    isAtBottom,
    firstScrollUpAfterBottom,
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      // Update currentIndex for both currentDirection and currentEmoji
      setCurrentIndex((prevIndex) => ({
        spritesAnimation:
          (prevIndex.spritesAnimation + 1) % currentDirection.length,
        emojiAnimation: (prevIndex.emojiAnimation + 1) % currentEmoji.length,
        typingAnimation:
          (prevIndex.typingAnimation + 1) % emojiAnimation.typing.length,
      }));
    }, 120);

    // Clear interval on component unmount
    return () => clearInterval(timer);
  }, [currentDirection, currentEmoji]); // Depend on both currentDirection and currentEmoji

  return (
    <div
      className="hidden pb-6 -ml-2 shrink-0 pt-[24.5rem] max-h-[2.815rem] md:block"
      style={{
        opacity: isVisible ? 1 : 0,
        transition: "opacity 100ms ease-in-out",
        position: isAtBottom ? "absolute" : "sticky",
        top: isAtBottom ? `${contentHeight}px` : "0",
      }}
    >
      <div
        className="group"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative w-10 h-10 ml-5 -mt-10 overflow-hidden transition-opacity duration-200 opacity-0 group-hover:opacity-100">
          <div
            className="w-[200px] h-[200px] absolute"
            style={{
              inset: isTyping
                ? `${emojiAnimation.typing[currentIndex.typingAnimation]} 0`
                : `${currentEmoji[currentIndex.emojiAnimation]} 0`,
            }}
          >
            <Image
              className="w-full h-full"
              alt="Emoji"
              src={emoji}
              quality={100}
              priority
            />
          </div>
        </div>
        <div className="relative w-10 h-10 overflow-hidden">
          <div
            className="w-[200px] h-[160px] absolute"
            style={{
              inset: `${currentDirection[currentIndex.spritesAnimation]} 0`,
            }}
          >
            <Image
              className="w-full h-full"
              alt="Sprites"
              src={spriteSheet}
              quality={100}
              priority
            />
          </div>
        </div>
        <Image
          className="relative -z-10 -mt-[0.625rem]"
          src={shadow}
          alt="Shadow"
          width={40}
          height={15}
          quality={100}
        />
      </div>
    </div>
  );
};

export default Sprites;
