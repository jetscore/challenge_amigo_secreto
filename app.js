// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

/*Desarrolla una función, que permita al usuario ingresar un nombre en el campo de texto y 
añadirlo a la lista de amigos creada anteriormente.*/
function agregarAmigo(){
    let elementoAmigo = document.getElementById("amigo");
    if (elementoAmigo.value.trim() === "") {
        alert("Por favor, inserte un nombre"); // alerta por no ingresar nombre
    } else {
        amigos.push(elementoAmigo.value); // Adicionar nombre a la lista de amigos
        console.log(`añadiendo el siguiente nombre ${elementoAmigo.value}`);
        console.log(`Lista amigos secretos [${amigos}]`); 
        elementoAmigo.value = ""; // Borrar el inputbox
    }    
}
