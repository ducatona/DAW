window.onload = principal;


var diasLaborables = new Array();
diasLaborables[0] = new Array("Lunes", "Martes", "Miercoles", "Jueves", "Viernes");

diasLaborables[1] = new Array("Monday", "Tuesday", "Wednesday", "Thursday", "Friday");

diasLaborables[2] = new Array("Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi");

diasLaborables[3] = new Array("Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag");

console.log("La semana empieza en " + diasLaborables[0][0]);

console.log("Week ends on " + diasLaborables[1][4]);




for (let i = 0; i < diasLaborables.length; i++) {
    let salida = "";

    for (let j = 0; j < diasLaborables.length[i]; j++) {
        salida += diasLaborables[i][j] + "; ";

    }
    console.log(salida);
}



let alumnos = [
    {
        "nombre": "Antonio",
        "apellidos": "Sierra García",
        "teléfonos": {
            "casa": 942112233,
            "móvil": 666555444
        },
        "tutores": [
            {
                "nombre": "Pepe",
                "apellidos": "Sierra Mil",
                "teléfonos": {
                    "casa": 942178978,
                    "móvil": 666111222
                }
            },
            {
                "nombre": "Yoquese",
                "apellidos": "García Ñej",
                "teléfonos": {
                    "casa": 942788956,
                    "móvil": 66784512
                }
            }
        ]
    },
    {
        "nombre": "Carlos",
        "apellidos": "Fernández López",
        "teléfonos": {
            "casa": 942334455,
            "móvil": 654987321
        },
        "tutores": [
            {
                "nombre": "Ana",
                "apellidos": "López Pérez",
                "teléfonos": {
                    "casa": 942876543,
                    "móvil": 622334455
                }
            },
            {
                "nombre": "Luis",
                "apellidos": "Fernández Gutiérrez",
                "teléfonos": {
                    "casa": 942555666,
                    "móvil": 677889900
                }
            }
        ]
    },
    {
        "nombre": "Lucía",
        "apellidos": "Martínez Ruiz",
        "teléfonos": {
            "casa": 942567890,
            "móvil": 612345678
        },
        "tutores": [
            {
                "nombre": "María",
                "apellidos": "Ruiz Sánchez",
                "teléfonos": {
                    "casa": 942123789,
                    "móvil": 600345678
                }
            },
            {
                "nombre": "Juan",
                "apellidos": "Martínez León",
                "teléfonos": {
                    "casa": 942876234,
                    "móvil": 675432189
                }
            }
        ]
    },
    {
        "nombre": "Diego",
        "apellidos": "Hernández Vázquez",
        "teléfonos": {
            "casa": 942908712,
            "móvil": 634556789
        },
        "tutores": [
            {
                "nombre": "Eva",
                "apellidos": "Vázquez Gómez",
                "teléfonos": {
                    "casa": 942123654,
                    "móvil": 611998877
                }
            },
            {
                "nombre": "Pedro",
                "apellidos": "Hernández Muñoz",
                "teléfonos": {
                    "casa": 942765432,
                    "móvil": 678876543
                }
            }
        ]
    },
    {
        "nombre": "Marta",
        "apellidos": "González Sánchez",
        "teléfonos": {
            "casa": 942334467,
            "móvil": 657890123
        },
        "tutores": [
            {
                "nombre": "Raquel",
                "apellidos": "Sánchez López",
                "teléfonos": {
                    "casa": 942987654,
                    "móvil": 644321098
                }
            },
            {
                "nombre": "Miguel",
                "apellidos": "González Gómez",
                "teléfonos": {
                    "casa": 942123321,
                    "móvil": 672345678
                }
            }
        ]
    },
    {
        "nombre": "Sofía",
        "apellidos": "Romero Torres",
        "teléfonos": {
            "casa": 942678901,
            "móvil": 613456789
        },
        "tutores": [
            {
                "nombre": "Pablo",
                "apellidos": "Torres Martínez",
                "teléfonos": {
                    "casa": 942654789,
                    "móvil": 621789123
                }
            },
            {
                "nombre": "Carmen",
                "apellidos": "Romero García",
                "teléfonos": {
                    "casa": 942678234,
                    "móvil": 634567890
                }
            }
        ]
    },
    {
        "nombre": "Alejandro",
        "apellidos": "Jiménez Navarro",
        "teléfonos": {
            "casa": 942456123,
            "móvil": 625789123
        },
        "tutores": [
            {
                "nombre": "Beatriz",
                "apellidos": "Navarro Fernández",
                "teléfonos": {
                    "casa": 942777888,
                    "móvil": 612345987
                }
            },
            {
                "nombre": "Ángel",
                "apellidos": "Jiménez Castillo",
                "teléfonos": {
                    "casa": 942112677,
                    "móvil": 666444777
                }
            }
        ]
    },
    {
        "nombre": "Laura",
        "apellidos": "Ortega Blanco",
        "teléfonos": {
            "casa": 942333444,
            "móvil": 656321456
        },
        "tutores": [
            {
                "nombre": "Teresa",
                "apellidos": "Blanco Gil",
                "teléfonos": {
                    "casa": 942123432,
                    "móvil": 619876543
                }
            },
            {
                "nombre": "José",
                "apellidos": "Ortega Ruiz",
                "teléfonos": {
                    "casa": 942888555,
                    "móvil": 633345654
                }
            }
        ]
    },
    {
        "nombre": "Fernando",
        "apellidos": "Ramos Domínguez",
        "teléfonos": {
            "casa": 942777111,
            "móvil": 667789456
        },
        "tutores": [
            {
                "nombre": "Isabel",
                "apellidos": "Domínguez Silva",
                "teléfonos": {
                    "casa": 942543210,
                    "móvil": 615234567
                }
            },
            {
                "nombre": "Marcos",
                "apellidos": "Ramos Morales",
                "teléfonos": {
                    "casa": 942123987,
                    "móvil": 670456789
                }
            }
        ]
    },
    {
        "nombre": "Paula",
        "apellidos": "Molina Pérez",
        "teléfonos": {
            "casa": 942231231,
            "móvil": 644789231
        },
        "tutores": [
            {
                "nombre": "Lucía",
                "apellidos": "Pérez Vega",
                "teléfonos": {
                    "casa": 942111888,
                    "móvil": 611222333
                }
            },
            {
                "nombre": "Carlos",
                "apellidos": "Molina Torres",
                "teléfonos": {
                    "casa": 942333222,
                    "móvil": 612987123,
                    "trabajo": 111222333
                }
            },
            {
                "nombre": "él último",
                "apellidos": "Molina Torres",
                "teléfonos": {
                    "casa": 942333222,
                    "móvil": 612987123
                }
            }
        ]
    }
];

/*
    Vamos a hacer un pequeño código que saque por consola de cada uno de los alumnos de la colección anterior
    el nombre completo, apellidos y nombre, y el nombre del segundo tutor así como el teléfomo móvil de este último.
   
    Por ejemplo, para el primer alumno, sacaría por consola algo tal que:
 
        Antonio Sierra García: Yoquese - 66784512;
*/

for (let i = 0; i < alumnos.length; i++) {


   let nombre = alumnos[i].nombre
   let apellidos =  alumnos[i].apellidos 


   let nombreTutores =  alumnos["tutores"]

   for (let i = 0; i < nombreTutor.length; i++) {
      let nombreT = nombreTutor[i].nombre;
   }



   let movilTutores =  alumnos[i].tutores["teléfonos"]

   for(moviles in movilTutores){

    let movilT = moviles

   }


console.log(`${nombre}  ${apellidos}  ${nombreTutor}  ${movilTutor}`);

}



