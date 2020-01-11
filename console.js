//trabaja con todos los argumentos 
//de la funcion
// function sum(){
//     console.log(arguments)
// let result = 0;
// for(let params of arguments){
//     result += params ;
// }
// return result;
// }
// console.log(sum(1));

//EJERCICIO 2
//recibir parametros y trabajar con
//resto de argumentos
function sum(valor1,...bannanas){
 console.log(bannanas);
 let res = 0;
 for(let x of bannanas){
    res += x;
 }
 res += valor1
 return res;
}

console.log(sum(3,2,5,4));

function potenciacion(potencia,valor1,...argumentos){
   console.log("potenciacion")
   console.log(potencia)
   console.log(valor1)
   console.log(argumentos) 
}

console.log(potenciacion(3,3,4,4,4));

function getTotalPayment(monto,interes = 3.5,years = 4){
    console.log("pagos de prestamo")
    let montoWithInteres = ((monto * interes)/100) + monto;
    let totalPerYear = montoWithInteres / years;
    return totalPerYear;
}

console.log(getTotalPayment(1000,4.5,6));
