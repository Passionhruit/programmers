function solution(n) {
    let sum = 0;
    for(i=0; i <n; i++) {
        if(n%i==0) {
            sum = sum + 1
        }
    } return sum + 1
}