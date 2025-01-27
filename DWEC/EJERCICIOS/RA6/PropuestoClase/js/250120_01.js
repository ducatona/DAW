// window.onload = () => {


//     let elementos = document.querySelectorAll('td');



//     for (const e of elementos) {

//         e.addEventListener('click', function ()  {

//             this.parentNode.removeChild(this);

//         });

//     }




// }


window.onload = () => {




    document.getElementById('btnBorrar').addEventListener("click", function () {

        let nFila = document.getElementById('nFila').value;
        let nColumna = document.getElementById('nColumna').value;
        let idBorrar = "td_" + nFila + "_" + nColumna;
        let elementoBorrar = document.getElementById(idBorrar);
        elementoBorrar.parentNode.removeChild(elementoBorrar);

    });

}