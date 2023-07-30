function solution(my_string, n) {
    let answer = []
    my_string.split("").map((v) => answer.push(v.repeat(n)))
    return answer.join("")
}