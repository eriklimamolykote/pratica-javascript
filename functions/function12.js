function myFunction(x, y = 2) {
    return x * y;
}

document.getElementById("demo").innerHTML =
    myFunction(4);