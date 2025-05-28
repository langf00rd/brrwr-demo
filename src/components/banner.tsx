import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Banner() {
  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-tr from-[#104527] via-black to-[#101015] text-white p-10 rounded-md"
    >
      <div className="space-y-2">
        <motion.h1
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-[1.8rem] md:text-[2.4rem] font-semibold md:max-w-[500px]"
        >
          Deposit your USDC and earn{" "}
          <span className="text-green-300">4.5%</span> APY!
        </motion.h1>
        <br />
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="md:flex space-y-5 items-end justify-between"
        >
          <div className="space-y-2">
            <p className="opacity-70 md:max-w-[500px]">
              Deposit your stablecoins into USDC Savings to tap into the Sky
              Savings Rate, which grants you a transparent APY in USDC.
            </p>
            <Link
              href="#"
              className="w-max text-green-400 flex items-center gap-2 hover:underline"
            >
              Learn More <ExternalLink size={15} />
            </Link>
          </div>
          <Button className="bg-white text-green-800" size="lg">
            Try in Sandbox
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}
