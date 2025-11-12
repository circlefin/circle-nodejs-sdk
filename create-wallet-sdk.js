import { initiateDeveloperControlledWalletsClient } from "@circle-fin/developer-controlled-wallets";
const client = initiateDeveloperControlledWalletsClient({
  apiKey:
    "TEST_API_KEY:a4c20122aeb5c8600299da79c3ba1a95:0bccb52ac8d8fc127abcaa067c1b61be",
  entitySecret:
    "e262785a20bfc1edc87f8c41db906eb871256bb448184786621bd30e5d14a003"
});
const walletSetResponse = await client.createWalletSet({ name: "SDK Wallet Set" });
console.log("Created Wallet Set", walletSetResponse.data?.walletSet);
const walletsResponse = await client.createWallets({
  blockchains: ["SOL-DEVNET"],
  count: 1,
  walletSetId: walletSetResponse.data?.walletSet?.id ?? ""
});
console.log("Created Wallets", walletsResponse.data?.wallets);
