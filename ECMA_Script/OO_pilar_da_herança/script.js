class Animal {
    constructor() {
        this.cor = ''
        this.tamanho = null
        this.peso = null
    }

    dormir() {
        console.log('Dormir')
    }
}

class Cachorro extends Animal {
    constructor() {
        super()
        this.orelhas = 'Grandes e caídas'
    }

    correr() {
        console.log('correr')
    } 

    rosnar() {
        console.log('rosnar')
    }
}

class Passaro extends Animal {
    constructor() {
        super()
        this.bico = 'Afiado e curvado'
    }

    voar() {
        console.log('voar')
    }
}

class Papagaio extends Passaro {
    constructor() {
        super()
        this.sabeFalar = true
    }

    falar() {
        console.log('Sabe falar')
    }
}

class Lobo extends Cachorro {
    constructor() {
        super()
        this.ePidao = true
    }

    pedir() {
        console.log('Mim dê')
    }
}

let cachorro = new Cachorro()
let passaro = new Passaro()
let papagaio = new Papagaio()
let lobo = new Lobo()

cachorro.dormir()
passaro.dormir()
papagaio.voar()
papagaio.falar()
lobo.rosnar()
lobo.pedir()
lobo.correr()
lobo.dormir()