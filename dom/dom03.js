const element = 
document.getElementsByTagName("p");

document.getElementById("demo").innerHTML = 'O texto no primeiro parágrafo (índice 0) é: ' +
    element[0].innerHTML;