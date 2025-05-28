import Banner from "@/components/banner";
import BannerStats from "@/components/banner-stats";
import Borrow from "@/components/borrow";
import Header from "@/components/header";
import { HEADER_SELECT_OPTS } from "@/lib/content";
import { useState } from "react";

export default function Home() {
  const [borrowCategory, setBorrowCategory] = useState<string>(
    HEADER_SELECT_OPTS[0],
  );
  return (
    <div>
      <Header
        borrowCategory={borrowCategory}
        onBorrowCategoryChange={setBorrowCategory}
      />
      <section className="max-w-[900px] px-5 space-y-10 mx-auto py-10 rounded-md">
        <div className="space-y-5">
          <BannerStats />
          <Banner />
        </div>
        <Borrow borrowCategory={borrowCategory} />
      </section>
    </div>
  );
}
