function solution(strings, n) {
    
    for(i = 0; i < strings.length; i++) {
        strings[i] = strings[i][n] + strings[i]
    } 
    var answer = strings.sort();
    
    for(i = 0; i < answer.length; i++) {
        answer[i] = answer[i].substring(1);
    } return answer
}