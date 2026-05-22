let pozdrav = "Zdravím"; // Global Scope


function sayHello() { // Deklarace funkce
    let pozdravFunkce = "Pozdrav z funkce"  
    console.log(pozdravFunkce)
}

if(true) {
    let zprava = "Toto je bloková zpráva"
    console.log(zprava)
}


sayHello(); // Volání funkce

function pozdrav2(name) {
    console.log("Zdravím " + name);
}

pozdrav2("Honza")

function scitani(num1, num2) {
    console.log(num1 + num2)
}

scitani(2,5)

function nasobeni(num1, num2) {
    console.log(num1 * num2)
}

nasobeni(2,5)

function odcitani(num1, num2) {
    console.log(num1 - num2)
}

odcitani(2,5)

function deleni(num1, num2) {
    console.log(num1 / num2)
}

deleni(2,5)

function calc(num1, num2) {
    console.log(num1 + num2)
    console.log(num1 - num2)
    console.log(num1 * num2)
    console.log(num1 / num2)
}

calc(2,5)