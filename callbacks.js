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

function doHomeWork(mes){
    for(let i=1;i<=100;i++){
        console.log(i);
    }
    mes();
}

doHomeWork(message);