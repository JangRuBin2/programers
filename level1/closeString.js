function solution(s) {
  return [...s].map((string, idx) => {
    const front = [...s.slice(0, idx)];
    // findIndex는 가장 처음 나오는 index를 반환하기 때문에 가장 가까운 인덱스를 구하기 위해서 배열을 reverse했습니다.
    const targetIndex = front.reverse().findIndex((f) => f === string);
    return targetIndex === -1 ? -1 : targetIndex + 1;
  });
}
console.debug(solution("foobar"));

//https://school.programmers.co.kr/learn/courses/30/lessons/142086
