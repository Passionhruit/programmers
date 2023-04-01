function solution(s) {
    var array = s.split("");
    
    for (i = 0; i < array.length; i++) {
        if (array.length % 2 == 1) {
            return array.splice(((array.length-1)/2),1).join("")
        }else {
            return array.splice(array.length/2-1,2).join("")
        }
    }
}