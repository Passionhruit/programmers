function solution(d, budget) {
    var sum = 0;
    d.sort((a,b) => a - b)
    for (i = 0; i < d.length; i++) {
        sum = sum + d[i]
        if (budget - sum == 0) {
            return i + 1
        }else if (budget - sum < 0) {
            return i
        }
    } return i
}