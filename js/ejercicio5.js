/*Crear un programa que me permita ingresar la edad de 20 personas, 
y al final mostrar cuantos mayores y menores de edad hay.*/

const boton5 = document.getElementById("boton5");
boton5.addEventListener('click', () => {
    totalMayores = 0;
    totalMenores = 0;
    numeroPersonas = 0;
    for(let i = 1; i <= 20; i++) {
        const personas = Number(prompt("Ingresa la edad de la persona: "+ i));
        if (personas >= 18){
            totalMayores += 1;
            numeroPersonas = personas;
        } else {
            totalMenores += 1;
            numeroPersonas = personas;
        }
    }
    document.getElementById("mayores").innerHTML = "El numero total de las personas mayores son: "+totalMayores
    document.getElementById("menores").innerHTML = "EL numero total de las personas menores son:"+ totalMenores 
    
});