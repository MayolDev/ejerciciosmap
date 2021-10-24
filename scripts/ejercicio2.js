
//Ejercicio 2, calculadora

let operandos = [];
let operacion = null;

//Funcion calculadora
const calculadora = (operando1, operando2, operacion) => {

    switch(operacion){
        case 'suma': 
            return operando1 + operando2;
        case 'resta':
            return operando1 - operando2;
        case 'multiplicacion':
            return operando1 * operando2;
        case 'division':
            return operando1 / operando2;

    }

}

//Le ponemos eventos a todos los operandos y lo metemos en el array de operandos
for(let elem of document.querySelectorAll('.operandos')) {
    elem.addEventListener("click", (e) =>{
        operandos.push(e.target.id)
        document.querySelector('#salida').value = e.target.id

    } 
    , true);
  }

  //Hacemo slo mismo con las operaciones
  for(let elem of document.querySelectorAll('.operacion')) {
    elem.addEventListener("click", (e) =>{
        operacion = e.target.id
        document.querySelector('#salida').value = e.target.outerText
    } 
    , true);
  }

  //Cuando pulsamos igua, realizamos la operacion y la mostramos por pantalla.
  document.querySelector('#igual').addEventListener("click", (e) => {
    let resultado  = calculadora(operandos[0], operandos[1], operacion)
    console.log(operandos[0] )
    console.log(operandos[1] )
    console.log(operacion )
    document.querySelector('#salida').value = "resultado: " + resultado
    operandos = []
    operacion = null
      
  })