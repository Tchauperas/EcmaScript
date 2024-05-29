let Bicicleta1 = {
    cor: 'Branca',
    marcha: 'unica',
    aro: 12,
    pedalar() {
        console.log('Método pedalar executado')
    }
}

let Bicicleta2 = {
    cor: 'Vermelha',
    marcha: 5,
    aro: 22,
    pedalar() {
        console.log('Método pedalar executado')
    }
}

console.log(Bicicleta1)
console.log(Bicicleta2)

let BicicletaFactory = function(cor, marcha, aro) {
    return {
        cor,
        marcha,
        aro,
        pedalar() {
            console.log('Método pedalar executado')
        }
    }
}

let Bicicleta3 = BicicletaFactory('Vermelha', 8, 26)
let Bicicleta4 = BicicletaFactory()

console.log(Bicicleta3)
console.log(Bicicleta3.cor)
Bicicleta3.pedalar()
