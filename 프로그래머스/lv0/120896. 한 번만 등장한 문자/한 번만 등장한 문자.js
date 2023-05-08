function solution(s) {
    var array = s.split("");
    var answer = [];
    
    for (i = 0; i < array.length; i ++) {
        if (array.filter(element => element === array[i]).length == 1) {
            answer.push(array[i])
        }
    } return answer.sort().join("")  
}