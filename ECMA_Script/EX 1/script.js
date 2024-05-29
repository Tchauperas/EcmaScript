class Sofas {
    constructor(qtde_lugares, reclinavel, cor) {
        this.qtde_lugares = qtde_lugares
        this.reclinavel = reclinavel
        this.cor = cor
    }

    reclinar() {
        if(this.reclinavel === true) {
            console.log('É reclinável')
        } else {
            console.log('Não é reclinável')
        }
    }
}

let sofa = new Sofas(5, false, 'Amarelo')
let sofa_2 = new Sofas(1, true, 'Vermelho')

sofa.reclinar()
sofa_2.reclinar()