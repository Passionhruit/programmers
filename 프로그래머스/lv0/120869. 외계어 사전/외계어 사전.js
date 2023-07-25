function solution(spell, dic) {
    for(i = 0; i < spell.length; i++) {
        dic = dic.filter((v) => v.includes(spell[i])) 
    } 
    return dic.length === 0 ? 2 : 1
}