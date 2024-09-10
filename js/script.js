let nombreUsuario = '';
const maxIntentos = 3;
let numeros = [1, 2, 3, 4, 5, 6];


function solicitarNombre() {
    nombreUsuario = prompt('Hola! Cúal es tu nombre?');
    if (nombreUsuario) {
        alert(`Hola, ${nombreUsuario}! Bienvenid@.`);
    } else {
        alert('Que groser@ =( no haz ingresado un nombre.');
    }
}

function adivinaElNumero() {
    let numeroCorrecto = Math.floor(Math.random() * 6) + 1; 
    let intentos = 0;
    let adivinanza;

    while (intentos < maxIntentos) {
        adivinanza = prompt(`Excelente! Imaginemos que tiré un dado de 6 lados, este es tu ${intentos + 1} intento de ${maxIntentos}:`);
        adivinanza = parseInt(adivinanza);

        if (adivinanza === numeroCorrecto) {
            alert('MISSION PASSED! + RESPECT');
            break;
        } else {
            alert('Ay casiii');
        }
        intentos++;
    }

    if (intentos === maxIntentos) {
        alert(`WASTED. El número era ${numeroCorrecto}.`);
    }
}

function iniciarJuego() {
    solicitarNombre();

    let jugar = confirm('¿Queres jugar a algo divertido?');
    if (jugar) {
        adivinaElNumero();
    } else {
        alert(`${nombreUsuario} que amargado!`);
        console.log(`${nombreUsuario} ha decidido no jugar.`);
    }
}

iniciarJuego();
