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
Clone this repo and install dependencies using 
```sh
yarn install
```

1. Run the codegen:

    ```sh
    yarn gen-sdk <sdk-version>      # e.g. yarn gen-sdk 0.1.1-beta.0
    ```

2. Run all tests:

    ```bash
    yarn test
    ```


## Contributions

Please follow the [Conventional Commits][convencomms] format for all commits when creating a contributing pull request for this repo. 

[convencomms]: https://www.conventionalcommits.org/en/v1.0.0/
