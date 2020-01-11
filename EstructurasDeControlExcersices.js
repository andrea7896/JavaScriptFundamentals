// Landscape or Portrait
function isLandScape (width, height) {

}

// FizzBuzz algoritmo
/**
 * Divisible entre 3 => Fizz
 * Divisible entre 5 => Buzz
 * Divisible entre 3 y 5 => FizzBuzz
 * No ivisible entre 3 o 5 => input
 * No es un numero => 'Not es un numero'
 * 
 */
function FizzBuzz(number){
    let mensaje;
  
    if(typeof number != "number"){
        mensaje = "No es un numero"
        return mensaje;
    }

    if(((number % 3) == 0) && ((number % 5) == 0)){
      mensaje = "FizzBuzz"  
    }else if(((number % 3) == 0)){
        mensaje = "Fizz"
    }else if((number % 5) == 0){
        mensaje = "Buzz"
    }else{
        mensaje = "input"
    }

    return mensaje;
}

console.log(FizzBuzz(""));

 // limite de velocidad
 /**
  * Limite de velocidad = 70
  * 5 -> 1 point
  * Math.Floor
  * 12 point -> licencia suspendida
  */

  // Par or non
  /**
   * Funcion que reciba un numero e imprima desde 0 
   * hasta el numero dado y espacifique sies par o non
   * example: n = 3
   * 0 par
   * 1 non
   * 2 par
   * 3 non
   */

   // Suma de multiplos de 3  y 5
   /**
    *  sum(10)
    *  3 -> 3, 6, 9
    *  5 -> 5, 10
    *  sum(10) = 33
    */

    // Show the stars

    // Print Primes  

 