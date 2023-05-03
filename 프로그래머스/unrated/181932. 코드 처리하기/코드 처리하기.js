function solution(code) {
    var mode = 0;
    var answer = []
    for(i = 0; i < code.length; i++) {
        if(mode == 0 && code[i] == "1") {
            mode = 1;
        }else if(mode == 1 && code[i] == "1") {
            mode = 0;
        }else if(mode == 0 && code[i] !== "1") {
            i % 2 == 0 ? answer.push(code[i]) : answer;
        }else if(mode == 1 && code[i] !== "1") {
            i % 2 == 1 ? answer.push(code[i]) : answer;
        }
    } return answer.length !== 0 ? answer.join("") : "EMPTY"
}