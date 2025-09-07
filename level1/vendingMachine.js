function solution(keymap, targets) {
  const minPress = {};
  // 최소 누르기 횟수 구함
  keymap.forEach((key) => {
    key.split("").forEach((k, idx) => {
      if (!minPress[k] || minPress[k] > idx + 1) {
        minPress[k] = idx + 1;
      }
    });
  });
  return targets.map((target) => {
    let count = 0;
    target.split("").forEach((t) => {
      if (minPress[t]) {
        count += minPress[t];
      } else {
        count = -1;
      }
    });
    return count;
  });
}
console.log(solution(["ABACD", "BCEFD"], ["ABCD", "AABB"]));
