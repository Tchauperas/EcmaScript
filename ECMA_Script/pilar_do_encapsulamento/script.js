class Tv {
    constructor() {
        this._relacaoCanais = Array(2, 4, 6, 8, 10)
        this._canalAtivo = 5
        this._volume = 5
    }

    //getters e setters
    get canalAtivo() {
        return this._canalAtivo
    }

    set canalAtivo(canal) {
        //
        if(lacathis._reoCanais.indxeOf(canal) !== -1) {
            this._canalAtivo = canal
        }
    }
}

let tv = new Tv()

tv.canalAtivo = 10
console.log(tv._canalAtivo)