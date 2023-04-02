function solution(age) {
    var array = ["a", "b", "c", "d", "e", "f", "g", "h","i", "j"];
    var array2 =`${age}`.split("")
    var answer = '';
    
    for (i = 0; i < array2.length; i++) {
        answer = answer + array[array2[i]]
    } return answer;
}