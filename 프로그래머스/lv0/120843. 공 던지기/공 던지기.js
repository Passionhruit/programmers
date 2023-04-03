function solution(numbers, k) {
    if ((1 + 2 * (k-1)) % numbers.length == 0) {
        return numbers[numbers.length-1]
    } else {
        return (1 + 2 * (k-1)) % numbers.length 
    }
}