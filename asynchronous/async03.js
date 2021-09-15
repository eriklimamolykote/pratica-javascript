setTimeout(function() { myFunction("Eu te amo!!!"); }, 3000);

function myFunction(value) {
  document.getElementById("demo").innerHTML = value;
}