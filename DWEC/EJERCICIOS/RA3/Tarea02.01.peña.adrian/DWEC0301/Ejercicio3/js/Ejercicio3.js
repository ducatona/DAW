// Fecha de inicio de vacaciones - he modificado el año a 2025 ya que el que proponias en el ejercicio era del año pasado.
const fechaFin = new Date('2025-06-25T00:00:00');

/**
 * 
 * @param {*} fecha 
 * @returns retpmalas horas minutos y segundos en formato de dos digitos .
 */
function formateaHora(fecha) {
    let horas = (fecha.getHours() < 10 ? '0' : '') + fecha.getHours();
    let minutos = (fecha.getMinutes() < 10 ? '0' : '') + fecha.getMinutes();
    let segundos = (fecha.getSeconds() < 10 ? '0' : '') + fecha.getSeconds();
    return `${horas}:${minutos}:${segundos}`;
}

/**
 * 
 * @param {*} fechaFin 
 * @returns obtenemos la fecha fin y en base esa fecha le restamos el tiempo de ahora en milisegundos
 */
function tiempoVacaciones(fechaFin) {
    const ahora = new Date();
    const diferencia = fechaFin - ahora; // Diferencia en milisegundos

    // Comprobar que la diferencia no es negativa
    if (diferencia < 0) return "¡Las vacaciones ya han comenzado!";
    //1 minuto = 1000  milisegundos, Math lo redondea a la baja y luego obtenemos el tiempo.
    const segundos = Math.floor((diferencia / 1000) % 60);
    const minutos = Math.floor((diferencia / 60000) % 60);
    const horas = Math.floor((diferencia / 3600000) % 24);
    const dias = Math.floor(diferencia / 86400000);
    //retornamos la fecha en el formato que nos piden
    return `${dias} días, ${horas} horas, ${minutos} minutos y ${segundos} segundos`;
}


/**
 * funcion que actualiza el contador de los relojes
 */
function actualizarRelojes() {
    //obtenemos la fecha de hot
    const ahora = new Date();
    //hora formateada de hoy
    const horaFormateada = formateaHora(ahora);
    //tiempo restantes hasta las vacaciones
    const tiempoRestante = tiempoVacaciones(fechaFin);
    
    // Actualizamos el contenido en los relojes predefinidos
    document.getElementById('divReloj').innerText = `${horaFormateada}`;
    document.getElementById('divVacaciones').innerText = tiempoRestante;
}

// le pasamos la funcion que queremos que actualice en un intervalo de tiempo. 
setInterval(actualizarRelojes, 1000);
