[![Build Status](https://travis-ci.org/ddubson/weblog.svg?branch=master)](https://travis-ci.org/ddubson/weblog)

# Weblog

## Commands available

### Building for production

Building the project for production use:

`npm run dist`

uses babel to transpile all the resources in the project into the `dist/` directory.

### Run locally

Run the project on your local machine

`npm run start`

uses webpack-dev-server to run the React app on your machine.

### Executing Tests

This project uses:

```
Karma -> Test Runner
Enzyme -> React Test Utility Framework (AirBnB)
Jasmine -> BDD Test Framework (Pivotal Labs)
```

The test files (or `specs`) are stored in `spec/` directory. The full test suite can be run by:

`npm run test`

OR

`jasmine`

### Running syntax linter - ESLint

To verify syntax, run:

`npm run eslint`

This command checks the src and spec directories.

---
