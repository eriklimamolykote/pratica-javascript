var book = {

    "name" : "Harry Potter E O Cálice De Fogo",
    "author" : "J. K. Rowling",
    "year" : 2000

};

// Notação com ponto
document.write( "<p id='name'>" + book.name + "</p>" ); // Imprime Harry Potter E O Cálice De Fogo
document.write ( "<p id='author'>" + book.author + "</p>" ); // Imprime: J. K. Rowling
document.write( "<p id='year'>" + book.year + "</p>" ); // Imprime: 2000

// Notação com chave
document.write( "<p id='name'>" + book[ "name" ] + "</p>" ); // Imprime Harry Potter E O Cálice De Fogo
document.write ( "<p id='author'>" + book[ "author" ] + "</p>" ); // Imprime: J. K. Rowling
document.write( "<p id='year'>" + book[ "year" ] + "</p>" ); // Imprime: 2000