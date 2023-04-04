function solution(n) {
    var sum = 0;
    var array = []
    for(i = 1; i <= n; i++) {
        for(j = 2; j < i; j++) {
            if(i%j == 0) {
                array.push(i)
            }
        }
    } return [... new Set(array)].length;
}