import { Lock, ScrollIcon } from "lucide-react";

export const HEADER_SELECT_OPTS = [
  "Borrow DAI or USDC",
  "My portfolio",
  "Markets",
];

export const TOKENS = ["DAI", "USDC", "USDT", "WBTC", "WETH"];

export const HEADER_MENU_OPTS = [
  {
    label: "Terms of Service",
    icon: <ScrollIcon size={14} className="text-neutral-500" />,
  },
  {
    label: "Privacy Policy",
    icon: <Lock size={14} className="text-neutral-500" />,
  },
  {
    label: "Farms",
  },
];
