function solution(s) {
    var array = s.split("")
    var answer = [];
    
    for(i = 0; i < array.length; i++) {
        if (array[i-1] == " " || i == 0) {
            answer.push(array[i].toUpperCase());
        } else {
            answer.push(array[i].toLowerCase());
        }
    } return answer.join("")
}