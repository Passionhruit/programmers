function solution(num_list, n) {
    var answer = []
    for(i = 0; i < num_list.length; i++) {
        i % n == 0 ? answer.push(num_list[i]) : answer
    } return answer;
}