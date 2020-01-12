// let age = prompt("Please enter your age");
// alert(age);



//EJEMPLO 1 CALLBACK

// let  saludo = function (name){
//     alert("Hola "+name)
// };

// function getName(sal){
//     let nombre = prompt("Please enter your name")
//     sal(nombre);
// }

// getName(saludo);

//EJERCICIO DOHOMEWORK
let message = function(){
    alert("The homework has been done!");
}

function doHomeWork(mes,amountOfWork){
    for(let i=1;i<=amountOfWork;i++){
        console.log(i);
    }
    mes();
}

let amountOfWork=10;
doHomeWork(message,amountOfWork);