function solution(id_pw, db) {
    let answer = []
    for(i=0; i<db.length; i++) {
        if(db[i][0] == id_pw[0] && db[i][1] == id_pw[1]) {
            answer.push(1)
        }else if(db[i][0] == id_pw[0] && db[i][1] !== id_pw[1]) {
            answer.push(2)
        }else {
            answer.push(3)
        }
    } return answer.includes(1) ? "login" : answer.includes(2) ? "wrong pw" : "fail"
}