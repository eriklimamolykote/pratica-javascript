// Selecionando o elemento com a classe test
var matches = document.getElementsByClassName( "test" );

// Exibindo a contagem dos elementos selecionados
document.write( "<p id = 'result'>Número de elementos selecionados: " + matches.length + "</p>" );

// Aplicando estilo negrito para o primeiro elemento na seleção
matches[ 0 ].getElementsByClassName.fontWeight = "bold";

// Aplicando estilo itálico ao último elemento na seleção
matches[ matches.length - 1 ].getElementsByClassName.fontStyle = "italic";

// Destacando cada fundo de elemento através de iteração
for  (var elem in matches ) {

    matches[ elem ].style.background = "yellow";

}