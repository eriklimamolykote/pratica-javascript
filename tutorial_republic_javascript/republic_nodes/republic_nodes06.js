// Selecionando todos os elementos li
var matches = document.querySelectorAll( "ul li" );

// Imprimindo o número de elementos li
document.write( "<p id = 'result'>Número de elementos selecionados: " + matches.length + "</p>" + "<hr>" );

// Imprimindo o conteúdo dos elementos li selecionados
for ( var elem of matches ) {

    document.write( elem.innerHTML + "<br>" );

}

// Aplicando estilo através de linha ao primeiro elemento li com classe tick
matches = document.querySelectorAll( "ul li.tick" );
matches[ 0 ].style.textDecoration = "line-through";