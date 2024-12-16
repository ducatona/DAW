

function crearElectrodomestico(id,modelo,consumo) {
   let electrodomestico = {

    
        _id : id,
        _modelo :modelo,
        _consumo : consumo







    }

    Object.defineProperties(electrodomestico,{





    })


}



// Crear 10 objetos aleatorios de electrodomésticos
let electrodomesticos = [];
let marcas = ['Samsung', 'LG', 'Sony', 'Panasonic', 'Bosch'];
let  modelos = ['X1000', 'A2000', 'Z3000', 'B4000', 'Y5000'];
let colores = ['Blanco', 'Negro', 'Plata', 'Rojo', 'Azul'];

for (let i = 0; i < 10; i++) {
    const marca = marcas[Math.floor(Math.random() * marcas.length)];
    const modelo = modelos[Math.floor(Math.random() * modelos.length)];
    const precio = Math.floor(Math.random() * 1000) + 100; // Precio entre 100 y 1000
    const color = colores[Math.floor(Math.random() * colores.length)];

    const electrodomestico = crearElectrodomestico(marca, modelo, precio, color);
    electrodomesticos.push(electrodomestico);
}

// Mostrar los electrodomésticos creados
console.log(electrodomesticos);