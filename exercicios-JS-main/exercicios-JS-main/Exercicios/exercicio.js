const lista = ['Bike', 'Moto', 'Carro']

// console.log(lista[1])
 
let espaco = document.querySelector(".lista")
console.log(espaco)

function adcLista(){
    
    lista.forEach(element => {
       espaco.innerHTML += element = `<br> ${lista}`
    });
}