function solution(s) {
    const newArr = s.split(" ")
    const numArr = newArr.map((v) => v.includes("-") ? -v.slice(1)  : +v)
    const sortedArr = numArr.sort((a,b) => a - b)
    return sortedArr[0] + " " + sortedArr[sortedArr.length-1] 
    
    
}