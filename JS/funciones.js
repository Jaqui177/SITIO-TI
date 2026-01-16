function saludar(){
    alert("Bienvenido a la Academia de T.I");
}
function suma(){
    var valor1 = 24;
    var valor2 = 13;
    var resultado= valor1 + valor2;
    alert ("Resultado de la suma de:"+valor1+ "y" +valor2+ "es: " + resultado);
}

function resta(){
    var valor1 = 15;
    var valor2 = 5;
    var resultado= valor1 - valor2;
    alert ("Resultado de la resta de:"+valor1+ "y" +valor2+ "es: " + resultado);
    }

function multiplicacion(){
    var valor1 = 20;
    var valor2 = 9;
    var resultado= valor1 * valor2;
    alert ("Resultado de la multiplicacion de:"+valor1+ "y" +valor2+ "es: " + resultado);
}

function division(){
    var valor1 = 11;
    var valor2 = 2;
    var resultado= valor1 / valor2;
    alert ("Resultado de la suma de:"+valor1+ "y" +valor2+ "es: " + resultado);






}

// Ejercicios de JavaScript ES6

// Ejercicio 6: Entrada del usuario
function ejercicio6() {
    let dato = window.prompt("Introduce tu nombre", "");
    let resultado = "Hola, como estás " + dato;
    document.getElementById("ej6-resultado").innerHTML = resultado;
}

// Ejercicio 7: parseInt()
function ejercicio7() {
    let dato = window.prompt("Introduce un número ?", "0");
    let num = parseInt(dato);
    let resultado = "El doble es " + (num * 2);
    document.getElementById("ej7-resultado").innerHTML = resultado;
}

// Ejercicio 8: Suma de dos números
function ejercicio8() {
    let dato1 = window.prompt("Introduce primer número ?", "0");
    let num1 = parseInt(dato1);
    let dato2 = window.prompt("Introduce segundo número ?", "0");
    let num2 = parseInt(dato2);
    let resultado = num1 + num2;
    document.getElementById("ej8-resultado").innerHTML = "<br> La suma es " + resultado;
}

// Ejercicio 9: innerHTML
function ejercicio9() {
    let dato = window.prompt("Introduce un número ?", "0");
    let num = parseInt(dato);
    let resultado = num * 2;
    document.getElementById("salida").innerHTML = "El doble es " + resultado;
}

// Ejercicio 10: Resta
function ejercicio10() {
    let dato1 = window.prompt("Introduce primer número ?", "0");
    let num1 = parseInt(dato1);
    let dato2 = window.prompt("Introduce segundo número ?", "0");
    let num2 = parseInt(dato2);
    let resultado = num1 - num2;
    document.getElementById("ej10-resultado").innerHTML = "<br> La resta es " + resultado;
}

// Ejercicio 11: Resta y Multiplicación
function ejercicio11() {
    let dato1 = window.prompt("Introduce primer número ?", "0");
    let num1 = parseInt(dato1);
    let dato2 = window.prompt("Introduce segundo número ?", "0");
    let num2 = parseInt(dato2);
    let resta = num1 - num2;
    let multiplicacion = num1 * num2;
    document.getElementById("ej11-resultado").innerHTML = "<br>La resta es " + resta + "<br>La multiplicación es " + multiplicacion;
}

// Animación al hacer scroll: activar clase 'in-view' en tarjetas y gran-seccion
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.card, .gran-seccion').forEach(el => observer.observe(el));
});