let aFactory = function(cor, modelo) {
    return{
        cor,
        modelo,
        levantarVoo() {
            console.log('O avião levantou voo.')
        }
    }
} 

let a1 = aFactory('Branco', 'Airbus a380')

let AviaoF = function() {
    this.cor = 'Azul',
    this.modelo = 'Oq crashou as twin towers',
    this.levantarVoo = function() {
        console.log('Levantar voo.')
    }
}

let a2 = new AviaoF

class AviaoC {
    constructor() {
        this.cor = 'Vermelho',
        this.modelo = 'Embraer E-jets'
    }

    levantarVoo() {
        console.log('Levantar voo.')
    }
}

let a3 = new AviaoC

console.log(a1)
console.log(a2)
console.log(a3)