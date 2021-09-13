class Car {
    constructor(brand) {
        this.carname = brand;
    }
    present() {
        return 'Eu tenho um ' + this.carname;
    }
}

class Model extends Car {
    constructor(brand, mod) {
        super(brand);
        this.model = mod;
    }
    show() {
        return this.present() + ', é um ' + this.model;
    }
}

let myCar = new Model("Fiat", "Idea");
document.getElementById("demo").innerHTML =
    myCar.show();