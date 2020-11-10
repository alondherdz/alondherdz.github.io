"use strict";
var forma = document.getElementById("forma"),
    campos =  ["clave", "nombre", "telefono", "fecha"
              ],
    salidas = ["salidaClave", "salidaNombre", "salidaTelefono", 
               "salidaFecha"];

 

forma.addEventListener("submit", Procesa, false);

<input type="reset" value="Limpiar formulario"></input>
