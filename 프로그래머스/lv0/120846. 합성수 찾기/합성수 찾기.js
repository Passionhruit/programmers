function solution(n) {
    var sum = 0;
    for (i = 4; i <= n; i ++) {
        for (j = 2; j < i; j ++) {
            if(i % j == 0) {
                sum = sum + 1;
                break
            }
        }
    } return sum;
}