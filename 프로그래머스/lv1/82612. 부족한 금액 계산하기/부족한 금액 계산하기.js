function solution(price, money, count) {
    var num = 0;
    for (i = 1; i <= count; i++) {
        num = num + price * i
    } return money > num ? 0 : num - money;
}