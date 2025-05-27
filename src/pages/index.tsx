import Header from "@/components/header";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { HEADER_SELECT_OPTS, TOKENS } from "@/lib/content";
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
      <section className="max-w-[900px] space-y-5 mx-auto py-10 rounded-md">
        <h1 className="text-[2rem] font-medium">{borrowCategory}</h1>
        <div className="bg-[#E9E9F3] p-1 space-y-1 rounded-md">
          <div className="bg-white relative p-5 rounded-md px-10 py-10">
            <div className="items-center flex gap-1">
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
      </section>
    </div>
  );
}

function TokenConverter(props: { label: string }) {
  return (
    <div className="space-y-2">
      <h4 className="font-medium text-xl">{props.label}</h4>
      <div className="flex bg-background items-center border p-2 rounded-md">
        <TokenSelect />
        <Input
          className="placeholder:text-2xl text-2xl h-full border-none shadow-none"
          placeholder="$100"
        />
      </div>
    </div>
  );
}

function TokenSelect() {
  return (
    <Select>
      <SelectTrigger className="items-start text-xl pb-10 pt-4 w-[200px] bg-white font-bold text-black">
        <SelectValue placeholder="Token" />
      </SelectTrigger>
      <SelectContent>
        {TOKENS.map((item) => (
          <SelectItem key={item} value={item}>
            {item}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

function CenterBolt() {
  return (
    <svg
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 84 93"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-[80px] right-0 left-0 mx-auto hidden w-[68px] md:block"
    >
      <g filter="url(#filter0_d_935_5756)">
        <circle cx="42" cy="40.0217" r="17" fill="white"></circle>
      </g>
      <path
        d="M45.3102 41.4579H53.7034C54.03 41.4579 54.1268 40.9892 53.8298 40.846L45.3087 36.7384L45.3087 27.7382C45.3087 27.4028 44.8818 27.2927 44.7349 27.5902L41.1979 34.7573L37.2484 32.8608C36.9861 32.7349 36.7203 33.0284 36.8518 33.2987L39.3195 38.3705L30.926 38.3705C30.5995 38.3705 30.5026 38.8392 30.7996 38.9824L39.3211 43.0912L39.3211 52.0902C39.3211 52.4256 39.748 52.5357 39.8948 52.2382L43.4316 45.0717L47.3748 46.9716C47.6369 47.0979 47.903 46.8048 47.7719 46.5343L45.3102 41.4579Z"
        fill="url(#paint0_linear_935_5756)"
      ></path>
      <defs>
        <filter
          id="filter0_d_935_5756"
          x="0"
          y="8.02173"
          width="84"
          height="84"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          ></feColorMatrix>
          <feOffset dy="10"></feOffset>
          <feGaussianBlur stdDeviation="12.5"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.345098 0 0 0 0 0.137255 0 0 0 0 0.952941 0 0 0 0.25 0"
          ></feColorMatrix>
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_935_5756"
          ></feBlend>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_935_5756"
            result="shape"
          ></feBlend>
        </filter>
        <linearGradient
          id="paint0_linear_935_5756"
          x1="48.5047"
          y1="34.7058"
          x2="33.6434"
          y2="45.3673"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FA43BD"></stop>
          <stop offset="1" stop-color="#FFA930"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}
