//let width = 200;
//let height = 100;

// function islandScape(width,height){
//  let mensaje;

//     if(width > height){
//       mensaje = true
//     }else if(width <= height){
//       mensaje = false
//     }
//     return mensaje;
// }

// let mensaje = islandScape(500,300);
// console.log(mensaje)

// function saludo(rol){
// let mensaje="";
//     switch(rol){
//         case "Recursos Humanos":
//             mensaje = "Hola compañero de "+rol    
//         break;
//         case "IT":
//             mensaje = "Hola compañero de "+rol
//         break;
//         case "Contabilidad":
//             mensaje = "Hola compañero de "+rol
//         break;
//         default:
//             mensaje = "Hola invitado"          
//     }
//     console.log(mensaje);
//     return mensaje;
// }

// let rol = "IT"
// let mensaje = saludo(rol);
// console.log(mensaje);

// function getPage(){
//     //request
//     const responseCode = 404;

//     switch(responseCode){
//         case 200:
//             console.log("Ok")
//         break;
//         case 404:
//             console.log("Not found")
//         break;
//         case 500:
//             console.log("Server error")
//         break;
//         default:
//             console.log("We can't resolve the request");

//     }
// }

// getPage();


// for(let i=1;i<=10;i++){
//  console.log(i);
// }

// let person = {
//     name: "Andrea",
//     age: 30
// }

// for(let key in person){
//     console.log(key,person[key]);
// }

// let manzana = {
//     color : "roja",
//     size : "chica",
//     peso : 0.22
// }

// let numeros = [12,34,56,8,90]

// for(let numero of numeros){
//     console.log(numero)
// }

// for(let propiedad in manzana){
//     if(propiedad != "peso"){
//         console.log("La manzana es ",propiedad, manzana[propiedad] + " yummy!")
//     }else{
//         console.log("Su", propiedad, manzana[propiedad],"kg" + " yummy!")
//     }
    
// }

let consumoMB = 6;

// while(checkingIsNecesary(consumoMB)){ 
//  consumoMB --;

// }

// do{
// checkingIsNecesary(consumoMB)
//  consumoMB--
// }while(consumoMB >2.5);

// function checkingIsNecesary(traffic){
//     console.log("Checking trafic ",traffic);
//     if(traffic > 2.5){
//         console.log("There is some trafic")
//     return true;
//     }else{
//         console.log("you can stop checking trafic")
//     return false;
//     }
// }

for(let i=0;i<10;i++){
    if(i > 5){
    console.log("estoy en el index",i)
    continue
    }
    console.log("index ",i)
}