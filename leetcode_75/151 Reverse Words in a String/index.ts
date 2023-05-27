export function reverseWords(s: string) {
  return s
    .split(' ')
    .filter((elem) => elem !== '')
    .reverse()
    .join(' ');
}
