function solution(num_list, n) {
    var result = num_list.filter((value) => value == n)
    return result.length == 0 ? 0 : 1
} 