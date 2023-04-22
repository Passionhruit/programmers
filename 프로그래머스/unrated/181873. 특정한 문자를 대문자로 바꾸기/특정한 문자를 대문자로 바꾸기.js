function solution(my_string, alp) {
    var array = my_string.split("")
    for(i = 0; i < array.length; i++) {
        if(array[i] == alp) {
            array[i] = alp.toUpperCase();
        }
    } return array.join("")
}