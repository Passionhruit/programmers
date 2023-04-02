function solution(numbers) {
    var array = [];
    for (i = 0; i < numbers.length; i++) {
        for (j = i + 1; j < numbers.length; j++) {
            array.push(numbers[j] + numbers[i])
        } 
    } const result = [...new Set(array)];
    return result.sort((a, b) => a - b);
}