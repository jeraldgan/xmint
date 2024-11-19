"use client";

// app/home/page.js
import React from "react";
import Link from "next/link";
import BottomTabBar from "../_components/bottomTabBar";
import {
  CaretLeft,
  CornersOut,
  UploadSimple,
} from "@phosphor-icons/react/dist/ssr";
import { PRICE } from "../../constants/price";
import { ConnectKitButton } from "connectkit";
import { useAccount } from "wagmi";
import { parseEther } from "viem";
import { useSendTransaction } from "wagmi";
import { triggerTransferNFT } from "../../utils/triggerTransferNFT";
const NFT = () => {
  const { address } = useAccount();
  const { sendTransactionAsync } = useSendTransaction();
  const handleTransferNFT = async () => {
    await sendTransactionAsync({
      to: process.env.NEXT_PUBLIC_WALLET_ADDRESS,
      value: parseEther("0.02"),
    });
    await triggerTransferNFT(address);
  };
  return (
    <div className="flex items-center justify-center overflow-hidden">
      <div className="w-[393px] h-[852px] bg-[#020D09] scale-90">
        <header className="z=50 fixed inset-x-0 top-0 flex items-center bg-[#020d0910] justify-between px-4 h-14 backdrop-blur-lg">
          <Link
            href="/home"
            className="flex items-center justify-center text-white rounded-full h-9 w-9 bg-white/10"
          >
            <CaretLeft size={18} weight={"regular"} />
          </Link>
          <button className="flex items-center justify-center text-white rounded-full h-9 w-9 bg-white/10">
            <CornersOut size={18} weight={"regular"} />
          </button>
        </header>

        <div className="h-full px-4 overflow-y-scroll pt-16 pb-[88px] scrollbar-hide">
          <div className="w-full aspect-square rounded-[4px] bg-white/10"></div>

          <h1 className="mt-6 text-lg">Mad Lads #3</h1>

          <div className="flex gap-4 mt-2 overflow-x-auto whitespace-nowrap scrollbar-hide">
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

          {address ? (
            <button
              className="h-[44px] w-full bg-[#00FFA2] flex justify-center items-center mt-6 rounded-[6px]"
              onClick={handleTransferNFT}
            >
              <p className="text-[#020D09] text-sm">Buy for {PRICE}</p>
            </button>
          ) : (
            <ConnectKitButton.Custom>
              {({ isConnected, show, truncatedAddress, ensName }) => {
                return (
                  <button
                    onClick={show}
                    className="h-[44px] w-full bg-[#00FFA2] flex justify-center items-center mt-6 rounded-[6px] text-[#020D09] text-sm"
                  >
                    {isConnected
                      ? ensName ?? truncatedAddress
                      : "Connect Wallet"}
                  </button>
                );
              }}
            </ConnectKitButton.Custom>
          )}

          {/* <div className="flex gap-5 mt-8 border-b border-white/10">
            <p className="pb-3 border-b border-white">Attributes</p>
            <p className="pb-3 text-white/50">Details</p>
          </div>

          <div className="grid grid-cols-2 gap-2 mt-4">
            <div className="rounded-sm aspect-[3/1] bg-white/10"></div>
            <div className="rounded-sm aspect-[3/1] bg-white/10"></div>
            <div className="rounded-sm aspect-[3/1] bg-white/10"></div>
            <div className="rounded-sm aspect-[3/1] bg-white/10"></div>
            <div className="rounded-sm aspect-[3/1] bg-white/10"></div>
            <div className="rounded-sm aspect-[3/1] bg-white/10"></div>
          </div> */}
        </div>

        <BottomTabBar />
      </div>
    </div>
  );
};

export default NFT;
