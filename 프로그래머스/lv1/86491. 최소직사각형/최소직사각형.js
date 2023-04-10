function solution(sizes) {
    var array = [];
    var array2 = [];
    for(i = 0; i < sizes.length; i++) {
        if(sizes[i][0] >= sizes[i][1]) {
            array.push(sizes[i][0])
        }else{
            array.push(sizes[i][1])
        }
    }
    for(i = 0; i < sizes.length; i++) {
        if(sizes[i][0] <= sizes[i][1]) {
            array2.push(sizes[i][0])
        }else{
            array2.push(sizes[i][1])
        }
    } return Math.max(...array) * Math.max(...array2)
}