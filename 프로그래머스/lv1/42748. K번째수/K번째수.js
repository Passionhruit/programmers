function solution(array, commands) {
    var answer = [];
    for (i = 0; i < commands.length; i++) {
        var sliced = array.slice(commands[i][0]-1,commands[i][1])
        var sorted = sliced.sort((a,b) => a-b)
        answer.push(sorted[commands[i][2]-1])
    } return answer
}