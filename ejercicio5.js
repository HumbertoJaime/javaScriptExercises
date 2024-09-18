/*¿Cuánto es el X por ciento de X número? */

function porcentaje(numero,porcentaje)
{

    porcentajeNuevo = ((porcentaje*numero)/100)
    console.log("El "+porcentaje +"% de "+numero+" es igual a "+porcentajeNuevo)
}

porcentaje (200,10)