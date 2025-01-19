// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

/*Desarrolla una función, que permita al usuario ingresar un nombre en el campo de texto y 
añadirlo a la lista de amigos creada anteriormente.*/
function agregarAmigo() {
    let elementoAmigo = document.getElementById("amigo");
    if (elementoAmigo.value.trim() === "") {
        alert("Por favor, inserte un nombre"); // alerta por no ingresar nombre
    } else {
        amigos.push(elementoAmigo.value); // Adicionar nombre a la lista de amigos
        console.log(`añadiendo el siguiente nombre ${elementoAmigo.value}`);
        console.log(`Lista amigos secretos [${amigos}]`); 
        elementoAmigo.value = ""; // Borrar el inputbox
        actualizarListaAmigos();
    }    
}

/*Crea una función que recorra el array amigos y agregue cada nombre 
como un elemento <li> dentro de una lista HTML. 
Usa innerHTML para limpiar la lista antes de agregar nuevos elementos.*/
function actualizarListaAmigos() {
    borrarListaAmigos();
    let listaAmigosTxt = "";
    for (let x = 0; x < amigos.length; x++) {
        listaAmigosTxt = listaAmigosTxt + `<li>${amigos[x]}</li>\n`;
    }
    listaAmigos.innerHTML = listaAmigosTxt;
}
/*Escribe una función que seleccione de manera aleatoria uno de 
los nombres almacenados en el array amigos. 
Usa Math.random() y Math.floor() para obtener un índice aleatorio.*/
function sortearAmigo() {
    if (amigos.length != 0) {
        let numeroAleatorio = Math.floor(Math.random() * amigos.length);
        console.log(`el numero aleatorio es: ${numeroAleatorio}`);
        let nombreSorteado = amigos[numeroAleatorio];
        let elementoResultado = document.getElementById("resultado");
        elementoResultado.innerHTML = `<li>El amigo secreto es: ${nombreSorteado}</li>`;
        borrarListaAmigos();
        amigos = "";
    }
}
/* Borrar lista de amigos*/
function borrarListaAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
}