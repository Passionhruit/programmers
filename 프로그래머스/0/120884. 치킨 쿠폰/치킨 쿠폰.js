function solution(chicken) {
    let coupons = chicken;
    let totalServices = 0;
    
    while(coupons >= 10) {
        let service = Math.floor(coupons / 10);
        totalServices += service;
        coupons = coupons % 10 + service
    }
    return totalServices;
}