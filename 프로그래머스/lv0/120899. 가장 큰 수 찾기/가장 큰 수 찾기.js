function solution(array) {
    var copy = [...array].sort((a, b) => b - a)
    
    for (i = 0; i < array.length; i++) {
        if (array[i] == copy[0]) {
            return [array[i], i]
        }
    } 
}