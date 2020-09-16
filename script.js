let numero = parseFloat(prompt("Digite el número del cual desea saber la tabla de multiplicar: "))
let numeroMultiplicado = parseFloat(prompt("Digite hasta que número desea conocer esta tabla de multiplicación: "))
document.write("<h1>TABLA DE MULTIPLICAR DEL NÚMERO " + numero + "</h1>")
for (let i = 0; i <= numeroMultiplicado; i++) {
    document.write("<h1>"+numero + " X " + i + " = " + (numero*i) + "</h1>")
    
}