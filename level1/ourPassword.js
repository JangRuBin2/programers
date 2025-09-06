function solution(s, skip, index) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .filter((alpha) => !skip.includes(alpha));
  const arr = s.split("");
  return arr
    .map((a) => {
      let targetIndex = alphabet.findIndex((alpha) => alpha === a);
      if (!targetIndex === -1) return;
      if (targetIndex + index >= alphabet.length) {
        return alphabet[targetIndex + index - alphabet.length];
      }
      return alphabet[targetIndex + index];
    })
    .join("");
}
solution("aukks", "wbqd", 5);

// https://school.programmers.co.kr/learn/courses/30/lessons/155652
