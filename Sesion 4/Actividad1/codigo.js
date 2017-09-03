
// Obtenemos el button y lo almacenamos en una variable llamada "btn"
var btn = document.getElementById("btn");
/* Obtenemos el div que muestra el resultado y lo
almacenamos en una variable llamada "resultado" */
var resultado = document.getElementById("resultado")
/* Obtenemos los dos input y los almacenamos en
variables "inputUno" y "inputDos" */
var inputMin = document.getElementById("input-min");
var inputMax = document.getElementById("input-max");
// Añadimos el evento click a la variable "btn"
btn.addEventListener("click",function(){
/* Obtenemos el valor de cada input accediendo a
su atributo "value" */
var min = inputMin.value;
var max = inputMax.value;
/* Llamamos a una función que permite realizar la
suma de los números y los mostramos al usuario" */
resultado.innerHTML = obtenerAzar(min,max);
});
/* Función que retorna la suma de dos números */
function obtenerAzar(min, max){
// Es necesario aplicar parseInt a cada número
return Math.floor(Math.random() * (parseInt(max) - parseInt(min) + 1)) + parseInt(min);


}