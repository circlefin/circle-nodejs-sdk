import express from 'express';
import 'dotenv/config';
import { v4 as uuidv4 } from 'uuid';
import { initiateDeveloperControlledWalletsClient } from '@circle-fin/developer-controlled-wallets';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// --- Circle SDK Initialization ---
if (!process.env.CIRCLE_API_KEY || !process.env.ENTITY_SECRET) {
  throw new Error('CIRCLE_API_KEY and ENTITY_SECRET must be set in your .env file.');
}

const circleClient = initiateDeveloperControlledWalletsClient({
  apiKey: process.env.CIRCLE_API_KEY,
  entitySecret: process.env.ENTITY_SECRET,
});

// --- In-memory "database" for simplicity ---
// In a real app, you would use a proper database to store wallet info.
let walletSet;
let wallet;

// --- API Endpoints ---

// 1. Create a Wallet
app.post('/api/wallet', async (req, res) => {
  try {
    // Create a wallet set if we don't have one yet.
    if (!walletSet) {
      const walletSetRes = await circleClient.createWalletSet({
        idempotencyKey: uuidv4(),
        name: 'My Simple Web App WalletSet',
      });
      walletSet = walletSetRes.data?.walletSet;
    }

    // Create a new wallet in our wallet set.
    const walletRes = await circleClient.createWallets({
      idempotencyKey: uuidv4(),
      walletSetId: walletSet.id,
      blockchains: ['MATIC-AMOY'], // Using Polygon Amoy testnet
      count: 1,
      accountType: 'SCA', // Smart Contract Account for more features
    });

    wallet = walletRes.data?.wallets[0];
    console.log('Created Wallet:', wallet);
    res.json(wallet);
  } catch (error) {
    console.error('Error creating wallet:', error.response?.data || error.message);
    res.status(500).json({ error: error.response?.data || 'Failed to create wallet' });
  }
});

// 2. Get Wallet Balance
app.get('/api/balance/:walletId', async (req, res) => {
  const { walletId } = req.params;
  try {
    const balanceRes = await circleClient.getWalletTokenBalance({ id: walletId });
    // Find the USDC balance (Polygon Amoy USDC token ID)
    const usdcTokenId = '1b235c88-22b9-503a-a56a-3d07a1532e36';
    const usdcBalance = balanceRes.data?.tokenBalances?.find(
      (token) => token.token.id === usdcTokenId
    );

    res.json({
      balance: usdcBalance ? usdcBalance.amount : '0.00',
    });
  } catch (error) {
    console.error('Error fetching balance:', error.response?.data || error.message);
    res.status(500).json({ error: error.response?.data || 'Failed to fetch balance' });
  }
});

// 3. Transfer Funds
app.post('/api/transfer', async (req, res) => {
  const { destinationAddress, amount } = req.body;

  if (!wallet) {
    return res.status(400).json({ error: 'Create a wallet first.' });
  }

  try {
    const transferRes = await circleClient.createTransaction({
      idempotencyKey: uuidv4(),
      walletId: wallet.id,
      destinationAddress,
      amounts: [amount],
      fee: { type: 'level', config: { feeLevel: 'MEDIUM' } },
      // Polygon Amoy USDC token ID
      tokenId: '1b235c88-22b9-503a-a56a-3d07a1532e36',
    });

    console.log('Transfer initiated:', transferRes.data);
    res.json(transferRes.data);
  } catch (error) {
    console.error('Error initiating transfer:', error.response?.data || error.message);
    res.status(500).json({ error: error.response?.data || 'Failed to initiate transfer' });
  }
});

// --- Serve Frontend ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicPath = path.join(__dirname, 'public');

app.use(express.static(publicPath));
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log('Make sure your .env file is configured with your API Key and Entity Secret.');
});
