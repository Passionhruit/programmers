function solution(key, board) {
    let init = [0,0];
    let limit = [Math.floor(board[0]/2),Math.floor(board[1]/2)]
    
    for(let i = 0; i < key.length; i++) {
     
        if(key[i] === "up") {
            init[1] !== limit[1] ? init[1] += 1 : null; 
        }else if(key[i] === "down") {
            init[1] !== -limit[1] ? init[1] -= 1 : null;
        }else if(key[i] === "left") {
            init[0] !== -limit[0] ? init[0] -= 1 : null;
        }else if(key[i] === "right"){
            init[0] !== limit[0] ? init[0] += 1 : null;
        }
    }
    return init;
}