//contexto spread
let tituloArtigo = 'Como utilizar o operador rest/spread'

console.log(tituloArtigo)
console.log(...tituloArtigo)
console.log([...tituloArtigo])

//arrays
let listaCursos1 = Array()
listaCursos1[0] = 'NodeJS e MongoDB'
listaCursos1[1] = 'ES6, TS, Angular 4'

let listaCursos2 = Array()
listaCursos2[0] = 'Multiplataforma Android/IOS'
listaCursos2[1] = 'Introdução ao GNU/Linux'

let listaCursosCompleto = ['Web Completo', 'Androide Completo', ...listaCursos1, ...listaCursos2]

console.log(listaCursosCompleto)

let pessoa = { nome: 'João', idade: 27 }
let clone = { endereco: 'Rua abc', ...pessoa}

console.log(clone)