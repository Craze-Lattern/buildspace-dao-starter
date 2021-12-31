import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xE44cCd6c4e57bC4dd63683948e95dB5d6295193a",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Developer",
        description: "This NFT will give you access to DevDAO!",
        image: readFileSync("scripts/assets/headband.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()