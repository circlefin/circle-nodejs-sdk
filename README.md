# Circle APIs Node.js Library

[![npm version](https://img.shields.io/npm/v/@circle-fin/circle-sdk)](https://www.npmjs.com/package/@circle-fin/circle-sdk)
[![npm downloads](https://img.shields.io/npm/dm/@circle-fin/circle-sdk)](https://www.npmjs.com/package/@circle-fin/circle-sdk)


The Circle Node library provides convenient access to the Circle API for
applications written in server-side JavaScript. For the API reference, see the [Circle API docs](https://developers.circle.com/reference).

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
        endpoint: "https://example.org/handler/for/notifications"
    };

    const subscribeResp = await circle.subscriptions.createSubscription(subscribeReq);
    console.log(subscribeResp.data);
}
createSubscription();
```

## Development
Clone this repo and install dependencies using 
```sh
yarn install
```

1. Run the codegen command to generate the source code for this SDK from the `sdk.json` OpenAPI specification file:

    ```sh
    yarn gen-sdk
    ```

2. Run all tests:

    ```bash
    yarn test
    ```


## Contributions

Please follow the [Conventional Commits][convencomms] format for all commits when creating a contributing pull request for this repo. 

[convencomms]: https://www.conventionalcommits.org/en/v1.0.0/
