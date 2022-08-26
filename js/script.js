function calculate() {
    var height = document.getElementById("height").value / 100;
    var weight = document.getElementById("weight").value;
    
    var imc = weight / height ** 2;
    var text = ""
    if (imc < 18.5) {
        text = "você está magro"
    } else if (imc < 24.9) {
        text = "você está normal"
    } else if (imc < 29.9) {
        text = "você está com sobrepeso"
    } else if (imc < 39.9) {
        text = "você está com obesidade"
    } else if (imc > 39.9) {
        text = "você está com obesidade mórbida"
    }
    document.getElementById("text_area").innerText=text
}