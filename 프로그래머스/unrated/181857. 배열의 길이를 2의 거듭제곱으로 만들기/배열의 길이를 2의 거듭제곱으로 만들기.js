function solution(arr) {
    for(i = 0; i < 100; i++) {
        if(2**i >= arr.length) {
            var a = 2**i - arr.length
            break;
        }
    }
    for(i = 0; i < a; i++) {
        arr.push(0)
    }
    return arr
}