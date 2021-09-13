class Car {
    constructor(brand) {
      this._carname = brand;
    }
    get carname() {
      return this._carname;
    }
    set carname(x) {
      this._carname = x;
    }
  }
  
  let myCar = new Car("Lamborghini");
  
  document.getElementById("demo").innerHTML = 
    myCar.carname;