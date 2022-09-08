// Exibe valor do atributo de linguagem do elemento html
alert( document.documentElement.getAttribute( "lang" ) ); // Saída: en

// Configura cor de fundo do elemento de corpo
document.body.style.background = "yellow";

// Exibe o nome do rótulo do primeiro filho do elemento de cabeçalho
alert( document.head.firstElementChild.nodeName ); // Saída: meta