function solution(myString, pat) {
    var answer = 0;
    for(i = 0; i < myString.length; i++) {
        myString.substr(i,pat.length) === pat ? answer = answer + 1 : null
    } return answer
}