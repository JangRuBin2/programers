function solution(food) {
  const [water, ...rest] = food;
  const arr = rest.map((f, idx) => {
    const string = String(idx + 1);
    return string.repeat(Math.floor(f / 2));
  });
  return [...arr, "0", ...arr.reverse()].join("");
}
console.log(solution([1, 3, 4, 6]));

// https://school.programmers.co.kr/learn/courses/30/lessons/134240
