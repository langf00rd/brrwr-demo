import Banner from "@/components/banner";
import BannerStats from "@/components/banner-stats";
import Borrow from "@/components/borrow";
import Header from "@/components/header";
import { useReadMagna } from "@/generated";
import { HEADER_SELECT_OPTS } from "@/lib/content";
import { toNumber } from "@/lib/utils";
import { useState } from "react";
import { useAccount } from "wagmi";

export default function Home() {
  const account = useAccount();

  console.log("account", account);

  const { data: contractName } = useReadMagna({
    functionName: "name",
  });

  const { data: totalSupply } = useReadMagna({
    functionName: "totalSupply",
  });

  const { data: tokensOfOwner } = useReadMagna({
    functionName: "totalMintedByAddress",
    args: ["0x1C12aeA4bc03469ce2D10227F6E6e63099F42424"],
  });

  const [borrowCategory, setBorrowCategory] = useState<string>(
    HEADER_SELECT_OPTS[0],
  );

  console.log("read-name ->", contractName);
  console.log("read-totalSupply ->", toNumber(totalSupply));
  console.log("read-tokensOfOwner ->", tokensOfOwner);

  return (
    <div>
      <Header
        borrowCategory={borrowCategory}
        onBorrowCategoryChange={setBorrowCategory}
      />
      <section className="max-w-[900px] px-5 space-y-10 mx-auto py-10 rounded-md">
        <div className="space-y-5">
          <BannerStats totalSupply={toNumber(totalSupply)} />
          <Banner />
        </div>
        <Borrow borrowCategory={borrowCategory} contractName={contractName} />
      </section>
    </div>
  );
}
