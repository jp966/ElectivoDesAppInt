// Obtenemos el DIV y lo almacenamos en una variable llamada "caja"
var caja = document.getElementById("caja");
// Obtenemos el span y lo almacenamos en una variable llamada "texto"
var texto = document.getElementById("texto");
// Añadimos el evento click a la variable "caja"
caja.addEventListener("click",function(){
// Cambiamos el texto del span que almacenamos en la variable "texto"
texto.innerHTML = "He cambiado el texto!";
// Cambiamos el color del DIV que almacenamos en la variable "caja"
caja.style.background = "orange";
});