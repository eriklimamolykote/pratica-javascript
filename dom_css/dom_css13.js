var x = document.getElementById("myBtn");
x.addEventListener("click", myFunction);
x.addEventListener("click", someOtherFunction);

function myFunction() {
    alert("Olá, Mundo! :)");
}

function someOtherFunction() {
    alert("Porra, velho! Cê clicou de novo, mané?!? :(");
}