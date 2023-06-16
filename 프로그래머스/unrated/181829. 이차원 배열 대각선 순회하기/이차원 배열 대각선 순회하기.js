function solution(board, k) {
    var sum = 0
    for(i = 0; i < board.length; i++) {
        for(j = 0; j < board[i].length; j++) {
            if(i+j <= k) {
                sum = sum + board[i][j]
            }
        }
    } return sum
}