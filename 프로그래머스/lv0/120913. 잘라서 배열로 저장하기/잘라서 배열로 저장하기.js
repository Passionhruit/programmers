function solution(my_str, n) {
    var array = my_str.split("");
    var answer = []
    
    for (i = 0; i < array.length; i++) {
        answer.push(array.splice(i,n).join(""))
        i = i - 1;
    } return answer;
}