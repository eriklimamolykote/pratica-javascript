var str = "Se os fatos não se ajustam à teoria, mude os fatos.";

// Procurando à frente
var pos1 = str.indexOf( "fatos", 20 );
alert( pos1 ); // Imprime: 45

// Procurando REversamente
var pos2 = str.lastIndexOf( "fatos", 20 );
alert( pos2 ); // Imprime: 6