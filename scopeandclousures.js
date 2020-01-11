//SCOPE
// let x=5;

// function oneFunctionScope(){
//     let x = 10;
//     console.log("Function Scope",x);
// }

// console.log("Global scope",x)
// oneFunctionScope();


//SCOPE AND CLOSURES
// let x = 10;

// function otherFunction(){
//     let x = 4;
//     function anotherFunction(){
//         console.log(x);
//     }
//     anotherFunction();
// }

// console.log(x);
// otherFunction();


//FUNCIONES COMO PARAMETROS O CALLBACKS
//Aqui isMayorDeEdad recibe el resultado de
//de otra funcion, en este caso calculo de edad
let calculoEdad = function (birthYear,actualYear){
    return actualYear - birthYear;
}

let isMayorDeEdad = function (fn){
    let age = fn(1998,2020);

    if(age > 18){
        console.log("Es mayor de edad");
    }else{
        console.log("Es menor de edad")
    }
}

isMayorDeEdad(calculoEdad);




