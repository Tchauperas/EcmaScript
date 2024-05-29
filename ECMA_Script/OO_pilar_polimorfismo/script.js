class Animal {
    constructor(cor, tamanho, peso) {
        this.cor = cor
        this.tamanho = tamanho
        this.peso = peso
    }

    dormir() {
        console.log('Dormir')
    }
}

class Passaro extends Animal {
    constructor(bico, cor, tamanho, peso) {
        super(cor, tamanho, peso)
        this.bico = bico
    }

    voar() {
        console.log('voar')
    }
}

class Papagaio extends Passaro {
    constructor(sabeFalar, cor, tamanho, peso) {
        super('Médio', cor, tamanho, peso)
        this.sabeFalar = sabeFalar
    }

    falar() {
        console.log('Sabe falar')
    }
}

class Avestruz extends Passaro {
    constructor() {
        super('Curto e largo', 'Cinza e preto', 180, 50)
    }

    enterrarCabeca() {
        console.log('Enterrar a cabeça.')
    }

    voar() {
        console.log('Não sabe voar.')
    }
}

let papagaio = new Papagaio(true, 'Verde', 10, 2)
console.log(papagaio)

papagaio.voar()

let avestruz = new Avestruz()
console.log(avestruz)

avestruz.voar()
avestruz.enterrarCabeca()