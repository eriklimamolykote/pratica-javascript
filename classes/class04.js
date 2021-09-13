class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    age() {
        // date = new Date(); // Não vai funcionar
        let date = new Date(); // Não funcionar
        return date.getFullYear() - this.year;
    }
}

myCar = new Car("Fiat", 2008);
document.getElementById("demo").innerHTML = 
    "Meu carro possui " + myCar.age() + " anos.";