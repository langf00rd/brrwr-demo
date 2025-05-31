import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { mainnet } from "wagmi/chains";

export const config = getDefaultConfig({
  appName: "brrwr app",
  projectId: "YOUR_PROJECT_ID",
  chains: [mainnet],
});
