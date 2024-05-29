/*let quadrado = function(x) {
    return x * x
}*/

/*let quadrado  = (x) => {
    return x * x
}*/

//let quadrado = x => x * x //return implicito

//document.write(quadrado(3))

/*let parOuImpar = function(numero) {
    if(numero % 2 === 0){
        return 'Par'
    } else {
        return 'Impar'
    }
}*/

/*let parOuImpar = numero => {
    if(numero % 2 === 0){
        return 'Par'
    } else {
        return 'Impar'
    }
}*/

let parOuImpar = numero => numero % 2 === 0 ? 'par' : 'impar' 

document.write(parOuImpar(3))