function solution(str_list, ex) {
    var answer = []
    str_list.forEach((a) => {
        !a.includes(ex) ? answer.push(a) : a
    })
    return answer.join("")
}