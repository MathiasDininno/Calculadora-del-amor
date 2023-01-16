function calcular() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2ced268edamsh231a857fab905adp17c230jsnd5e0f4bcbbc9',
            'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
        }
    };

    let nombreUno = document.getElementById("inputUno").value
    let nombreDos = document.getElementById("inputDos").value

    if ((nombreUno == '') || (nombreDos == '')) {
        alert(document.getElementById("resultado").innerHTML="Error, debe completar ambos campos.")
        console.log(nombreUno + "Soy nombre Uno")
        console.log(nombreDos + "Soy nombre dos")
    } else{
        fetch('https://love-calculator.p.rapidapi.com/getPercentage?sname=' + nombreUno + '&fname=' + nombreDos + '', options)
        .then(response => response.json())
        .then(response => {
            document.getElementById("porcentaje").innerHTML = response.percentage + "%"
            ocultar()
            mostrar()
            cambiarFondo(response.percentage)
            // traducir(response.result)
            // parametros(nombreUno)
        }
        )
        .catch(err => console.error(err));
    }
}

function traducir(texto) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2ced268edamsh231a857fab905adp17c230jsnd5e0f4bcbbc9',
            'X-RapidAPI-Host': 'translated-mymemory---translation-memory.p.rapidapi.com'
        }
    };

    fetch('https://translated-mymemory---translation-memory.p.rapidapi.com/get?langpair=en%7Ces&q=' + texto + '&mt=1&onlyprivate=0&de=a%40b.c', options)
        .then(response => response.json())
        .then(response => document.getElementById("resultado").innerHTML = response.responseData.translatedText)
        .catch(err => console.error(err));
}

function ocultar() {
    document.getElementById("container").style.display = "block"
    document.getElementById("resultado").style.display = "none"
    document.getElementById("ocultos").style.display = "none"
}

function mostrar() {
    document.getElementById("container").style.display = "none"
    document.getElementById("ocultos").style.display = "block"
}

function cambiarFondo(porcentaje) {
    if (porcentaje > 50) {
        document.querySelector("html").style.backgroundImage = "url('./img/FondoCorazones.png')"
        document.getElementById("corazonRosa").style.display = "block"
        document.getElementById("otraVez").style.backgroundColor = "#F03687"
    }else{
        document.querySelector("html").style.backgroundImage = "url('./img/FondoNegativo.png')"
        document.getElementById("corazonAzul").style.display = "block"
        document.getElementById("otraVez").style.backgroundColor = "#2B0E68"
    }
}

function volver() {
    ocultar()
    document.getElementById("corazonAzul").style.display = ("none")
    document.getElementById("corazonRosa").style.display = ("none")
    document.querySelector("html").style.backgroundImage = "none"
}

function parametros(nombre) {
    console.log("Valor de nombre uno:" + nombre)
}