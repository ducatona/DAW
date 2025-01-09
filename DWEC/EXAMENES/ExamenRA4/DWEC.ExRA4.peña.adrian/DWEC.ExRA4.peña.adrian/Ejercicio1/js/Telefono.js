//Author: Adrián Peña Carnero 16/12/2024 
function Telefono(id, autonomia, carga, pulgadas, tipoPanel) {
    Dispositivo.call(this, id, autonomia, carga);
    this._pulgadas = pulgadas || 0;
    this._tipoPanel = tipoPanel || 0;

    Object.defineProperty(this, "_tiposPanelArr", {
        value: ["OLED", "AMOLED", "QLED", "NanoCell"],
        writable: false
    });
}

Telefono.prototype = Object.create(Dispositivo.prototype);
Telefono.prototype.constructor = Telefono;

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

Telefono.prototype.toString = function () {
    return `${Dispositivo.prototype.toString.call(this)} ${this._pulgadas}; ${this.tipoPanelTexto};`;
};

Telefono.prototype.verificarID = function (id) {
    return (
        typeof id === "string" &&
        id.startsWith("TELF - ") &&
        id.length >= 10 &&
        id.length <= 20
    );
};


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