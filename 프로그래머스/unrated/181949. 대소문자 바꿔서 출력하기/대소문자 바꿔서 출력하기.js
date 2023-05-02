const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    var array = str.split("")
    console.log(array.map(v => v == v.toLowerCase() ? v.toUpperCase() : v.toLowerCase()).join(""))
    
});