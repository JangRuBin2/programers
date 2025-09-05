function solution(n, m, section) {
  let stack = 0;
  for (let i = 1; i < n + 1; i++) {
    if (!section.includes(i)) continue;
    console.log(i);
    if (section[section.length - 1] !== i) stack++;
  }
  return stack;
}
solution(8, 4, [2, 3, 6]);
