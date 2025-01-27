window.onload = principal;

function principal() {
    document.getElementById("h1Nombre").innerHTML = "Adrián Peña Carnero";

    let formulario = addElement('form', undefined, {
        id: 'formulario',
        style: 'border: 1px solid #ccc; padding: 15px; border-radius: 5px; width: 350px; margin: 20px auto;'
    });

    formulario.appendChild(addElement('input', undefined, {
        id: 'dimensiones',
        placeholder: 'Número de dimensiones',
        style: 'width: 300px; padding: 8px; margin: 5px; border: 1px solid #ccc; border-radius: 4px;'
    }));

    formulario.appendChild(addElement('input', undefined, {
        placeholder: 'Número de párrafo',
        style: 'width: 300px; padding: 8px; margin: 5px; border: 1px solid #ccc; border-radius: 4px;'
    }));

    formulario.appendChild(addElement('input', undefined, {
        placeholder: 'Número de elementos',
        style: 'width: 300px; padding: 8px; margin: 5px; border: 1px solid #ccc; border-radius: 4px;'
    }));

    let boton = addElement('button', 'Pulsame', {
        id: 'botonFormulario',
        style: 'width: 300px; padding: 8px; margin: 5px; border: 1px solid #ccc; border-radius: 4px;'
    });
    boton.addEventListener('click', ejecucionBoton);
    formulario.appendChild(boton);

    document.body.appendChild(formulario);
}
  
function ejecucionBoton(event) {
    event.preventDefault(); // Evitar envío del formulario
    let d = parseInt(document.getElementById('dimensiones').value);

    if (isNaN(d) || d <= 0) {
        alert('Introduce un número válido en el campo "dimensiones".');
        return;
    }

    // Limpiar elementos previos
    let formulario = document.getElementById('formulario');
    let primerDiv = formulario.querySelector('div[id^="div-"]');
    while (primerDiv) {
        primerDiv.remove(); // Eliminar el primer div encontrado
        primerDiv = formulario.querySelector('div[id^="div-"]'); // Buscar el siguiente
    }

    for (let i = 0; i < d; i++) {
        let div = addElement('div', `Elemento ${i + 1}`, {
            id: `div-${i}`,
            style: 'border: 1px solid red; margin: 5px; padding: 5px;'
        });
        document.getElementById('formulario').appendChild(div);



        
    }
}

function addElement(element, text, attributes) {
    let newElement = document.createElement(element);

    if (text !== undefined) {
        newElement.textContent = text;
    }

    for (let attr in attributes) {
        if (!newElement.hasAttribute(attr)) {
            newElement.setAttribute(attr, attributes[attr]);
        }
    }
    return newElement;
}
