const boton2 = document.getElementById("boton2");
boton2.addEventListener('click', () => {
    numero = 0;
    total = 0;

    do  {
        total += Number(numero);
        numero = prompt("Ingresa un numero: ");
    } while (numero !=0);
    document.getElementById("suma").innerHTML = total;

});