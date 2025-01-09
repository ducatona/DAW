//Author: Adrián Peña Carnero 16/12/2024 
class Dispositivo {
    constructor(id, autonomia, carga) {
        this._id = id || "NOID";
        this._autonomia = autonomia || 0;
        this._carga = carga || 0;
    }
    toString() {
        return `DISP: ${this._id}; ${this._autonomia}; ${this._carga};`;
    }
    verificarID(id) {
        return typeof id === "string" && id.length >= 10;
    }
    horasRestantes(uso) {

        return (uso * this._autonomia * this._carga) / 100;


    }
}

Object.defineProperties(Dispositivo.prototype, {
    "id": {
        get: function () {
            return this._id;
        },
        set: function (id) {
            if (this.verificarID(id)) {
                this._id = id.toUpperCase();
            }
        }
    },
    "autonomia": {
        get: function () {
            return this._autonomia;
        },
        set: function (autonomia) {
            this._autonomia = autonomia;

        }
    },
    "carga": {
        get: function () {
            return this._carga;
        },
        set: function (carga) {
            if (esEntero(carga) && carga >= 0 && carga <= 100) {
                this._carga = carga;
            }
        }
    }
});




//Herramientas

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