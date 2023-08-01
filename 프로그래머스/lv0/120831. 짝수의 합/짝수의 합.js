function solution(n) {
    let sum = 0;
    for(i = 2; i <= n; i++) {
        i % 2 == 0 ? sum = sum + i : null
    } return sum
}