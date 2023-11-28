// 6_1. 섬나라 아일랜드_DFS
function solution(board) {
  let answer = 0;
  let n = board.length;
  let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  let dy = [0, 1, 1, 1, 0, -1, -1, -1];
  let queue = [];

  // 모든 좌표를 순회
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // 현재 좌표가 육지(1)라면 DFS 시작
      if (board[i][j] === 1) {
        board[i][j] = 0; // 방문한 육지를 0으로 변경
        queue.push([i, j]);
        answer++;

        // BFS를 통해 현재 육지와 연결된 모든 육지를 방문
        while (queue.length) {
          let x = queue.shift();
          for (let k = 0; k < 8; k++) {
            // 대각선 포함 8방향
            // 현재 위치 + k = 다음 위치
            let nx = x[0] + dx[k];
            let ny = x[1] + dy[k];
            // 해당 위치가 육지인지 확인
            if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 1) {
              board[nx][ny] = 0;
              queue.push([nx, ny]);
            }
          }
        }
      }
    }
  }
  return answer;
}

let arr = [
  [1, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 0],
];

console.log(solution(arr));

// 6_2. 섬나라 아일랜드_DFS
function solution1(board) {
  let answer = 0;
  let n = board.length;
  let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  let dy = [0, 1, 1, 1, 0, -1, -1, -1];

  // DFS 함수 정의
  function DFS(x, y) {
    board[x][y] = 0; // 방문한 육지를 0으로 변경
    for (let k = 0; k < 8; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];
      if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 1) {
        DFS(nx, ny);
      }
    }
  }

  // 모든 좌표를 순회
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // 현재 좌표가 육지(1)라면 DFS 시작
      if (board[i][j] === 1) {
        board[i][j] = 0; // 방문한 육지를 0으로 변경
        answer++;
        DFS(i, j); // DFS를 통해 현재 육지와 연결된 모든 육지를 방문
      }
    }
  }
  return answer;
}

let arr1 = [
  [1, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 0],
];

console.log(solution1(arr1));
