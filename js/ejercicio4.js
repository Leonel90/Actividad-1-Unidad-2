const boton4 = document.getElementById("boton4");
boton4.addEventListener('click', () => {
    n = 0;
    do {
        const n = Number(prompt("Ingrese un numero del 1 al 10"));
        switch (n) {
            case 1:
                document.getElementById("I").innerHTML = 'EL numero 1 en romano es "I"'
                break;
            case 2:
                document.getElementById("II").innerHTML = 'EL numero 2 en romano es "II"'
                break;
            case 3:
                document.getElementById("III").innerHTML = 'EL numero 3 en romano es "III"'
                break;
            case 4:
                document.getElementById("IV").innerHTML = 'EL numero 4 en romano es "IV"'
                break;
            case 5:
                document.getElementById("V").innerHTML = 'EL numero 5 en romano es "V"'
                break;
            case 6:
                document.getElementById("VI").innerHTML = 'EL numero 6 en romano es "VI"'
                break;
            case 7:
                document.getElementById("VII").innerHTML = 'EL numero 7 en romano es "VII"'
                break;
            case 8:
                document.getElementById("VIII").innerHTML = 'EL numero 8 en romano es "VIII"'
                break;
            case 9:
                document.getElementById("IX").innerHTML = 'EL numero 9 en romano es "IX"'
                break;
            case 10:
                document.getElementById("X").innerHTML = 'EL numero 10 en romano es "X"'
                break;
            default:
                document.getElementById("error").innerHTML = "Numero ingresado es mayor a 10 o menor a 1 vuelve ingresar"
        }

    } while (n > 0 & n < 11)

});