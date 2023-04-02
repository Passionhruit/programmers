function solution(num, k) {
    var array = num.toString();
    for (i = 0; i < array.length; i++) {
        if(array[i] == k) {
            return i+1
        }
    } return -1
}