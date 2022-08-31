var person = {

    name: "Erik",
    age: 38,
    gender: "Male",
    displayName: function() {

        alert( this.name );

    }

};

document.write( "<p id='name'>" + person.name + "</p>" ); // Imprime: Erik
document.write( "<p id='age'>" + person.age + "</p>" ); // Imprime: 38
document.write( "<p id='gender'>" + person.gender + "</p>" ); // Imprime: Male
console.log( person );