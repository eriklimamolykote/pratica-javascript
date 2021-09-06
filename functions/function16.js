let x = myFunction();
function myFunction() {
    return this;
}
document.getElementById("demo").innerHTML = x;