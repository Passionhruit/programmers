function solution(sides) {
    var sum = 0;
    var num = 0;
    sides.sort((a,b) => b - a);
    
    // 큰 변이 sides[0] 인 경우, 같을경우도 포함
    for(i = 1; i <= sides[0]; i ++) {
        if(i + sides[1] > sides[0]) {
            sum = sum + 1
        }
    }
    // 큰 변이 나머지 한 변인 경우
    for(i > sides[0]; i < (sides[0] + sides[1]); i++) {
        num = num + 1
    }
    return sum + num;
}