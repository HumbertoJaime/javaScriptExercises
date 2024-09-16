/*Dada una cadena de Texto, comprobar si es un palindromo  o no. */

function palindromo(text) {
    text = text.toLowerCase()
    const invertedText = text.split("").reverse().join("");
    if (text === invertedText) {
      console.log("es palindromo");
    } else {
      console.log("no es palindromo");
    };
  
  };
  
  palindromo("amor");