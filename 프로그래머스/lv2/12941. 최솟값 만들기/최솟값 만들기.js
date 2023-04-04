function solution(A,B){
    var sum = 0;
    var array = [];
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);
    
    for (i = 0; i < A.length; i++) {
        array.push(A[i]*B[i])
    }
    
    for (i = 0; i < array.length; i++) {
        sum = sum + array[i]
    } return sum;
}