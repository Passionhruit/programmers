function solution(l, r) {
    var answer = [];
    var num = [1,2,3,4,6,7,8,9]
    for(i = l; i <= r; i++) {
        i % 5 == 0 ? answer.push(i) : answer
    }
    for(i = 0; i < answer.length; i++) {
        for(j = 0; j < num.length; j++) {
            if(`${answer[i]}`.includes(num[j])) {
                answer[i] = ""
            }
        } 
    } return answer.join("").length !== 0 ? answer.filter((v) => v !== "") : [-1]
}