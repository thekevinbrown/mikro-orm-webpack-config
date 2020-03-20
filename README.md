# MikroORM Webpack Config

Tests different webpack configs with MikroORM.

To reproduce:

1. Clone the repo
2. `npm i`
3. `npm run new`

Example output:

```
Error: Cannot find module 'mikro-orm'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:636:15)
    at Function.Module._load (internal/modules/cjs/loader.js:562:25)
    at Module.require (internal/modules/cjs/loader.js:692:17)
    at require (internal/modules/cjs/helpers.js:25:18)
    at eval (webpack:///external_%22mikro-orm%22?:1:18)
    at Object.mikro-orm (/Users/kevin/development/mikro-orm-webpack-config/output/bundle.js:120:1)
    at __webpack_require__ (/Users/kevin/development/mikro-orm-webpack-config/output/bundle.js:20:30)
    at eval (webpack:///./src/user.ts?:9:21)
    at Object../src/user.ts (/Users/kevin/development/mikro-orm-webpack-config/output/bundle.js:109:1)
    at __webpack_require__ (/Users/kevin/development/mikro-orm-webpack-config/output/bundle.js:20:30)

```

Or to test the old config, `npm run old`.

Example output:

```
{ Error: Cannot find module '/Users/kevin/development/mikro-orm-webpack-config/output/webpack:/src/user.ts?'
    at webpackEmptyContext (webpack:///./node_modules/mikro-orm/dist/metadata_sync?:2:10)
    at MetadataDiscovery.initEnumValues (webpack:///./node_modules/mikro-orm/dist/metadata/MetadataDiscovery.js?:395:101)
    at MetadataDiscovery.initColumnType (webpack:///./node_modules/mikro-orm/dist/metadata/MetadataDiscovery.js?:382:25)
    at Object.values.forEach.prop (webpack:///./node_modules/mikro-orm/dist/metadata/MetadataDiscovery.js?:217:18)
    at Array.forEach (<anonymous>)
    at MetadataDiscovery.processEntity (webpack:///./node_modules/mikro-orm/dist/metadata/MetadataDiscovery.js?:213:40)
    at filtered.forEach.meta (webpack:///./node_modules/mikro-orm/dist/metadata/MetadataDiscovery.js?:39:63)
    at Array.forEach (<anonymous>)
    at MetadataDiscovery.discover (webpack:///./node_modules/mikro-orm/dist/metadata/MetadataDiscovery.js?:39:18)
    at process._tickCallback (internal/process/next_tick.js:68:7)
    at Function.Module.runMain (internal/modules/cjs/loader.js:834:11)
    at startup (internal/bootstrap/node.js:283:19)
    at bootstrapNodeJSCore (internal/bootstrap/node.js:623:3) code: 'MODULE_NOT_FOUND' }
```

If I remove the enum from the User entity, then it works.
