// transfer.js

require('dotenv').config();
const axios = require('axios');
const { ethers } = require('ethers');

// --- 1. Configuration from .env ---
const RPC_URL = process.env.AMOY_RPC_URL;
const PRIVATE_KEY_A = "141ddca6-b0d5-572d-a5ca-08696ca3a8b6";
const RECIPIENT_ADDRESS = "0x307a3c1ffdca0119aef41f6e8e6ec3838dd8725a";
const USDC_CONTRACT_ADDRESS = "0x41E94Eb019C0762f9Bfcf9Fb1E58725BfB0e7582";
const CHAIN_ID = parseInt(process.env.CHAIN_ID, 10); // 80002 for Amoy

// --- 2. Transaction Parameters ---
const AMOUNT_USDC = 1;
// USDC has 6 decimals (1 USDC = 1 * 10^6).
const AMOUNT_IN_WEI = ethers.parseUnits(AMOUNT_USDC.toString(), 6);

// ERC-20 ABI for the transfer function
const ERC20_ABI = [
    "function transfer(address to, uint256 amount) returns (bool)"
];

async function sendUSDCTransfer() {
    if (!RPC_URL || !PRIVATE_KEY_A || !RECIPIENT_ADDRESS || !USDC_CONTRACT_ADDRESS) {
        console.error("Missing required configuration in .env file.");
        return;
    }

    try {
        // --- Step A: Ethers setup for transaction signing ---
        const provider = new ethers.JsonRpcProvider(RPC_URL);
        const wallet = new ethers.Wallet(PRIVATE_KEY_A, provider);
        const senderAddress = wallet.address;

        console.log(`Preparing to send ${AMOUNT_USDC} USDC from ${senderAddress} to ${RECIPIENT_ADDRESS} on Amoy...`);

        // Get the contract interface to encode the 'transfer' function data
        const iface = new ethers.Interface(ERC20_ABI);
        const data = iface.encodeFunctionData("transfer", [RECIPIENT_ADDRESS, AMOUNT_IN_WEI]);

        // --- Step B: Build and Sign the Raw Transaction ---

        // Fetch transaction count (nonce) and gas data
        const nonce = await provider.getTransactionCount(senderAddress, 'latest');
        const { maxFeePerGas, maxPriorityFeePerGas } = await provider.getFeeData();

        // Create the transaction object (EIP-1559 format)
        const transaction = {
            to: USDC_CONTRACT_ADDRESS, // The transaction is sent to the USDC contract
            data: data,                 // The encoded 'transfer' function call
            value: 0,                   // Not sending native token (MATIC), only calling the contract
            nonce: nonce,
            chainId: CHAIN_ID,
            // Gas estimation is crucial for success
            gasLimit: ethers.toBigInt(100000), // A safe estimate for ERC-20 transfer
            maxFeePerGas: maxFeePerGas,
            maxPriorityFeePerGas: maxPriorityFeePerGas,
        };

        // Sign the transaction with the wallet's private key
        const signedTransactionHex = await wallet.signTransaction(transaction);
        console.log("Raw Signed Transaction Hex generated.");

        // --- Step C: Send the Raw Transaction using Axios ---

        // This is the actual API request to the RPC endpoint
        const axiosRequestPayload = {
            jsonrpc: "2.0",
            method: "eth_sendRawTransaction",
            params: [signedTransactionHex],
            id: 1 // Request ID
        };

        const response = await axios.post(RPC_URL, axiosRequestPayload, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        // --- Step D: Handle Response ---

        const responseData = response.data;
        if (responseData.error) {
            console.error("RPC Error:", responseData.error.message);
        } else if (responseData.result) {
            console.log("\n--- Successful API Request (Axios) ---");
            console.log("Method: eth_sendRawTransaction");
            console.log("Status: Success");
            console.log("Transaction Hash:", responseData.result);
            console.log(`\nView on Explorer: https://amoy.polygonscan.com/tx/${responseData.result}`);
        } else {
            console.log("Unexpected response:", responseData);
        }

    } catch (error) {
        console.error("Transaction failed:", error.message);
    }
}

sendUSDCTransfer();