// 4. 이진트리_BFS
function BFS() {
  let answer = ''; // BFS 결과를 저장할 변수
  let queue = []; // BFS에서 사용할 큐
  queue.push(1); // 초기값으로 루트 노드인 1을 큐에 삽입

  // 큐가 비어있을 때까지 반복
  while (queue.length) {
    console.log(queue);

    let v = queue.shift(); // 큐에서 첫 번째 원소를 추출하여 v에 할당
    answer += v + ' '; // 결과에 현재 노드 값을 추가

    // 현재 노드의 자식 노드들을 큐에 삽입
    for (let nv of [v * 2, v * 2 + 1]) {
      // nv는 현재 노드의 자식 노드(v의 왼쪽 자식: v * 2, 오른쪽 자식: v * 2 +1)
      if (nv > 7) continue; // 트리의 노드 수가 7이므로 7보다 큰 경우 무시
      queue.push(nv);
    }
  }

  return answer; // BFS 결과 반환
}

console.log(BFS());

// 5_1. 송아지찾기
function solution(s, e) {
  let answer = 0;
  let ch = Array.from({ length: 10001 }, () => 0); // 방문 여부를 체크하는 배열
  let dis = Array.from({ length: 10001 }, () => 0); // 출발 지점부터의 이동 거리를 저장하는 배열
  let queue = [];
  queue.push(s); // 초기값으로 출발 지점을 큐에 삽입
  ch[s] = 1; // 출발 지점을 방문했음을 표시
  dis[s] = 0; // 출발 지점까지의 이동 거리는 0

  while (queue.length) {
    let x = queue.shift(); // 큐에서 현재 위치를 추출

    // 현재 위치에서 이동 가능한 다음 위치들을 확인
    for (let nx of [x - 1, x + 1, x + 5]) {
      // 다음 위치가 목표 지점인 경우, 최소 이동 횟수를 반환
      if (nx === e) return dis[x] + 1;

      // 다음 위치가 유효하고 아직 방문하지 않은 경우
      if (nx > 0 && nx <= 10000 && ch[nx] === 0) {
        ch[nx] = 1; // 다음 위치를 방문했음을 표시
        queue.push(nx); // 큐에 다음 위치를 삽입
        dis[nx] = dis[x] + 1; // 출발 지점으로부터의 이동 거리를 갱신
      }
    }
  }

  return answer;
}

console.log(solution(8, 3));

// 5_2. 송아지찾기_레벨사용
// 각 레벨에서의 이동 횟수 탐색 가능
function solution1(s, e) {
  let answer = 0;
  let ch = Array.from({ length: 10001 }, () => 0);
  let queue = [];
  queue.push(s);
  ch[s] = 1;
  let L = 0; // 레벨을 나타내는 변수

  while (queue.length) {
    let len = queue.length;

    // 현재 레벨의 노드들에 대해 탐색
    for (let i = 0; i < len; i++) {
      let x = queue.shift();

      // 현재 노드에서 이동 가능한 다음 위치들을 확인
      for (let nx of [x - 1, x + 1, x + 5]) {
        if (nx === e) return L + 1; // 목표 지점에 도달하면 레벨을 반환
        if (nx > 0 && nx <= 10000 && ch[nx] === 0) {
          ch[nx] = 1;
          queue.push(nx);
        }
      }
    }
    L++; // 다음 레벨로 이동
  }

  return answer;
}

console.log(solution1(5, 14));
