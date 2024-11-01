### the error

```
file:///Users/danielmiller/projects/defiDilemma/node_modules/@orca-so/whirlpools/dist/index.js:1353
import { _POSITION_BUNDLE_SIZE } from "@orca-so/whirlpools-core";
         ^^^^^^^^^^^^^^^^^^^^^
SyntaxError: The requested module '@orca-so/whirlpools-core' does not provide an export named '_POSITION_BUNDLE_SIZE'
    at ModuleJob._instantiate (node:internal/modules/esm/module_job:146:21)
    at async ModuleJob.run (node:internal/modules/esm/module_job:229:5)
    at async ModuleLoader.import (node:internal/modules/esm/loader:473:24)
    at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:123:5)

Node.js v20.18.0
```


### to reproduce
install deps with `npm i`

then 

` KEYPAIR_PATH=YOUR_KEYPAIR.json  node --experimental-specifier-resolution=node --loader ts-node/esm index.ts`