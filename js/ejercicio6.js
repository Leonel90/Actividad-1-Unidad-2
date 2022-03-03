const boton6 = document.getElementById("boton6");
boton6.addEventListener('click', () => {
    var num, total, val;


    num = Number(prompt("Ingrese el tipo de valor a pagar"));
    val = Number(prompt("Escribir tu valor a pagar"));
    switch (num) {
        case 1:
            if (val <= 100) {
                total = (0.02 * val);
                total = (val - total);
                document.getElementById("descuento").innerHTML = "Tu descuento es del 2%"
                document.getElementById("TotalPagar").innerHTML = "Tu valor a pagar es de $ " + total
            } else {
                document.getElementById("Eror").innerHTML = "Tu valor a pagar no corresponde a este apartado vueleve a elegir"
            }
            break;
        case 2:
            if (val <= 250 && val >= 100.01) {
                total = (0.05 * val);
                total = (val - total);
                document.getElementById("descuento").innerHTML = "Tu descuento es del 5%"
                document.getElementById("TotalPagar").innerHTML = "Tu valor a pagar es de $ " + total
            } else {
                document.getElementById("Eror").innerHTML = "Tu valor a pagar no corresponde a este apartado vueleve a elegir"
            }
            break;
        case 3:
            if (val <= 800 && val >= 250.01) {
                total = (0.08 * val);
                total = (val - total);
                document.getElementById("descuento").innerHTML = "Tu descuento es del 8%"
                document.getElementById("TotalPagar").innerHTML = "Tu valor a pagar es de $ " + total
            } else {
                document.getElementById("Eror").innerHTML = "Tu valor a pagar no corresponde a este apartado vueleve a elegir"
            }
            break;
        case 4:
            if (val <= 100000000 && val >= 8001.01) {
                total = (0.12 * val);
                total = (val - total);
                document.getElementById("descuento").innerHTML = "Tu descuento es del 12%"
                document.getElementById("TotalPagar").innerHTML = "Tu valor a pagar es de $ " + total
            } else {
                document.getElementById("Eror").innerHTML = "Tu valor a pagar no corresponde a este apartado vueleve a elegir"
            }
            break;
        default:
            document.getElementById("Eror").innerHTML = "Opcion incorrecta vuelve a ingresar porfavor"
    }

});