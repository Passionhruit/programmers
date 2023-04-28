function solution(n) {
    var answer = [];
    for(i = 1; i < 1000; i++) {
        answer.push(n)
        if(n % 2 == 0) {
            n = n/2
        }else if(n == 1) {
            break;
        }else{
            n = 3 * n + 1
        }
    } return answer;
}