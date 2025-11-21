require('dotenv').config();
const { initiateDeveloperControlledWalletsClient } = require('@circle-fin/developer-controlled-wallets');
const { v4: uuidv4 } = require('uuid'); // Required for idempotency key
const TRANSACTION_ID = process.env.TRANSACTION_ID || process.argv[2];

async function getTransfer(id){
    console.log(id);
    const circleClient = initiateDeveloperControlledWalletsClient({
    apiKey:"TEST_API_KEY:a4c20122aeb5c8600299da79c3ba1a95:0bccb52ac8d8fc127abcaa067c1b61be" ,
    entitySecret: "e262785a20bfc1edc87f8c41db906eb871256bb448184786621bd30e5d14a003",
    });
    let transaction = await circleClient.getTransaction({"id":id});
    if (transaction.state!="INITIATED"){
        console.log(transaction.data);
        console.log("Status:", transaction.data.transaction.state);
        console.log("Source Wallet ID:", transaction.data.transaction.id);
        console.log("Destination Address:", transaction.data.transaction.destinationAddress);
        console.log("Expected Amount:", transaction.data.transaction.amounts);
        return true;
    }else{
        console.log('INCOMPLETE STATE');
        return false;
    }
}

if (TRANSACTION_ID) {
    getTransfer(TRANSACTION_ID);
}