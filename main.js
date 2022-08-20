        // referencia de elementos HTML en JS
        var button = document.getElementById("btn");
        var txt = document.getElementById("txtResult");
        var opcionUno = document.getElementById("verdadero");
        var opcionDos = document.getElementById("falso");
        var numeroRandom;
        var consecuentMessage = "<p><br> now... take it and go</p>";

        let oscilation = (max, min) => {
            return Math.round(Math.random() * (max - min) + min);
        };

        button.addEventListener("click", () => {
            txt.innerHTML = "DECIDING..."
            setTimeout(function () {
                var choice = oscilation(1, 0);
                if (choice == 1) {
                    txt.innerHTML = opcionUno.value + consecuentMessage;
                } else {
                    txt.innerHTML = opcionDos.value + consecuentMessage;
                }
            }, 1000);
        });