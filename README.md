# Circle APIs Node.js Library


The Circle Node library provides convenient access to the Circle API for
applications written in server-side JavaScript.

## Documentation

See the [Circle API docs](https://developers.circle.com/reference/ping?lang=node) for Node.js.

## Requirements

Node 10 or higher.

## Installation

Install the package with:

```sh
npm install @circle-fin/circle-sdk --save
# or
yarn add @circle-fin/circle-sdk
```

## Usage

In order to make API calls, you will need to have a Bearer Token. It is recommended that you don't directly paste the Bearer Token inside your code. You could store it as a variable in a `.env` file:

```bash
BEARER_TOKEN=<enter your token here>
```

and then access it later as shown in the below example:


```Typescript
import * as dotenv from 'dotenv';
import { CardsApi, CardCreationRequest } from "circle-nodejs-sdk";

dotenv.config();


/* Initialize API driver */
const baseUrl = 'http://api-sandbox.circle.com';

const cardsApiDriver = new CardsApi(baseUrl);
cardsApiDriver.accessToken = process.env.BEARER_TOKEN!;


/* Send request */
(async function main() {
    const newCardReq: CardCreationRequest = {
        idempotencyKey: "ba943ff1-ca16-49b2-ba55-1057e70ca5c2",
        encryptedData: "LS0tLS1CRUdJ...",
        expMonth: 7,
        billingDetails: {
            name: 'John Doe',
            city: 'Chicago',
            country: 'US',
            line1: '123 MoneyStreet',
            postalCode: '99999'
        },
        expYear: 2028,
        metadata: {
            email: "john@circle.com",
            sessionId: "DE6FA86F60BB47B379307F851E238617",
            ipAddress: "244.28.239.130",
        },
    };

    const createResponse = await cardsApiDriver.createCard(newCardReq);
    console.log(createResponse.body.data);
})();
```


## Development

To run the codegen:

```sh
openapi-generator-cli generate -g typescript-axios  \
-i sdk.json \
-o ./src/generated/ \
-p npmName=circle,supportsES6=true,modelPropertyNaming=original,apiPackage=apis,modelPackage=models \
-t ./templates/typescript-axios --additional-properties=npmVersion=0.1.0-alpha.0,circleApiVersion=v1,withSeparateModelsAndApi=true
```

Run all tests:

```bash
$ yarn install
$ yarn test
```