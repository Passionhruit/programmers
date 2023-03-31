function solution(arr) {
    var new_array = [...arr];
    new_array.sort((a,b) => a - b) 
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == new_array[0]) {
            arr.splice(i,1);
            return arr.length !== 1 ? arr : [-1]
        } 
    }
}