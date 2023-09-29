function solution(num_list) {
    let even = num_list.filter((v) => v % 2 === 0).length
    let odd = num_list.length - even
    return [even,odd]
}

