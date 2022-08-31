var person = {

    name: "Erik",
    age: 38,
    gender: "Male"

};

var key = prompt( "Digite um nome de propriedade para obter seu valor" );
alert( person[ key ] ); // Saída: Erik (se digitar "name")