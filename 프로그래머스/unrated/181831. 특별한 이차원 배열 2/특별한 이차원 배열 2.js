function solution(arr) {
    var answer = []
    for(i = 0; i < arr.length; i++) {
        for(j = 0; j < arr[i].length; j++) {
            arr[i][j] == arr[j][i] ? answer.push(i) : 0
        }
    } return answer.length == arr.length*arr.length ? 1 : 0
}