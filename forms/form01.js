function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("O nome deve ser preenchido");
        return false;
    } else {
        alert("OK");
        return true;
    }
}