    window.onload = principal;

    function principal()
    {
        document.getElementById("miBoton").onclick = manejadorClick;
    }

    function manejadorClick()
    {
    
        let salida1 =  document.getElementById("salida1");
        let salida2 =  document.getElementById("salida2");
        let salida3 =  document.getElementById("salida3");
        let salida4 =  document.getElementById("salida4");
        let entrada = document.getElementById("entrada").value;
        let posicion =document.getElementById("numero").value;
        let letraAparicion =  document.getElementById("letra").value;


        //con esto cogemos el valor que introduce el usuario y le devolvemos el tamaño de diño string(.length).
        salida1.innerText = "El tamaño del String es: "+entrada.length;
        salida2.innerText = `La letra en la posicion: ${posicion} es:`+ entrada.charAt(posicion);
        salida3.innerText = `Primera aparicion de la letra ${letraAparicion} ` + entrada.indexOf(letraAparicion);
        salida4.innerText = `Ultima aparicion de la letra ${letraAparicion} ` + entrada.lastIndexOf(letraAparicion);







    }
