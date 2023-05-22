function solution(n) {
    var last = n[n.length-1]
    var secLast = n[n.length-2]
    last > secLast ? n.push(last-secLast) : n.push(last*2)
    return n
}