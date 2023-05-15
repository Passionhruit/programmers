const solution = (str) => {
    return str.split("x").map(v => v.length)
}

/*
function solution(myString) {
    var answer = [];
    var sum = 0;
    for(i = 0; i < myString.length; i++) {
        if(myString[i] !== "x") {
            sum = sum + 1
        }else {
            answer.push(sum)
            sum = 0;
        }
    } 
    answer.push(sum)
    return answer
}
*/