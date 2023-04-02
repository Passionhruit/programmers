function solution(before, after) {
    var array = before.split("");
    var array2 = after.split("");
    for(i=0; i<array.length; i++) {
        for(j=0; j<array2.length; j++) {
            if(array[i] == array2[j]) {
                array.splice(i,1)
                array2.splice(j,1)
                i = i - 1
            }
        }
    } return array.length == 0 ? 1 : 0
}