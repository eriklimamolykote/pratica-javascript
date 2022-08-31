var person = {

    name: "Erik",
    age: 38,
    gender: "Male"

};

// Configurando uma nova propriedade
person.country = "Brazil";
document.write( "<p id='country'>" + person.country + "</p>"); // Imprime: Brazil

person[ "email" ] = "seu_email@seu_provedor.com";
document.write( "<p id='email'>" + person.email + "</p>" ); // Imprime: seu_email@seu_provedor.com

// Atualizando propriedade existente
person.age = 39;
document.write( "<p id='age'>" + person.age + "</p>"); // Imprime: 39

person[ "name" ] = "Erikucho da Bahia";
document.write( "<p id='name'>" + person.name + "</p>" ); // Imprime: Erikucho da Bahia