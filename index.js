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
        document.getElementById("resultado").innerHTML="Error, debe completar ambos campos."
    } else{
        fetch('https://love-calculator.p.rapidapi.com/getPercentage?sname=' + nombreUno + '&fname=' + nombreDos + '', options)
        .then(response => response.json())
        .then(response => {
            document.getElementById("porcentaje").innerHTML = response.percentage + "% de compatibilidad"
            // traducir(response.result)
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