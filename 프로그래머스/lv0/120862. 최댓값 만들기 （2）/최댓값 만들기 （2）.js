function solution(numbers) {
    numbers.sort((a, b) => b - a);
    var max1 = numbers[0] * numbers[1]
    var max2 = numbers[numbers.length-1] * numbers[numbers.length-2]
        if (max1 > max2) {
            return max1
        } else {
            return max2
        }
    
}