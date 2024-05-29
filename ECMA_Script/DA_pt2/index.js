let produto = {
    descricao: 'Notebook',
    preco: 1800,
    detalhes: {
        fabricante: 'abc',
        modelo: 'xyz'
    }
}

//let { descricao: d, preco: p, desconto: ds = '50%' } = produto
//console.log(d, p, ds)

let {detalhes: {fabricante, modelo}} = produto
console.log(fabricante, modelo)