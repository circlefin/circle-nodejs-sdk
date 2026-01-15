require('dotenv').config();
const { initiateDeveloperControlledWalletsClient } = require('@circle-fin/developer-controlled-wallets');

// --- Configuration ---
// It's good practice to load sensitive data from environment variables.
const API_KEY = process.env.CIRCLE_API_KEY;
const ENTITY_SECRET = process.env.CIRCLE_ENTITY_SECRET;

// --- Command-Line Argument Parsing ---
// A simple way to parse named arguments like --WALLET=...
const getArg = (argName) => {
    const arg = process.argv.find(a => a.startsWith(`--${argName}=`));
    if (!arg) return null;
    return arg.split('=')[1];
};

const WALLET_ID = getArg('WALLET');

/**
 * Fetches and displays the balance for a given wallet ID.
 * @param {string} walletId The ID of the wallet to check.
 */
async function getWalletBalance(walletId) {
    if (!API_KEY || !ENTITY_SECRET) {
        console.error("Error: CIRCLE_API_KEY and CIRCLE_ENTITY_SECRET must be set in your .env file.");
        return;
    }
    if (!walletId) {
        console.error("Error: Please provide a wallet ID using the --WALLET=<your-wallet-id> argument.");
        console.log("Example: node get-wallet-balance.js --WALLET=123456-abc-789");
        return;
    }

    try {
        console.log(`Fetching balance for wallet ID: ${walletId}...`);

        const circleClient = initiateDeveloperControlledWalletsClient({
            apiKey: API_KEY,
            entitySecret: ENTITY_SECRET,
        });

        const response = await circleClient.getWallet({ id: walletId });
        const balance = await circleClient.getWalletTokenBalance({ id: walletId });
        const walletBalances=balance.data?.tokenBalances;
        const wallet = response.data?.wallet;
        console.log("\n--- Wallet Details ---");
        console.log(wallet);
        console.log(walletBalances);
        console.log(`Wallet ID:   ${wallet.id}`);
        console.log(`Description: ${wallet.description || 'N/A'}`);
        console.log("Balances:");
        if (walletBalances && walletBalances.length > 0) {
            walletBalances.forEach(balance => {
                console.log(`  - ${balance.amount} ${balance.token.symbol} (${balance.token.name} on ${balance.token.blockchain})`);
            });
        } else {
            console.log("  - No balances found.");
        }

    } catch (error) {
        console.error("\n--- Circle API Error ---");
        if (error.response) {
            console.error(`Status: ${error.response.status}`);
            console.error("Response Data:", error.response.data);
        } else {
            console.error("Error Message:", error.message);
        }
    }
}

// Execute the function with the provided wallet ID
getWalletBalance(WALLET_ID);