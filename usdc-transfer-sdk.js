// transfer.js

require('dotenv').config();
const { initiateDeveloperControlledWalletsClient } = require('@circle-fin/developer-controlled-wallets');
const { v4: uuidv4 } = require('uuid'); // Required for idempotency key

// --- Configuration from .env ---
const API_KEY = process.env.CIRCLE_API_KEY;
const ENTITY_SECRET_CIPHERTEXT = process.env.CIRCLE_ENTITY_SECRET;
const SENDER_WALLET_ID = process.env.SENDER_WALLET_ID;
const RECIPIENT_ADDRESS = process.env.RECIPIENT_ADDRESS;
const USDC_TOKEN_ID = process.env.USDC_TOKEN_ID; // Example: "228945d9-43c7-57ce-9b0d-b10857317c2a"

// --- Transfer Details ---
const AMOUNT_USDC = "1.00"; 
const BLOCKCHAIN = "MATIC-AMOY"; // Circle's identifier for the Amoy testnet

/**
 * Transfers 1 USDC from a Circle Developer-Controlled Wallet (Wallet A) 
 * to an external blockchain address (Wallet B) on the Matic Amoy testnet.
 */
async function sendUsdcTransfer() {
    // Basic input validation
    if (!API_KEY || !ENTITY_SECRET_CIPHERTEXT || !SENDER_WALLET_ID || !RECIPIENT_ADDRESS || !USDC_TOKEN_ID) {
        console.error("Missing one or more required environment variables in .env file.");
        return;
    }

    try {
        // 1. Initialize the Circle Developer-Controlled Wallets Client
        const circleClient = initiateDeveloperControlledWalletsClient({
            apiKey:"TEST_API_KEY:a4c20122aeb5c8600299da79c3ba1a95:0bccb52ac8d8fc127abcaa067c1b61be" ,
            entitySecret: "e262785a20bfc1edc87f8c41db906eb871256bb448184786621bd30e5d14a003",
            // Use CircleEnvironments.sandbox for testing
            // baseUrl: 'https://api.circle.com/v1/w3s', // default for production
        });
        console.log(JSON.stringify(circleClient));
        console.log(`Attempting to transfer ${AMOUNT_USDC} USDC from Wallet ID ${SENDER_WALLET_ID} to ${RECIPIENT_ADDRESS} on ${BLOCKCHAIN}...`);

        // 2. Prepare the transfer request payload
        let transferPayload = {
            idempotencyKey: uuidv4(), // Ensures the request is processed only once
            walletId: SENDER_WALLET_ID,
            destinationAddress: RECIPIENT_ADDRESS,
            tokenAddress: "0x41e94eb019c0762f9bfcf9fb1e58725bfb0e7582",
            blockchain:'MATIC-AMOY',
            amounts:["0.01"],
            fee: { type: "level", config: { feeLevel: "LOW" }}
        };
        console.log(JSON.stringify(transferPayload));
        // 3. Execute the transfer API call
        const response = await circleClient.createTransaction(transferPayload);
        // const response = await circleClient.transfers.createTransfer(transferPayload);

        // 4. Process the response
        if (response.data && response.data.transfer) {
            const transfer = response.data.transfer;
            console.log("\n--- Transfer Initiated Successfully ---");
            console.log("Transfer ID:", transfer.id);
            console.log("Status:", transfer.status);
            console.log("Source Wallet ID:", transfer.source.id);
            console.log("Destination Address:", transfer.destination.address);
            console.log("Expected Amount:", transfer.amount.amount, transfer.amount.currency);
            
            // Note: The transactionHash will only be available once the transfer status changes to 'complete'
            if (transfer.transactionHash) {
                console.log(`Transaction Hash: ${transfer.transactionHash}`);
                console.log(`View on AmoyScan: https://amoy.polygonscan.com/tx/${transfer.transactionHash}`);
            } else {
                console.log("Transaction is processing. Check transfer status later for the hash.");
            }
            
            return transfer;
        } else {
            console.error("Transfer failed or returned an unexpected response structure:", response.data);
        }

    } catch (error) {
        // Handle API errors (e.g., authentication, wallet not found, insufficient funds)
        console.error("\n--- Circle API Error ---");
        console.error("Error Message:", error.message);
        if (error.response) {
            console.error("Response Data:", error.response.data);
        }
    }
}

// Execute the function
sendUsdcTransfer();