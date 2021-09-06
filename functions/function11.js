function myFunction(x, y) {
    if (y === undefined) {
        y = 2;
    }
    return x * y;
}

document.getElementById("demo").innerHTML =
    myFunction(4);