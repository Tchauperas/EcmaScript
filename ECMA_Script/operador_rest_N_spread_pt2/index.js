//contexto rest
function soma(...param) {
    let resultado = 0
    console.log(param)
    param.forEach(v => resultado += v)
    return resultado
}

console.log(soma(3, 8, 5, 7))

function mult(m, ...p) {
    console.log(m)
    let resultado = 0
    console.log(p)

    p.forEach(v => resultado += m * v)

    return resultado
}

console.log(mult(5, 7, 12, 49, 3))