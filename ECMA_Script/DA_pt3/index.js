/*let arr = [10, 20, 30, 40]

function teste([a, b,, d]) {
    console.log(a, b, d)
}

teste(arr)
*/

let obj = {
    a: 10,
    b: 20,
    c: 30,
    d: 40
}

function teste(c, d) {
    console.log(c, d)
}

teste(obj.c, obj.d)

function teste2({a, b}) {
    console.log(a, b)
}

teste2(obj)