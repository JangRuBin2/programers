function solution(ingredient) {
  let stack = [];
  let count = 0;
  ingredient.forEach((el) => {
    stack.push(el);
    if (
      stack[stack.length - 1] === 1 &&
      stack[stack.length - 2] === 3 &&
      stack[stack.length - 3] === 2 &&
      stack[stack.length - 4] === 1
    ) {
      count++;
      stack.splice(-4);
    }
  });
  return count;
}

solution([2, 1, 1, 2, 3, 1, 2, 3, 1]);

// https://school.programmers.co.kr/learn/courses/30/lessons/133502

// 학습내용 블로그 정리
// https://velog.io/@rudedev/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%ED%96%84%EB%B2%84%EA%B1%B0-%EB%A7%8C%EB%93%A4%EA%B8%B0-%EA%B7%B8%EB%A6%AC%EA%B3%A0-%EC%8B%9C%EA%B0%84-%EB%B3%B5%EC%9E%A1%EB%8F%84
