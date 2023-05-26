import { reverseWords } from './index';

describe('Testing `reverseWords` function', () => {
  it('Should return `blue is sky the`', () => {
    expect(reverseWords('the sky is blue')).toEqual('blue is sky the');
  });
  it('Should return `world hello`', () => {
    expect(reverseWords('  hello world  ')).toEqual('world hello');
  });
  it('Should return `example good a`', () => {
    expect(reverseWords('a good   example')).toEqual('example good a');
  });
});
