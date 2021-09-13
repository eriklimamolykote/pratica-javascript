class Car {
    constructor(brand) {
      this.carname = brand;
    }
    get cnam() {
      return this.carname;
    }
    set cnam(x) {
      this.carname = x;
    }
  }
  
  let myCar = new Car("Porsche");
  
  document.getElementById("demo").innerHTML = myCar.cnam;