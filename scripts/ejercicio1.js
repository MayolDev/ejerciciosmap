//Funcion que retorna un entero aleatorio entre el numero y 1
const aleatorio = (n) => {
    return Math.trunc(Math.random() * (n - 1) + 1)
}


document.querySelector('#enviar').addEventListener("click", (e) => {
let numero = 0;

numero = document.querySelector('.numero').value;

document.querySelector('.resultado').value = aleatorio(numero)


})