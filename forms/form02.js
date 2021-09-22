function myFunction() {
    // obtém o valor do campo de entrada com id="numb"
    let x = document.getElementById("numb").value;
    // Se x não é um número ou menor que um ou maior que 10
    let text;
    if (isNaN(x) || x < 1 || x > 10) {
      text = "Entrada inválida. Tente novamente";
      document.getElementById("demo").style.background = "red";
      document.getElementById("demo").style.color = "white";
      document.getElementById("demo").style.width = "280px";
      document.getElementById("demo").style.border = "2px solid black";
    } else {
      text = "OK";
      document.getElementById("demo").style.background = "green";
      document.getElementById("demo").style.color = "white";
      document.getElementById("demo").style.width = "26px";
      document.getElementById("demo").style.border = "2px solid black";
    }
    document.getElementById("demo").innerHTML = text;
  }