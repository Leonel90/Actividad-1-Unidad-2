const boton3 = document.getElementById("boton3");
boton3.addEventListener('click', () => {
    const n = prompt("Ingresa el numero de notas a promediar");
    x = 1;
    suma = 0;
    nota = 0;
    if (n >0) {
        while ( x <= n){
            nota = Number(prompt("Ingresa la nota: "+x));
            suma += nota;
            x += 1
        }
        const resultado = (suma/n);
        document.getElementById("promedio").innerHTML = resultado
    } else{
        document.getElementById("promedio").innerHTML = "Ingresastes 0 y no es valido vuelve intentar"
    }
    

});