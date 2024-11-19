import { createWalletClient, http, parseEther } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { sepolia } from "viem/chains";
import { crossChainNFTAbi } from "../../smart-contracts/crossChainNFTAbi";

const account = privateKeyToAccount(`0x${process.env.NEXT_PUBLIC_PRIVATE_KEY}`);

const client = createWalletClient({
  account,
  chain: sepolia,
  transport: http("https://ethereum-sepolia-rpc.publicnode.com"),
});

export const triggerTransferNFT = async (walletAddress: `0x${string}`) => {
  const tx = await client.writeContract({
    account,
    chain: sepolia,
    address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as `0x${string}`,
    abi: crossChainNFTAbi,
    functionName: "crossChainTransfer",
    args: ["Avalanche", walletAddress, BigInt(2)],
    value: parseEther("0.01"),
  });
  return tx;
};
