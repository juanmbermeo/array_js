//acceder a los primeros elementos de un array

document.write("<h2>Elementos de una array</h2>")
const numbers = [1, 2, 3, 4, 5]
let index = 4

document.write("El arreglo en su primera posicion es: "+numbers[0]+"<br>")

document.write("El arreglo en la posicion dos es: "+numbers[2]+"<br>")

//Puedes usar variables para acceder a los elementos de un array.

document.write("la variable index corresponde a: "+numbers[index]+"<br>")

//Modificar elementos de un array

numbers[0] = 10
numbers[2] = 30

document.write("El array modificado es: "+numbers+"<br>")

document.write("<h3>La longitud de un array</h3>")

const frutas = ["manzana", "pera", "plátano", "fresa"]

document.write("El array de frutas es: "+frutas+"<br>")
document.write("El array tiene una longitud de: "+frutas.length+"<br>")

document.write("<h4>Arrays con .push()</h4>")

const fruit = ["plátano", "fresa"]
document.write("El numero de frutas es: "+fruit.length+"<br>")

const newfruit = fruit.push("naranja")
document.write("El numero de frutas despues del push es: "+newfruit+"<br>")
document.write(fruit+"<br>")

document.write("<h4>Arrays con .pop()</h4>")

const ultimaFruta = fruit.pop()

document.write("Estas son las frutas del inicio " +fruit+"<br>")
document.write("Esta es la fruta eliminada " +ultimaFruta+"<br>")

document.write("<h4>Arrays con .shift()</h4>")

const frut = ["plátano", "fresa", "naranja"]
const primeraFruta = frut.shift()

document.write("estas son las frutas que quedan: "+frut+"<br>")
document.write("esta es la primera fruta: "+ primeraFruta+"<br>")

document.write("<h4>Arrays con .unshift()</h4>")

const fruta = ["plátano", "fresa", "naranja"]
fruta.unshift("manzana")

document.write("Estas son todas las frutas: " +fruta+"<br>")

//concatenar array
document.write("<h3>concatenar array</h3>")

const num = [1, 2, 3]
const num2 = [4, 5]

const allNum = num.concat(num2)

document.write("Esta es la union de los numeros: " +allNum+ "<br>") 

//bucles
document.write("<h3>Bucles</h3>")

document.write("<h4>Bucle con while</h4>")

let fr = ['🍎', '🍌', '🍓']
let i = 0

while (i < frutas.length) {
    document.write(fr[i])
    i++
}
