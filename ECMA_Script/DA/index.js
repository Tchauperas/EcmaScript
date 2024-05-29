let frutas = ['Abacaxi', 'uva', 'mamão', 'limão']

//let [ a, b, , c] = frutas

//let [a, b = 'abacate', c, d, e = 'banana'] = frutas

//console.log(a, b, c, d, e)
let coisas = [['José', 'Maria'], ['Abacaxi', 'uva', 'mamão', 'limão']]
let [[,b],[,,a]] = coisas 

console.log(b, a)