let peso = document.getElementById('peso')
let altura = document.getElementById('altura')
let resultado = document.getElementById('resultado')
let botao = document.getElementById('botao')

let classificacao

botao;onclick = () => {
    let imc = number(peso/value) / (number(altura.value*altura.value))
if(imc < 18.5){
    classifcacao = "Baixo Pesso"
}else if((imc > 18.5) && (imc <= 24.9)){
    classifcacao = "Peso Normal"
}else if((imc > 25) && (imc <= 29.9)){
    classifcacao = "Sobrepeso"
}else if((imc > 30) && (imc <= 34.9)){
    classifcacao = "Obesidade I"
}else if((imc > 35) && (imc <= 39.9)){
    classifcacao = "Obesidade II"
}else ((imc > 40) && (imc <= 44.9)) {
    classifcacao = "Obesidade III"
} 
resultado.innerText = `Śeu imc é ${imc} \n classificação: ${classificacao}`
}
