function solution(a, d, included) {
    var sum = 0;
    for(i = 0; i < included.length; i++) {
       included[i] ? sum +=  a + d * i : a
    } return sum
}