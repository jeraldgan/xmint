// app/home/page.js
import React from "react";
import Image from "next/image";
import Link from "next/link";
import BottomTabBar from "@/app/_components/bottomTabBar";
import { CaretLeft, UploadSimple } from "@phosphor-icons/react/dist/ssr";
import cover from "../../../public/images/cover.png";
import { PRICE } from "@/constants/price";
const HomePage = () => {
  const items = Array.from({ length: 12 }, (_, index) => index + 1);
  return (
    <div className="flex items-center justify-center overflow-hidden">
      <div className="w-[393px] h-[852px] bg-[#020D09] scale-90">
        <header className="fixed inset-x-0 top-0 flex items-center bg-[#020d0910] justify-between px-4 h-14 backdrop-blur-lg">
          <button className="flex items-center justify-center text-white rounded-full h-9 w-9 bg-white/10">
            <CaretLeft size={18} weight={"regular"} />
          </button>
          <button className="flex items-center justify-center text-white rounded-full h-9 w-9 bg-white/10">
            <UploadSimple size={18} weight={"regular"} />
          </button>
        </header>

        <div className="h-full px-4 overflow-y-scroll pt-16 pb-[88px] scrollbar-hide">
          <div className="h-[72px] w-[72px] rounded-[4px]">
            <Image
              className="w-full h-full pointer-events-none"
              alt=""
              src={cover}
              quality={100}
              priority
            />
          </div>

          <h1 className="mt-2 text-lg">Mad Lads</h1>

          <div className="flex gap-4 mt-3 overflow-x-auto whitespace-nowrap scrollbar-hide">
            <div className="flex items-center gap-x-1.5 text-white/80">
              <UploadSimple size={18} weight={"regular"} />
              <p className="text-sm">{PRICE} Floor Price</p>
            </div>
            <div className="flex items-center gap-x-1.5 text-white/80">
              <UploadSimple size={18} weight={"regular"} />
              <p className="text-sm">{PRICE} Floor Price</p>
            </div>
            <div className="flex items-center gap-x-1.5 text-white/80">
              <UploadSimple size={18} weight={"regular"} />
              <p className="text-sm">{PRICE} Floor Price</p>
            </div>
            <div className="flex items-center gap-x-1.5 text-white/80">
              <UploadSimple size={18} weight={"regular"} />
              <p className="text-sm">{PRICE} Floor Price</p>
            </div>
          </div>

          <div className="grid grid-cols-3 mt-4 gap-x-2 gap-y-3">
            {items.map((item) => (
              <Link href="/nft" key={item}>
                <div className="rounded-sm aspect-square bg-white/10"></div>
                <p className="text-xs mt-1.5">#{item}</p>
                <p className="text-xs text-white/70">{PRICE}</p>
              </Link>
            ))}
          </div>
        </div>

        <BottomTabBar />
      </div>
    </div>
  );
};

export default HomePage;
