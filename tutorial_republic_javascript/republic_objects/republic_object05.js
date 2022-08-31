var person = {

    name: "Erik",
    age: 38,
    gender: "Male"

};

// Iterando sobre as propriedades do objeto
for ( var i in person ) {

    document.write( "<p>" + person[ i ] + "</p>" ); // Imprime: nome, idade e gênero
}
