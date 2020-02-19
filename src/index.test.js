import { example } from './example';

jest.mock('./example', () => ({
  __esModule: true,
  example: jest.fn()
}));

describe('example test', () => {
  it('hoists jest.mock correctly', () => {
    example();
  });
});