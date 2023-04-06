function solution(array, n) {
    var answer = [];
    array.sort((a,b) => a - b);
    for(i = 0; i < array.length; i ++) {
        if(array[i] >= n) {
            answer.push(array[i] - n)
        } else {
            answer.push(n - array[i])
        }
    } var sorted = [...answer].sort((a,b) => a - b)
    for (i = 0; i < answer.length; i ++) {
        if(sorted[0] == answer[i]) {
            return array[i]
        }
    }
}