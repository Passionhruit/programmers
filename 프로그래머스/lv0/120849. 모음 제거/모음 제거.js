function solution(my_string) {
    let vowel = ["a","e","i","o","u"]
    
    return [...my_string].filter((v) => !vowel.includes(v)).join("")
}