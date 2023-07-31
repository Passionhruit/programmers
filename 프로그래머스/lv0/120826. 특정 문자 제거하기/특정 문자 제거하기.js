function solution(my_string, letter) {
    var array = my_string.split("");
    for (i = 0; i < array.length; i++) {
        if(array[i] === letter) {
            array.splice(i,1) 
            i = i - 1;
        }
    }return array.join('')
}