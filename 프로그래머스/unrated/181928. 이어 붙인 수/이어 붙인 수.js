function solution(num_list) {
    var odd = '';
    var even = '';
    num_list.forEach((a) => {
        a % 2 == 0 ? even+= a : odd+= a
    })
    return +even + +odd
}