function solution(t, p) {
  const arr = t.split("");
  const result = [];
  for (idx in t) {
    let num = arr.slice(+idx, +idx + p.length);
    num = num.join("");
    if (num.length === p.length) result.push(+num);
  }
  return result.filter((r) => r <= +p).length;
}
solution("10203", "15");

// https://school.programmers.co.kr/learn/courses/30/lessons/147355
