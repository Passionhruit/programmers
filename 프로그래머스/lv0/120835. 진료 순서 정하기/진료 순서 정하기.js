function solution(emergency) {
    let answer = []
    let array = [...emergency].sort((a,b) => b - a)
    return emergency.map(v=>array.indexOf(v)+1);
}