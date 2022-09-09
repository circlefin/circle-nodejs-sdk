npx openapi-generator-cli generate -g typescript-axios  \
-i sdk.json \
-o ./src/generated/ \
-p npmName=circle,supportsES6=true,modelPropertyNaming=original,apiPackage=apis,modelPackage=models \
-t ./templates/typescript-axios --additional-properties=npmVersion=0.1.1-beta.0,withSeparateModelsAndApi=true

npx ts-node build-utils/mustache-camelize.ts src/generated/index.ts > src/generated/index-temp.ts

mv src/generated/index-temp.ts src/generated/index.ts

yarn lint-fix
yarn format