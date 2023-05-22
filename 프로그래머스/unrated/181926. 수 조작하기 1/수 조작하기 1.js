function solution(n, control) {
    const word = {
        "w": +1,
        "s": -1,
        "d": +10,
        "a": -10,
    }
    for(i = 0; i < control.length; i++) {
        n = n + word[control[i]]
    } return n
    
}