setTimeout(function() { myFunction("Eu te amo!!!"); }, 3000);

function myFunction(value) {
    document.getElementById("demo").innerHTML =
        value;
    document.getElementById("demo").style.background = "pink";   
    document.getElementById("demo").style.color = "white"; 
}