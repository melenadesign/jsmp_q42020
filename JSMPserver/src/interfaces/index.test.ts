import greetWorld from '../index';

describe('#index.ts', () => {
  test("function greetWorld return default string 'Hello, world!' ", () => {
    const greeting = greetWorld();
    expect(greeting).toEqual('Hello, world!');
  });
});
