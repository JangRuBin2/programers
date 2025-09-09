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
