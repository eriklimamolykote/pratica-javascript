var x; // Declaração de variável

x = 10;
document.write( "<p>" + ++x ); // Imprime: 11
document.write( "<p>" + x + "<p>" ); // Imprime: 11

x = 10;
document.write( "<p>" + x++ ); // Imprime: 10
document.write( "<p>" + x + "</p>" ); // Imprime: 11

x = 10;
document.write( "<p>" + --x ); // Imprime: 9
document.write( "<p>" + x + "</p>" ); // Imprime: 9

x = 10;
document.write( "<p>" + x-- ); // Imprime: 10
document.write( "<p>" + x + "</p>" ); // Imprime: 9