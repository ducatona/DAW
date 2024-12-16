function Electrodomestico() {
    this._id = "NOID";
    this._modelo = "NOMOD";
    this._consumo = 1;
}


//Setters y Getters


Object.defineProperty(Electrodomestico.prototype, "ID", {


    get: function () {
        return this._id;
    },
    set: function (id) {
        if (this.verificarID(id)) {
            this._id = id.toUpperCase();
        }


    }
});



Object.defineProperty(Electrodomestico.prototype, "Modelo", {

    get: function () {
        return this._modelo;
    },

    set: function (modelo) {
        if (modelo.length >= 6) {
            this._modelo = modelo.toUpperCase();
        }

    }



});



Object.defineProperty(Electrodomestico.prototype, "Consumo", {

    get: function () {
        return this._consumo;
    },

    set: function (consumo) {

        if (esEntero(consumo) && consumo >= 1) {
            this._consumo = consumo;

        }



    }

});



//METODOS


Electrodomestico.prototype.toString = function () {

    return `ELEC: ${this._id};${this._modelo};${this._consumo};`

};

Electrodomestico.prototype.verificarID = function (id) {

    return id.startsWith("ELEC - ") && id.length >= 10 && id.length <= 20;

};

Electrodomestico.prototype.calcularConsumo = function (horas) {

    let resultado = -1;

    if (typeof horas === 'number' && horas >= 0) {
        resultado = this._consumo * horas;
    }
    return resultado;
};



/**
 * esEntero
 * Función que comprueba si el string recibido como entrada es un número entero o no, devolviendo true o false
 * @param number
 * @returns {boolean}
 */
function esEntero(number) {
    let resultado = false;
    if (number % 1 === 0) {
        resultado = true;
    }
    return resultado;
}