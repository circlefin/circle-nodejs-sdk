document.addEventListener('DOMContentLoaded', () => {
  // --- DOM Elements ---
  const createWalletBtn = document.getElementById('createWalletBtn');
  const refreshBalanceBtn = document.getElementById('refreshBalanceBtn');
  const transferForm = document.getElementById('transferForm');

  const walletInfoDiv = document.getElementById('walletInfo');
  const walletIdEl = document.getElementById('walletId');
  const walletAddressEl = document.getElementById('walletAddress');
  const walletBlockchainEl = document.getElementById('walletBlockchain');
  const walletBalanceEl = document.getElementById('walletBalance');

  const transferSection = document.getElementById('transferSection');
  const destinationAddressInput = document.getElementById('destinationAddress');
  const amountInput = document.getElementById('amount');

  const logEl = document.getElementById('log');

  // --- State ---
  let currentWallet = null;

  // --- Logger ---
  function log(message) {
    const timestamp = new Date().toLocaleTimeString();
    logEl.innerHTML = `[${timestamp}] ${message}\n` + logEl.innerHTML;
    console.log(message);
  }

  // --- API Functions ---

  // 1. Create Wallet
  async function createWallet() {
    log('Creating a new wallet...');
    createWalletBtn.disabled = true;
    createWalletBtn.textContent = 'Creating...';

    try {
      const response = await fetch('/api/wallet', { method: 'POST' });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create wallet.');
      }

      currentWallet = data;
      log(`Wallet created successfully! ID: ${currentWallet.id}`);

      // Update UI
      walletIdEl.textContent = currentWallet.id;
      walletAddressEl.textContent = currentWallet.address;
      walletBlockchainEl.textContent = currentWallet.blockchain;
      walletInfoDiv.classList.remove('hidden');
      transferSection.classList.remove('hidden');
      createWalletBtn.textContent = 'Wallet Created';

      // Fetch initial balance
      await getBalance();
    } catch (error) {
      log(`Error: ${error.message}`);
      createWalletBtn.disabled = false;
      createWalletBtn.textContent = 'Create New Wallet';
    }
  }

  // 2. Get Balance
  async function getBalance() {
    if (!currentWallet) return;

    log(`Fetching balance for wallet ${currentWallet.id}...`);
    refreshBalanceBtn.disabled = true;

    try {
      const response = await fetch(`/api/balance/${currentWallet.id}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch balance.');
      }

      walletBalanceEl.textContent = data.balance;
      log(`Balance updated: ${data.balance} USDC`);
    } catch (error) {
      log(`Error: ${error.message}`);
    } finally {
      refreshBalanceBtn.disabled = false;
    }
  }

  // 3. Initiate Transfer
  async function initiateTransfer(event) {
    event.preventDefault();
    if (!currentWallet) return;

    const destinationAddress = destinationAddressInput.value;
    const amount = amountInput.value;

    log(`Initiating transfer of ${amount} USDC to ${destinationAddress}...`);

    try {
      const response = await fetch('/api/transfer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ destinationAddress, amount }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error?.message || data.error || 'Failed to initiate transfer.');
      }

      log(`Transfer initiated! Challenge ID: ${data.challengeId}`);
      log('The transaction is now being processed on the blockchain.');
      transferForm.reset();
      // Refresh balance after a short delay to allow for processing
      setTimeout(getBalance, 5000);
    } catch (error) {
      log(`Error: ${error.message}`);
    }
  }

  // --- Event Listeners ---
  createWalletBtn.addEventListener('click', createWallet);
  refreshBalanceBtn.addEventListener('click', getBalance);
  transferForm.addEventListener('submit', initiateTransfer);

  log('App initialized. Click "Create New Wallet" to start.');
});