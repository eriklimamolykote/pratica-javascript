const x =
document.getElementsByClassName("intro");
document.getElementById("demo").innerHTML =
    'O primeiro parágrafo (index 0) com classe = "intro" é: ' +
        x[0].innerHTML;