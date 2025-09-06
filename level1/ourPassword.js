function solution(s, skip, index) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .filter((alpha) => !skip.includes(alpha));
  return s
    .split("")
    .map((ch) => {
      let targetIndex = alphabet.indexOf(ch);
      if (targetIndex === -1) return;
      targetIndex = (targetIndex + index) % alphabet.length;
      return alphabet[targetIndex];
    })
    .join("");
}
