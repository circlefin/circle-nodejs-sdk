const axios = require('axios');
const express = require('express');

// ===================================================================================
// --- Mock API Server (for demonstration purposes) ---
// ===================================================================================

const app = express();
const PORT = 3000;
const jobs = {}; // In-memory store for our "jobs"

// 1. An endpoint to start a new "job"
app.post('/initiate-transfer', (req, res) => {
    const jobId = `job_${Date.now()}`;
    console.log(`[Server] New job created with ID: ${jobId}`);
    
    // Simulate a process that takes time to confirm
    jobs[jobId] = { state: 'PENDING', attempts: 0 };

    // After ~10 seconds, the job will be "CONFIRMED"
    setTimeout(() => {
        if (jobs[jobId]) {
            jobs[jobId].state = 'CONFIRMED';
            console.log(`[Server] Job ${jobId} state updated to CONFIRMED.`);
        }
    }, 10000);

    res.status(202).json({ message: 'Transfer initiated.', jobId });
});

// 2. An endpoint to check the status of a job
app.get('/transfer-status/:jobId', (req, res) => {
    const { jobId } = req.params;
    const job = jobs[jobId];

    if (!job) {
        return res.status(404).json({ error: 'Job not found.' });
    }

    console.log(`[Server] Polling request for ${jobId}. Current state: ${job.state}`);
    res.status(200).json({ jobId, state: job.state });
});

app.listen(PORT, () => {
    console.log(`[Server] Mock API server listening on http://localhost:${PORT}`);
});


// ===================================================================================
// --- Client with Polling Logic ---
// ===================================================================================

const API_BASE_URL = `http://localhost:${PORT}`;
const POLLING_INTERVAL_MS = 2000; // Poll every 2 seconds
const MAX_POLL_ATTEMPTS = 10;   // Stop after 10 attempts (20 seconds)

/**
 * Pauses execution for a specified number of milliseconds.
 * @param {number} ms - The number of milliseconds to wait.
 * @returns {Promise<void>}
 */
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Polls the status endpoint until the state is "CONFIRMED" or max attempts are reached.
 * @param {string} jobId - The ID of the job to poll.
 */
async function pollForConfirmation(jobId) {
    console.log(`\n[Client] Starting to poll for job ${jobId} confirmation...`);

    for (let attempt = 1; attempt <= MAX_POLL_ATTEMPTS; attempt++) {
        try {
            console.log(`[Client] Polling attempt #${attempt}...`);
            const response = await axios.get(`${API_BASE_URL}/transfer-status/${jobId}`);
            const { state } = response.data;

            if (state === 'CONFIRMED') {
                console.log(`\n✅ Success! Job ${jobId} is CONFIRMED.`);
                return; // Exit the function successfully
            }

            // If not confirmed, wait before the next attempt
            await wait(POLLING_INTERVAL_MS);

        } catch (error) {
            console.error(`[Client] Error during polling attempt #${attempt}:`, error.message);
            // Decide if you want to stop on error or continue polling
            await wait(POLLING_INTERVAL_MS);
        }
    }

    console.error(`\n❌ Failure: Job ${jobId} was not confirmed after ${MAX_POLL_ATTEMPTS} attempts.`);
}

/**
 * Main function to run the demonstration.
 */
async function main() {
    try {
        // Step 1: Initiate the transfer to get a job ID
        console.log('[Client] Initiating a new transfer...');
        const initialResponse = await axios.post(`${API_BASE_URL}/initiate-transfer`);
        const { jobId } = initialResponse.data;

        if (jobId) {
            // Step 2: Start polling for the result
            await pollForConfirmation(jobId);
        }
    } catch (error) {
        console.error('[Client] Failed to initiate transfer:', error.message);
    } finally {
        // In a real script, you might not exit immediately, but for this demo we will.
        console.log("\n[Client] Script finished. Shutting down server in 2 seconds...");
        setTimeout(() => process.exit(0), 2000);
    }
}

// Run the main function after a short delay to ensure the server is up.
setTimeout(main, 500);