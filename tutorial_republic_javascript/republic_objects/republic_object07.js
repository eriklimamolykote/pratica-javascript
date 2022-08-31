var person = {

    name: "Erik",
    age: 38,
    gender: "Male",
    displayName: function() {

        document.write( "<p id='name'>" + this.name + "</p>" );

    }

};

person.displayName(); // Imprime: Erik
document.write( "<br>" );
person[ "displayName" ](); // Imprime: Erik