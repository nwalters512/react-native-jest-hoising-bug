# react-native-jest-hoising-bug

Reproduces a bug with the React Native Jest preprocessor.

## Steps to reproduce

1. Run `yarn` to install dependencies.
2. Run `yarn test`. This will execute the tests defined in `src/index.test.js`.
3. Observe how the test fails with the exception thrown from `src/example.js`. This is unexpected, since the implementation of that function should be mocked.
4. Delete `jest.config.js` to turn off the `react-native` preset and use the standard `babel-jest` transformer.
5. Run `yarn test` again.
6. Observe how the test now passes. This is because the call to `jest.mock` is correctly hoisted to the top of the file, so the function from `src/example.js` is now properly mocked.