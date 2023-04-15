function solution(my_string) {
    var array = my_string.split(" ");
    var answer = 0;
    
    for(i = 0; i < array.length; i++) {
        if(array[i] == "-") {
            answer = answer - 2*array[i+1]
        }else if(array[i] !== "+") {
            answer = answer + 1*array[i]
        }
    } return answer;
}