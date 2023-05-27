import { mergeAlternately } from './index';

describe('Testing `mergeAlternately` function', () => {
  it('Should return `apbqcr`', () => {
    expect(mergeAlternately('abc', 'pqr')).toEqual('apbqcr');
  });
  it('Should return `apbqrs`', () => {
    expect(mergeAlternately('ab', 'pqrs')).toEqual('apbqrs');
  });
  it('Should return `apbqcd`', () => {
    expect(mergeAlternately('abcd', 'pq')).toEqual('apbqcd');
  });
});
