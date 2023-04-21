function solution(numbers, n) {
    var sum = 0;
    for(i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i]
        if(sum > n) {
            return sum
        }
    }
}