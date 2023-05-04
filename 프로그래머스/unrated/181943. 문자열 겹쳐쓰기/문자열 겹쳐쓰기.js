/*
function solution(str, over, s) {
   return str.replace(str.slice(s,over.length+s),over)
}
*/

function solution(str, over, s) {
   return str.slice(0,s)+over+str.slice(s+over.length,str.length)
}
