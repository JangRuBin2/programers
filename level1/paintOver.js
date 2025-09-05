function solution(n, m, section) {
  let count = 1;
  let start = section[0]; // 페인트칠 시작점

  for (let i = 1; i < section.length; i++) {
    // 페인트칠 범위가 최대 길이(m)을 벗어나는 경우에만 count 증가와 페인트 시작점 변경
    if (section[i] - start >= m) {
      count++;
      start = section[i];
    }
  }
  return count;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/161989
