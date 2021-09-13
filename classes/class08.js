class Car {
    constructor(brand) {
      this._carname = brand;
    }
    set carname(x) {
      this._carname = x;
    }
    get carname() {
      return this._carname;
    }
  }
  
  let myCar = new Car("Ford");
  myCar.carname = "Ford";
  document.getElementById("demo").innerHTML = 
    myCar.carname;
    
    if (myCar.carname == "Ford") {
    document.getElementById("demo").style.background = "darkblue";
  } else if (myCar.carname == "Porsche") {
      document.getElementById("demo").style.background = "orange";
  } else if (myCar.carname == "Ferrari") {
      document.getElementById("demo").style.background = "red";
  } 
  else {
    document.getElementById("demo").style.background = "lightgrey";
  }  