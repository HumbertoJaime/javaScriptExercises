/*Dada una cadena de texto, darle la vuelta e invertir el orden 
de sus caracteres, sin usar métodos propios del lenguaje 
solo estructuras de control.*/


let contador = 0
let arrayInversa = []
function palabra(texto)
{
    texto = texto.toLowerCase()
    arrayPalabra = texto.split("")
    longitud = arrayPalabra.length

    for(i = longitud-1; i >= 0; i--)
    {
        arrayInversa[contador] = arrayPalabra[i] 
        contador = contador + 1
    }

    arrayInversa = arrayInversa.join("")
    console.log(arrayInversa)

}

palabra ("Hola")