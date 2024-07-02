let botonesPresionados = 0;
let intento1;
let intento2;
let primerNumero;
let segundoNumero;
let movimientos = 0;
let aciertos = 0;

let numeros = JSON.parse(localStorage.getItem('numeros'));
let botones = document.getElementsByClassName('botones');
let mostrarMovimientos = document.getElementById('movimientos');
let mostrarAciertos = document.getElementById('aciertos');
const mezclar = document.getElementById("mezclar");


if (numeros == null) {
    numeros = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
    numeros = numeros.sort(()=>{return Math.random()-0.5});
};


for (let boton = 0; boton < botones.length; boton++) {
    botones[boton].addEventListener('click', () => {
        botonesPresionados++

        if (botonesPresionados == 1) {
            intento1 = botones[boton];
            primerNumero = numeros[boton];
            intento1.innerHTML = primerNumero;

            intento1.disabled = true;

        } else if (botonesPresionados == 2) {
            intento2 = botones[boton];
            segundoNumero = numeros[boton];
            intento2.innerHTML = segundoNumero;

            intento2.disabled = true;

            movimientos++;
            mostrarMovimientos.innerHTML = "Movimientos: " + movimientos;

            if (primerNumero == segundoNumero) {
                botonesPresionados = 0;

                aciertos++;
                mostrarAciertos.innerHTML = "Aciertos: " + aciertos;

                localStorage.setItem("numeros", JSON.stringify(numeros));

                if (aciertos == 8) {
                    Swal.fire({
                        title: "Bien Hecho!",
                        text: `Completado en: ${movimientos} movimientos`,
                        icon: "success",
                        footer: '<a href="../index.html">Volver a jugar</a>'
                    });
    
                    localStorage.clear();
                }
            } else {
                setTimeout(() => {
                    intento1.innerHTML = "";
                    intento2.innerHTML = "";

                    intento1.disabled = false;
                    intento2.disabled = false;
                    
                    botonesPresionados = 0;
                }, 500);
            };
        };
    });
};

mezclar.addEventListener("click", () => {
    localStorage.clear();
});