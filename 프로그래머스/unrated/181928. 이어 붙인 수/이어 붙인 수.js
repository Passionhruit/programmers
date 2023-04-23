function solution(num_list) {
    var odd = '';
    var even = '';
    num_list.forEach((a) => {
        a % 2 == 1 ? odd += a : even += a
    })
    return odd*1 + even*1;
}