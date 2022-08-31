var person = {

    "first name": "Erik",
    "current age": 38,
    gender: "Male",

};

document.write( "<p id='name'>" + person[ "first name" ] + "</p>" ); // Imprime: Erik
document.write( "<p id='age'>" + person[ "current age" ] + "</p>" ); // Imprime: 38
document.write( "<p id='gender'>" + person[ "gender" ] + "</p>" ); // Imprime: Male
console.log( person );