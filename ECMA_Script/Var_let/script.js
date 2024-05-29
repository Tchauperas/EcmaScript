//3 escopos: global, função, bloco.
/*
var serie = 'B99'

function x() {

    var serie = 'GOT'
    console.log(serie)

    if(true) {
        var serie = 'Peaky Blinders'
        console.log(serie)
    }
}

x()

if(true) {
    console.log(serie)
}
*/

var serie = 'B99'

if(true) {
    let serie = 'GOT'
    console.log(serie)
}

console.log(serie)