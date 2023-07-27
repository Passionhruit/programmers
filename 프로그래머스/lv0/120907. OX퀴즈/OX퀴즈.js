function solution(quiz) {
    let answer = []
    quiz = quiz.map((el)=> el.split(" = "))
    for(i = 0; i < quiz.length; i++) {
        eval(quiz[i][0]) == quiz[i][1] ? answer.push("O") : answer.push("X")
    }
    return answer
}