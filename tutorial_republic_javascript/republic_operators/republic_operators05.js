var year = 2022;

// Anos bissextos são divisíveis por 400 ou por 4, mas não por 100
if ( ( year % 400 == 0 ) || ( ( year % 100 != 0 ) && ( year % 4 == 0 ) ) ) {

    document.write( year + " é um ano bissexto." );

} else {

    document.write( " não é um ano bissexto." );
    
}