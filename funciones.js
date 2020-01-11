//function Declaration
function move(){

}
move();
//**function expression**
//function expression named
let movement = function move(){

};
movement();

//anonymous function expression
let run = function () {

};
run();

//arrow function
let walk = () => move();
let jump = () => { };

let holafunction = () => {
    console.log("Hola mundo ")
}

holafunction();

let ageCalculator = function calculator(birthDay,actualyear){
 let result = actualyear - birthDay;
 return result;
};

let age = ageCalculator(1997,2020)
console.log("age:"+ age);

console.log("age:"+ageCalculator(1998,2020));

let isMayorEdad = (age) => {
    if(age>=18){
        console.log("Es mayor de edad");
    }else{
        console.log("es menor de edad")
    }
};

isMayorEdad(age);

