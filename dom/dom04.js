const x = document.getElementById("main");
const y = x.getElementsByTagName("p");

document.getElementById("demo").innerHTML =
    'O primeiro parágrafo (index 0) dentro de "main" é: ' + 
        y[0].innerHTML;