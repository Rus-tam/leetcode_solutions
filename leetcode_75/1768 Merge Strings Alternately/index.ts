export function mergeAlternately(word1: string, word2: string) {
  let result: string[] = [];
  const maxLength: number = Math.max(word1.split('').length, word2.split('').length);
  for (let i = 0; i <= maxLength; i++) {
    result.push(word1[i]);
    result.push(word2[i]);
  }
  return result.join('');
}
