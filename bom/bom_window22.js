function myFunction() {
    let text;
    let person = prompt("Por favor, digite seu nome:", "");
    if (person == null || person == "") {
        text= "Usuário cancelou";
    } else {
        text = "Olá, " + person + "! Como você está hoje?";
    }
    document.getElementById("demo").innerHTML = text;
}