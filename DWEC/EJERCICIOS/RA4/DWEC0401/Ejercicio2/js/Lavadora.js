function Lavadora() {
    Electrodomestico.call(this);
    this._capacidad = 1;
    this._bajoConsumo = false;
    this._tipoCarga = 0;
    this._tiposCargaArr = ["Indefinida", "Lateral", "Superior"];

}



Object.defineProperties(Lavadora.prototype,

    "Capacidad", {

    get: function () {
        return this._capacidad;
    },

    set: function (capacidad) {
        if (esEntero(capacidad) && capacidad >= 1) {


            this._capacidad = valor;

        }

    }
},
    "BajoConsumo", {

    get: function () {
        return this._bajoConsumo;
    },


    set: function (valor) {
        this._bajoConsumo = valor;
    }


},


    "TipoCarga", {


    get: function () {

        return this._bajoConsumo;


    },

    set: function (tipo) {

        if (tipo < 0 || tipo > 2) {

            this._tipoCarga = 0;

        } else {
            this._tipoCarga = tipo;
        }


    }


},

    "TipoCargaTexto", {


    get: function () {
        return this._tiposCargaArr[this._tipoCarga];
    }
}




)

Lavadora.prototype.toString = function () {

    return Electrodomestico.prototype.toString.call(this) + `${this._capacidad};${this._bajoConsumo}; ${this._tipoCarga};`
};

Lavadora.prototype.calcularConsumo = function (horas) {

    let resultado = consumo;

    let consumo = Electrodomestico.prototype.calcularConsumo.call(this, horas);

    if (this._bajoConsumo) {
        resultado / 2;

    }

    return resultado;

}










