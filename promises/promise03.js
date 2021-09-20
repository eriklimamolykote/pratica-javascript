function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
}

let myPromise = new Promise(function(myResolve, myReject) {
    let req = new XMLHttpRequest();
    req.open('GET', "jaguar.html");
    req.onload = function() {
        if (req.status == 200) {
            myResolve(req.response);
        } else {
            myReject("Arquivo não encontrado");
        }
    };
    req.send();
});

myPromise.then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
);