import greetWorld from './index';
import { test, expect, describe } from '@jest/globals';

describe('#index.ts', () => {
  test("function greetWorld return default string 'Hello, world!' ", () => {
    const greeting = greetWorld();
    expect(greeting).toEqual('Hello, world!');
  });
});
