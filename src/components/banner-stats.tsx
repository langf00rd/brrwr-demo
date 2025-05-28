export default function BannerStats() {
  return (
    <div className="hidden md:flex justify-end">
      <div className="bg-[#ffffffe0] gap-5 w-max flex items-center p-2 px-5 rounded-md">
        <div className="border-r pr-5">
          <span className="text-neutral-500">TVL:</span>
          <span className="font-semibold">$3.077B</span>
        </div>
        <div className="border-r pr-5">
          <span className="text-neutral-500">Users:</span>
          <span className="font-semibold">173K</span>
        </div>
        <div>
          <span className="text-neutral-500">Liquidity:</span>
          <span className="font-semibold">$2.626B</span>
        </div>
      </div>
    </div>
  );
}
