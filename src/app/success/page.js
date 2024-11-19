// app/home/page.js
import React from "react";
import Link from "next/link";
import BottomTabBar from "@/app/_components/bottomTabBar";
import { X, Smiley } from "@phosphor-icons/react/dist/ssr";

const Success = () => {
  return (
    <div className="flex items-center justify-center overflow-hidden">
      <div className="w-[393px] h-[852px] bg-[#020D09] scale-90">
        <header className="z-50 fixed inset-x-0 top-0 flex items-center bg-[#020d0910] justify-between px-4 h-14 backdrop-blur-lg">
          <Link
            href="/nft"
            className="flex items-center justify-center text-white rounded-full h-9 w-9 bg-white/10"
          >
            <X size={18} weight={"regular"} />
          </Link>
        </header>

        <div className="flex flex-col relative h-full px-4 overflow-y-scroll pt-16 pb-[88px] scrollbar-hide">
          <div className="flex flex-col items-center justify-center flex-1 py-8">
            <div className="flex justify-center items-center h-16 w-16 rounded-full bg-[#00FFA2] text-[#020D09]">
              <Smiley size={32} weight={"regular"} />
            </div>
            <p className="mt-5 text-md ">Purchase successfully!</p>
          </div>

          <Link
            href=""
            className=" h-[44px] w-full bg-white/10 flex justify-center items-center mt-6 rounded-[6px]"
          >
            <p className="text-sm">Visit wallet</p>
          </Link>
        </div>

        <BottomTabBar />
      </div>
    </div>
  );
};

export default Success;
