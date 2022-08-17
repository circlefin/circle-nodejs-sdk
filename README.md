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