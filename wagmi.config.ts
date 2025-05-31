import { defineConfig, loadEnv } from "@wagmi/cli";
import { etherscan, react } from "@wagmi/cli/plugins";
import { erc721Abi } from "viem";
import { mainnet } from "wagmi/chains";

export default defineConfig(() => {
  const env = loadEnv({
    mode: process.env.NODE_ENV,
    envDir: process.cwd(),
  });
  return {
    out: "src/generated.ts",
    contracts: [
      {
        name: "erc721",
        abi: erc721Abi,
      },
    ],
    plugins: [
      etherscan({
        apiKey: env.ETHERSCAN_API_KEY!,
        chainId: mainnet.id,
        contracts: [
          {
            name: "Magna",
            address: {
              [mainnet.id]: "0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68",
            },
          },
        ],
      }),
      react(),
    ],
  };
});
