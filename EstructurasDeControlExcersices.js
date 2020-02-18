// Landscape or Portrait
// function isLandScape (width, height) {

// }

// FizzBuzz algoritmo
/**
 * Divisible entre 3 => Fizz
 * Divisible entre 5 => Buzz
 * Divisible entre 3 y 5 => FizzBuzz
 * No ivisible entre 3 o 5 => input
 * No es un numero => 'Not es un numero'
 * 
 */
// function FizzBuzz(number){
//     let mensaje;
  
//     if(typeof number != "number"){
//         mensaje = "No es un numero"
//         return mensaje;
//     }

//     if(((number % 3) == 0) && ((number % 5) == 0)){
//       mensaje = "FizzBuzz"  
//     }else if(((number % 3) == 0)){
//         mensaje = "Fizz"
//     }else if((number % 5) == 0){
//         mensaje = "Buzz"
//     }else{
//         mensaje = "input"
//     }

//     return mensaje;
// }

// console.log(FizzBuzz(""));

 // limite de velocidad
 /**
  * Limite de velocidad = 70
  * 5 -> 1 point
  * Math.Floor
  * 12 point -> licencia suspendida
  */

  //   function LimiteVelocidad(velocidad){

  //   if(velocidad > 70){
  //       let puntosm = Math.floor((velocidad - 70) / 5)
  //       console.log(puntosm);
  //       console.log("Tus puntos malos son: ",puntosm);
  //       if(puntosm >=12){
  //           console.log("Tu licencia ha sido suspendida");
  //       }else{
  //       console.log("Velocidad normal")
  //   }
  //  }
  // } 
  
  // LimiteVelocidad(80);




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
//   function parNon(numero){
//     for(let i=0; i<=numero ; i++){
//       if((i%2 === 0)){
//         console.log(i,"Es par")
//       }else{
//         console.log(i,"Es non")
//       }
//     }
//   }
// parNon(6);

   // Suma de multiplos de 3  y 5
   /**
    *  sum(10)
    *  3 -> 3, 6, 9
    *  5 -> 5, 10
    *  sum(10) = 33
    */

//    function sum(num){
//      let x = 0;
//      let SumMul=0;
//     while(x<=num){
//       if((x % 3 == 0) || (x % 5 == 0)){
//           SumMul +=  x
//       }
//       x++
//     }
//     console.log(SumMul);
// }
// sum(10);

//     // Show the stars
// function showTheStars(num){
//   let star="";
//   for(let x=0; x<=num; x++){
//     console.log(x,star);
//     star += "*"
//   }
// }
// showTheStars(10)

//print primes
function printPrimes(limite){
    for(let i=1;i<limite;i++){
        let cont=0;
        for(let x=1;x<limite;x++){
            if(i % x == 0){
                cont++      
                 }
        }
        if(cont === 2 ){
            console.log(i); 
        }
    }
}

printPrimes(20);