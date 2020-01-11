//hoisting
//este si puede moverlo hacia arriba
run();
function run(){
    console.log("Running");
}
//este no puede ser movido por hoisting, por que es una function expression
//move();
let move = function walk() {
    console.log("walking")
};

//THE KEYWORD  this
//ejemplo con objeto
// let persona = {
//     name: "Andy",
//     age: "22",
//     move: function () {
//         console.log("I can move");
//         console.log(this)
//     },
// }
// persona.move();

// function x(){
//     let x = "x"
//     console.log(x,this)
//     function y(){
//         let y = "y"
//         console.log(y,this)
//         function z(){
//             let z = "z"
//             console.log(z,this)
//         }
//         z();
//     }
//     y();
// }
// x();

// var documentName = "Javascript fundamentals";
// function examplethis(){
//  console.log(this.documentName);
// }
// examplethis();
