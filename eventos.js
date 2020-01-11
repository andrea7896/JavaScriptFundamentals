function setColor(){
    let body = document.getElementsByTagName('body');
    document.body.style.backgroundColor="red";
}

function changeLetterColor(){
    let elem = document.getElementById('contenedor');
    elem.style.color = "blue";
}

function mouseFuera(){
    let elem = document.getElementById('contenedor');
    elem.style.color = "black";
}

//OBTIENE EL VALOR DEL INPUT
function save(){
    let inputvalue = document.getElementById('name').value;
    alert("Hola "+inputvalue);
}

function changeColor(){
    let elem = document.getElementsByClassName("styleClass");
    elem[0].style.backgroundColor = "blue";
    elem[4].style.backgroundColor = "blue";
}


//EVENTOS DE CARGA DE LA PAGINA
// window.onload = () => {
//     alert("HolaEvent");
// }