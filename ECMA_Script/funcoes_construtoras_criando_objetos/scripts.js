let Carro = function() {
    this.cor = 'Amarelho'
    this.modelo = 'Gol'
    this.velocidadeAtual = 0
    this.velocidadeMaxima = 250
    this.acelerar = function() {
        //this.velocidadeAtual += 10

        let velocidade = this.getVelocidadeAtual() + 10
        this.setVelocidadeAtual(velocidade)
    }
    this.getVelocidadeAtual = function() {
        return this.velocidadeAtual
    }
    this.setVelocidadeAtual = function(velocidadeAtual) {
        this.velocidadeAtual = velocidadeAtual
    }
}

let carro = new Carro()

console.log(`A velocodade atual é: ${carro.getVelocidadeAtual()}`)
carro.acelerar()
console.log(`A velocodade atual é: ${carro.getVelocidadeAtual()}`)