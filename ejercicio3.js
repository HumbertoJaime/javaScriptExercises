/*Dada una palabra buscarla en una frase y devolver cuantas veces aparece en ella*/
/*La frase y palabra deben de ser parametros de una función*/

let count = 0; 
function search(palabra, frase)
{
    frase = frase.toLowerCase()
    palabra = palabra.toLowerCase()

    fraseArray = frase.split(" ")
    longitud = fraseArray.length
    for(i = 0; i <= longitud; i++)
    {
        if(palabra === fraseArray[i])
        {
            count = count + 1
        }
    }

    console.log("La palabra "+palabra+" se repite "+count+" veces en la frase "+frase)
}

search("Hola","Hola muy buenos días en estos días el decir hola es my raro por que no son buenos días en el hola");