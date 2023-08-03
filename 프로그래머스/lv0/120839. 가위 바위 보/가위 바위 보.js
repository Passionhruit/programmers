function solution(rsp) {
    return rsp.split("").map((v) =>
        v === "2" ? v = 0 : v === "0" ? v = "5" : v === "5"? v = "2" : false).join("")
}