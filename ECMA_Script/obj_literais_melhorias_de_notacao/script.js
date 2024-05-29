let nome = 'Poggers'  //document.getElementById('nome').value
let idade = 17
let sexo = 'Masculino'
let profissao = 'dev'

let objeto = {
    nome: nome,
    idade: idade,
    sexo: sexo,
    profissao: profissao,
    exibirResumo: function() {
        console.log(`${this.nome}, ${this.idade} anos, ${this.sexo}, ${this.profissao}`)
    }
}

console.log(objeto)
objeto.exibirResumo()

let objeto2 = {
    nome,
    idade,
    sexo,
    profissao,
    exibirResumo() {
        console.log(`${this.nome}, ${this.idade} anos, ${this.sexo}, ${this.profissao}`)
    }
}

console.log(objeto2)
objeto2.exibirResumo()