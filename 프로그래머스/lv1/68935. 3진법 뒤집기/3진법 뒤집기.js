function solution(n) {
    var three = n.toString(3);
    var rev = three.split("").reverse().join("");
    return parseInt(rev,3)
}