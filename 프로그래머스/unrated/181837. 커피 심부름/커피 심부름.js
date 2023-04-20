function solution(order) {
    var menu = order.join("")
    var sum = 0;
    for(i = 0; i < menu.length; i++) {
        if(menu[i] == "l") {
            sum = sum + 5000;
        }
    } return sum + (order.length - sum/5000) * 4500
}