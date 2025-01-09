//Author: Adrián Peña Carnero 16/12/2024 
class Telefono extends Dispositivo{
    constructor(id, autonomia, carga, pulgadas, tipoPanel) {
        Dispositivo.call(this, id, autonomia, carga);
        super();
        this._pulgadas = pulgadas || 0;
        this._tipoPanel = tipoPanel || 0;

        Object.defineProperty(this, "_tiposPanelArr", {
            value: ["OLED", "AMOLED", "QLED", "NanoCell"],
            writable: false
        });
    }
    toString() {
        return `${Dispositivo.prototype.toString.call(this)} ${this._pulgadas}; ${this.tipoPanelTexto};`;
    }
    verificarID(id) {
        return (
            typeof id === "string" &&
            id.startsWith("TELF - ") &&
            id.length >= 10 &&
            id.length <= 20
        );
    }
}

Telefono.prototype = Object.create(Dispositivo.prototype);
;

Object.defineProperties(Telefono.prototype, {
    "pulgadas": {
        get: function () {
            return this._pulgadas;
        },
        set: function (pulgadas) {

            this._pulgadas = pulgadas;

        }
    },
    "tipoPanel": {
        get: function () {
            return this._tipoPanel;
        },
        set: function (tipoPanel) {
            if (esEntero(tipoPanel) && tipoPanel < 0 && tipoPanel > 3) {
                this._tipoPanel = 0;
            } else {
                this._tipoPanel = tipoPanel;
            }
        }
    },
    "tipoPanelTexto": {
        get: function () {
            return this._tiposPanelArr[this._tipoPanel];
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