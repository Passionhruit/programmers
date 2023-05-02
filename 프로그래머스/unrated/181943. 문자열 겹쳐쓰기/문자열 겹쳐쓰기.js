function solution(str, over, s) {
   return str.slice(0,s)+over+str.slice(s+over.length,str.length)
}