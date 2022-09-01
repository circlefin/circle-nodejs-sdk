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

In order to make API calls, you will need an API key. Once you obtain one, you can use this SDK to make API calls as follows:

```Typescript
import { Circle, CircleEnvironments, SubscriptionRequest } from "@circle-fin/circle-sdk";

// Initialize API driver
const circle = new Circle(
    '<your-api-key>',
    CircleEnvironments.sandbox      // API base url
);

async function createSubscription() {
    const subscribeReq: SubscriptionRequest = {
        endpoint: "https://742ef341af57c9.lhrtunnel.link"
    };

    const subscribeResp = await circle.subscriptions.subscribe(subscribeReq);
    console.log(subscribeResp.data);
}
createSubscription();
```

## Development

To run the codegen:

<!--- 
A workflow extracts and executes the command below during an auto-regenration workflow. 
If you plan on adding anything in front of the 'openapi-generator-cli' generator command line,
or end this section with anything other that '```', make sure to modify .github/workflows/openapi-regen.yml accordingly.
-->
```sh
openapi-generator-cli generate -g typescript-axios  \
-i sdk.json \
-o ./src/generated/ \
-p npmName=circle,supportsES6=true,modelPropertyNaming=original,apiPackage=apis,modelPackage=models \
-t ./templates/typescript-axios --additional-properties=npmVersion=${version},withSeparateModelsAndApi=true
```

Run all tests:

```bash
$ yarn install
$ yarn test
```
