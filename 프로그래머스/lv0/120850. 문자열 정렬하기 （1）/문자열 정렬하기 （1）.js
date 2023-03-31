function solution(my_string) {
    var array = my_string.split("")
    var newarray = []
    for (i = 0; i < array.length ; i++) {
        if(array[i]/1 == array[i]) {
            newarray.push(parseInt(array[i]))
        }
    } return newarray.sort((a,b) => a - b);
}