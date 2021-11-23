function myFunction() {
    var txt;
    if (confirm("Pressione um botão")) {
        txt = "Você pressionou 'OK'";
    } else {
        txt = "Você pressionou 'Cancelar'";
    }
    document.getElementById("demo").innerHTML = txt;
}