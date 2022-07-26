function sayHello( name = 'mundo' ) {

    return `Olá, ${name}!`;

}

document.write( sayHello() ); // Olá, mundo!
document.write( "<br>" );
document.write( sayHello( 'Erik' ) ); // Olá, Erik!