function myFunction(a, b) {
    return arguments.length;
}

document.getElementById("demo").innerHTML =
    myFunction(4, 3);