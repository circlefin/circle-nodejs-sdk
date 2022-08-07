# Circle APIs Node.js Library


The Circle Node library provides convenient access to the Circle API for
applications written in server-side JavaScript.

## Documentation

See the [`circle-nodejs-sdk` API docs](https://developers.circle.com/reference/ping?lang=node) for Node.js.

## Requirements

Node 10 or higher.

## Installation

Install the package with:

```sh
npm install circleapi --save
# or
yarn add circleapi
```

## Development

Run codegen:

```sh
openapi-generator-cli generate -g typescript-axios  \
-i sdk-doc.json \
-o . \
-p npmName=circle,supportsES6=true,modelPropertyNaming=original \
-t ./templates/typescript-axios --additional-properties=npmVersion=0.1.0-alpha.0,circleApiVersion=v1  
```

Run all tests:

```bash
$ yarn install
$ yarn test
```