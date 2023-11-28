// 1. 경로 탐색(인접행렬)
function solution(n, arr) {
  let answer = 0;
  let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  let ch = Array.from({ length: n + 1 }, () => 0);
  path = [];
  for (let [a, b] of arr) {
    graph[a][b] = 1;
  }
  //   console.log(graph);
  //   [
  //     [ 0, 0, 0, 0, 0, 0 ],
  //     [ 0, 0, 1, 1, 1, 0 ],
  //     [ 0, 1, 0, 1, 0, 1 ],
  //     [ 0, 0, 0, 0, 1, 0 ],
  //     [ 0, 0, 1, 0, 0, 1 ],
  //     [ 0, 0, 0, 0, 0, 0 ]
  //   ]
  function DFS(v) {
    if (v === n) {
      answer++;
      //   console.log('path', path);
    } else {
      for (let i = 1; i <= n; i++) {
        if (graph[v][i] === 1 && ch[i] === 0) {
          ch[i] = 1;
          path.push(i);
          DFS(i);
          ch[i] = 0;
          path.pop();
        }
      }
    }
  }

  path.push(1);
  ch[1] = 1;
  DFS(1);
  return answer;
}

let arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];
console.log(solution(5, arr));

// 2. 경로 탐색(인접 리스트)
// 인접 행렬로 풀떄는 모든 정점을 for문을 돈다면
// 인접 리스트는 정점과 연결된 정점 length만큼만 for문 실행
function solution1(n, arr) {
  let answer = 0;
  let graph = Array.from(Array(n + 1), () => Array());
  let ch = Array.from({ length: n + 1 }, () => 0);
  let path = [];
  for (let [a, b] of arr) {
    graph[a].push(b);
  }
  // console.log(graph); // [ [], [ 2, 3, 4 ], [ 1, 3, 5 ], [ 4 ], [ 2, 5 ], [] ]
  function DFS(v) {
    if (v === n) {
      answer++;
      //   console.log(path);
    } else {
      for (let nv of graph[v]) {
        if (ch[nv] === 0) {
          path.push(nv);
          ch[nv] = 1;
          DFS(nv);
          ch[nv] = 0;
          path.pop();
        }
      }
    }
  }
  ch[1] = 1;
  path.push(1);
  DFS(1);
  return answer;
}

let arr1 = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];
console.log(solution1(5, arr));
