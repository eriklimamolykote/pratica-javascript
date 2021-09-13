class Car {
    constructor(name) {
        this.name = name;
    }
    static hello() {
        return "Olá!!!";
    }
}

let myCar = new Car("Ford");

// Você pode chama 'hello()' na Classe Car:
document.getElementById("demo").innerHTML = 
Car.hello();

// Mas NÃO no Objeto Car:
// document.getElementById("demo").innerHTML = myCar.hello();
// this causará um erro.