let assinatura = {
    idCliente: 1000,
    descricao: 'acesso à internet',
    status() {
        console.log('Ativo')
    }
}

console.log(assinatura.descricao)
console.log(assinatura.idCliente)
assinatura.status()

let y = assinatura

console.log(y.descricao)

//-------------------------------

y.descricao = 'Internet + Tv + Telefone'

console.log(assinatura.descricao)
console.log(y.descricao)