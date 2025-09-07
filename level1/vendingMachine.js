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
    for (const t of target) {
      if (minPress[t]) {
        count += minPress[t];
      } else {
        count = -1; // 한 번이라도 없으면 전체 -1
        break; // 더 이상 계산할 필요 없음
      }
    }
    return count;
  });
}
console.log(solution(["ABACD", "BCEFD"], ["ABCD", "AABB"]));

// https://school.programmers.co.kr/learn/courses/30/lessons/160586
