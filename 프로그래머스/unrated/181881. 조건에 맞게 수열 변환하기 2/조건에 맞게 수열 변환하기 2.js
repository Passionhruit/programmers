function solution(arr) {
    for(i = 0; i < 1000; i ++) {
    var arr2 = arr;
    arr = arr.map((v) => v>=50 && v%2 === 0 ? v/2 : v<50 && v%2 === 1 ? v*2+1 : v)
        if(arr.join("") === arr2.join("")) {
            return i
        }
    } 
}