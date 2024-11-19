"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { Compass, Slideshow, UserCircle } from "@phosphor-icons/react/dist/ssr";

const BottomTabBar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleTabClick = (tab) => {
    switch (tab) {
      case "home":
        router.push("/home");
        break;
      case "collectibles":
        router.push("/collectibles");
        break;
      default:
        break;
    }
  };

  return (
    <div className="fixed bottom-0 inset-x-0 bg-[#020D09] border-t border-white/15">
      <div className="flex justify-around h-[72px] items-center">
        {/* Home Tab */}
        <button
          onClick={() => handleTabClick("home")}
          className={`flex flex-col items-center ${
            pathname === "/home" ? "text-white" : "text-white/50"
          }`}
        >
          <Compass
            size={28}
            weight={pathname === "/home" ? "fill" : "regular"}
          />
        </button>

        {/* Collectibles Tab */}
        <button
          onClick={() => handleTabClick("collectibles")}
          className={`flex flex-col items-center ${
            pathname === "/collectibles" ? "text-white" : "text-white/50"
          }`}
        >
          <Slideshow
            size={28}
            weight={pathname === "/collectibles" ? "fill" : "regular"}
          />
        </button>

        {/* User Tab */}
        <button
          className={`flex flex-col items-center ${
            pathname === "/user" ? "text-white" : "text-white/50"
          }`}
        >
          <UserCircle
            size={28}
            weight={pathname === "/user" ? "fill" : "regular"}
          />
        </button>
      </div>
    </div>
  );
};

export default BottomTabBar;
