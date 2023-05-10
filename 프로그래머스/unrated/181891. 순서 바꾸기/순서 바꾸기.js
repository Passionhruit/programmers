function solution(num_list, n) {
    var answer = []
    for(i = n; i < num_list.length; i++) {
        answer.push(num_list[i])
    }
    for(i = 0; i < n; i++) {
        answer.push(num_list[i])
    } 
    return answer
}