function solution(myString) {
    return [...myString].map(value => ["a","A"].includes(value) ? "A" : value.toLowerCase()).join("")
}