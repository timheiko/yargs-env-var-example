# Yargs env var example

This is a TypeScript example project to showcase the usage of [yargs](https://yargs.js.org) library to [define](src/yargs-example.ts) and [unit test](src/__tests__/yargs-example.test.ts) the parsing of command line `string`, `boolean` and `number` arguments passed over cmd or environment variables


## Getting started
```
% npm install
```

## Running tests
```
% npm run test
...
 ✓ src/__tests__/yargs-example.test.ts (17 tests) 18ms
   ✓ yargs example > logFile > should use default log file when not passed 5ms
   ✓ yargs example > logFile > should use the passed param log file 1ms
   ✓ yargs example > logFile > should use the passed param log file as alias 1ms
   ✓ yargs example > logFile > should use the env var log file 1ms
   ✓ yargs example > logFile > should use the passed param log file over the env var 1ms
   ✓ yargs example > verbose > should set verbose to `false` when not passed 2ms
   ✓ yargs example > verbose > should set verbose to `false` when `false` passed 1ms
   ✓ yargs example > verbose > should set verbose to `true` when `true` passed 1ms
   ✓ yargs example > verbose > should set verbose to `false` when `false` passed as alias 1ms
   ✓ yargs example > verbose > should set verbose to `true` when `true` passed as alias 1ms
   ✓ yargs example > verbose > should use the env var 1ms
   ✓ yargs example > verbose > should use the passed param over the env var 0ms
   ✓ yargs example > timeout > should set timeout to `5000` when not passed 0ms
   ✓ yargs example > timeout > should set timeout when passed 0ms
   ✓ yargs example > timeout > should set timeout when passed as alias 0ms
   ✓ yargs example > timeout > should use the env var 0ms
   ✓ yargs example > timeout > should use the passed param over the env var 0ms

 Test Files  1 passed (1)
      Tests  17 passed (17)
...
```