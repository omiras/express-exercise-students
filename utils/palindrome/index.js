// Voy a exportar a todo aquel que me haga una 'require' de este fichero, una función que toma por parámetro un string, y devuelve un boleano.
exports.palindrome = function(str) {
    let i,j
    i=0
    str = str.replace(/[^a-z0-9]+/gi, "");
    str = str.toLowerCase()
    j=str.length -1
    let esPalindromo = true
  
    while(i<j && esPalindromo) {
      esPalindromo = str[i] == str[j]
      i++
      j--;
    }
  
    return esPalindromo;
  }

exports.esPar = (num) => {
  return num % 2
}