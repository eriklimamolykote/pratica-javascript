var x = document.getElementById("myBtn");
x.addEventListener("mouseover", myFunction);
x.addEventListener("click", mySecondFunction);
x.addEventListener("mouseout", myThirdFunction);

function myFunction() {
    document.getElementById("demo").innerHTML += 
        "Passou o mouse!<br>";
    document.getElementById("demo").style.background = "purple";
    document.getElementById("demo").style.color = "white";
    document.getElementById("demo").style.border = "2px solid black";
    document.getElementById("demo").style.width = "560px";    
}

function mySecondFunction() {
    document.getElementById("demo").innerHTML += 
        "Clicou!<br>";
    document.getElementById("demo").style.background = "orange";
    document.getElementById("demo").style.color = "white";
    document.getElementById("demo").style.border = "2px solid black";
    document.getElementById("demo").style.width = "560px";      
}

function myThirdFunction() {
    document.getElementById("demo").innerHTML += 
        "Tirou o mouse do lugar!<br>";
    document.getElementById("demo").style.background = "green";
    document.getElementById("demo").style.color = "white";
    document.getElementById("demo").style.border = "2px solid black";
    document.getElementById("demo").style.width = "560px";  
}