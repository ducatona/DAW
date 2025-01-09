// Author: Adrián Peña Carnero 16/12/2024

let vehiculos = [
    { tipo: "Lancha", marca: "Regina", modelo: "La que no", matricula: "2659SQB", kilometros: 69400 },
    { tipo: "Moto", marca: "Yamaha", modelo: "CALIDAD", matricula: "1991MWS", kilometros: 2000 },
    { tipo: "Camión", marca: "Volvo", modelo: "BUENO", matricula: "2003APC", kilometros: 10000 },
    { tipo: "Coche", marca: "Toyota", modelo: "AYGO", matricula: "7210MPZ", kilometros: 12000 }
];


function ordenarPorKm(collection) {
    return collection.sort((a, b) => a.kilometros - b.kilometros);
}


function ordenarPorModeloAsc(collection) {
    return collection.sort((a, b) => a.modelo.localeCompare(b.modelo));
}


function imprimirVehiculos(collection) {
    for (let i in collection) {
        let vehiculo = collection[i];
        console.log(`${vehiculo.tipo}; ${vehiculo.marca}; ${vehiculo.modelo}; ${vehiculo.matricula}; ${vehiculo.kilometros};`);
    }
}


console.log("Vehículos ordenados por kilómetros:");
let vehiculosPorKm = ordenarPorKm([...vehiculos]);
imprimirVehiculos(vehiculosPorKm);


console.log("\nVehículos ordenados por modelo:");
let vehiculosPorModelo = ordenarPorModeloAsc([...vehiculos]);
imprimirVehiculos(vehiculosPorModelo);
