// app/home/page.js
import React from "react";
import Link from "next/link";
import BottomTabBar from "@/app/_components/bottomTabBar";
import { X, Image } from "@phosphor-icons/react/dist/ssr";

const Confirmation = () => {
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
          <div className="flex flex-col items-center justify-center py-8">
            <div className="flex justify-center items-center h-16 w-16 rounded-full bg-[#00FFA2] text-[#020D09]">
              <Image size={32} weight={"regular"} />
            </div>
            <p className="mt-5 text-xs uppercase text-white/70">
              Purchasing NFT with
            </p>
            <p className="mt-2 text-3xl">1,200SOL</p>
          </div>

          <div className="flex-1 w-full">
            <div className="flex items-center justify-between py-3 border-b border-white/10">
              <p className="text-xs">Info title</p>
              <p className="text-xs text-white/70">Info details</p>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-white/10">
              <p className="text-xs">Info title</p>
              <p className="text-xs text-white/70">Info details</p>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-white/10">
              <p className="text-xs">Info title</p>
              <p className="text-xs text-white/70">Info details</p>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-white/10">
              <p className="text-xs">Info title</p>
              <p className="text-xs text-white/70">Info details</p>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-white/10">
              <p className="text-xs">Info title</p>
              <p className="text-xs text-white/70">Info details</p>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-white/10">
              <p className="text-xs">Info title</p>
              <p className="text-xs text-white/70">Info details</p>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-white/10">
              <p className="text-xs">Info title</p>
              <p className="text-xs text-white/70">Info details</p>
            </div>
          </div>

          <Link
            href="/success"
            className=" h-[44px] w-full bg-[#00FFA2] flex justify-center items-center mt-6 rounded-[6px]"
          >
            <p className="text-[#020D09] text-sm">Confirm purchase</p>
          </Link>
        </div>

        <BottomTabBar />
      </div>
    </div>
  );
};

export default Confirmation;
