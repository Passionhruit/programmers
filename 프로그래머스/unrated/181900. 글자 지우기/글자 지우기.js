function solution(my_string, indices) {
    var arr = my_string.split("")
    for(i = 0; i < arr.length; i++) {
        for(j = 0; j < indices.length; j++) {
            if(i == indices[j]) {
                arr[i] = ""
            }
        }
    } return arr.join("")
}