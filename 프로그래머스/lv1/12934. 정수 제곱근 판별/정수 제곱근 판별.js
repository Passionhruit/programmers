function solution(n) {
    for (i = 1; i <= n; i ++) {
        if (Math.sqrt(n) == i) {
            return Math.pow(i+1, 2)
        }     
    } return -1;
}