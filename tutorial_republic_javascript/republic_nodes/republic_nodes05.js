// Selecionando todos os elementos de parágrafo
var matches = document.getElementsByTagName( "p" );

// Imprimindo o número de parágrafos selecionados
document.write( "Número de elementos selecionados: " + matches.length );

// Destacando cada fundo de parágrafo através de iteração
for ( var elem in matches ) {

    matches[ elem ].style.background = "yellow";

}