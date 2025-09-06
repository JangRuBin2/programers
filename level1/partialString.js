function solution(t, p) {
  const arr = t.split("");
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    let num = i;
    for (let j = 0; j < p.length - 1; j++) {
      if (!t[j + 1]) continue;
      num = num + t[j + 1];
    }
    result.push(+num);
  }
  return result.filter((r) => r <= +p).length;
}
solution("3141592", "271");

// https://school.programmers.co.kr/learn/courses/30/lessons/147355
