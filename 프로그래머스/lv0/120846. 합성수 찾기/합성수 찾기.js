
2
3
4
5
6
7
8
9
10
11
12
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