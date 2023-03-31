function solution(n) {
    var sum = '';
    for (i = 1; i <= n; i ++) {
        if (i % 2 == 1) {
            sum = sum + "수"
        } else {
            sum = sum + "박"
        }
    } return sum
}