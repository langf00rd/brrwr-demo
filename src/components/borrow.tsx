import { CenterBolt } from "@/lib/icons";
import { motion } from "motion/react";
import TokenConverter from "./token-converter";

export default function Borrow(props: {
  borrowCategory: string;
  contractName?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-3"
    >
      <h1 className="text-[1.5rem] md:text-[2rem] font-medium">
        {props.borrowCategory} ({props.contractName})
      </h1>
      <div className="bg-[#E9E9F3] p-1 space-y-1 rounded-md">
        <div className="bg-white relative p-5 rounded-md md:px-10 py-10">
          <div className="items-center flex md:flex-row flex-col gap-2 md:gap-1">
            <TokenConverter label="Deposit" />
            <div className="relative -top-[100px] -left-[34px]">
              <CenterBolt />
            </div>
            <TokenConverter label="Borrow" />
          </div>
        </div>
        <div className="bg-white relative rounded-md">
          <div className="space-y-2 p-10">
            <div className="flex items-center justify-between">
              <h1 className="font-medium text-xl">Loan to Value (LTV)</h1>
              <h1 className="font-medium text-xl">0.00%</h1>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-neutral-400 text-sm">
                Ratio of the collateral value to the borrowed value
              </p>
              <p className="text-neutral-400 text-sm">max. 80.00%</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
