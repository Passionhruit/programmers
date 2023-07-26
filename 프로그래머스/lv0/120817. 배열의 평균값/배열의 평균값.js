function solution(numbers) {
    var sum = 0;
    numbers.map((v) => {
        sum = sum + v
    })
    return sum/numbers.length;
}