// Nombre y apellidos

let divsColores = document.querySelectorAll('div:not(#divTexto)');
for (let i = 0; i < divsColores.length; i++) {
    divsColores[i].addEventListener("click", manejadorClick);
    divsColores[i].addEventListener("mouseover", entroDiv);
    divsColores[i].addEventListener("mouseout", salgoDiv);
}

let divTexto = document.getElementById("divTexto");

document.addEventListener("keydown", escribir);

function manejadorClick(e) {
    e.stopPropagation();
    divTexto.style.color = window.getComputedStyle(e.target).backgroundColor;
}

function entroDiv(e) {
    e.stopPropagation();
    divTexto.style.backgroundColor = window.getComputedStyle(e.target).backgroundColor;
}

function salgoDiv(e) {
    e.stopPropagation();
    divTexto.style.backgroundColor = "aqua";
}

function escribir(e) {
    let key = e.key;
    let regex = /^[a-zA-Z0-9 ]$/;
    if (regex.test(key)) {
        let texto = document.createTextNode(divTexto.innerHTML + key);
        divTexto.innerHTML = "";
        divTexto.appendChild(texto);
    }else if(key === "Backspace"){
        // Eliminar el último carácter del texto en divTexto
        let textoActual = document.getElementById("divTexto").innerText;
        document.getElementById("divTexto").innerText = textoActual.slice(0, -1);
    }
}