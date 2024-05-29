//modelo da entidade/objeto
class ContaBancaria {
    //agência
    //numeroConta
    //saldo
    //limite
    constructor() {
        this.agencia = 1075
        this.numeroConta = 8351125
        this.saldo = 50
        this.limite = 450
    }

    depositar(valorDeposito) {
        this.saldo += valorDeposito
    }

    sacar(valorDeSaque) {
        this.saldo -= valorDeSaque 
    }

    consultarSaldo() {
        return this.saldo
    }
}

let x = new ContaBancaria()
let y = new ContaBancaria()

x.depositar(50)
console.log(x.consultarSaldo())
x.sacar(75)
console.log(x.consultarSaldo())