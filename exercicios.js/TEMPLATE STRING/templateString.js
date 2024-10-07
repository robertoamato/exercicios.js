const nome = 'rebeca';
// Define uma variável chamada 'nome' que armazena a string 'rebeca'.
// Em outras palavras, o valor da variável 'nome' é 'rebeca'.

const concatenacao = 'Olá' + nome + '!';
// Cria uma variável chamada 'concatenacao' que combina ('concatena') várias partes de texto.
// 'Olá' + nome + '!' resulta em 'Olá rebeca!'. O símbolo '+' junta as strings ('Olá', 'rebeca' e '!') em uma única frase.

const template = ` Olá ${nome}!`
// Aqui criamos uma variável chamada 'template' usando uma sintaxe chamada "template string".
// Com as crases (` `), podemos inserir variáveis diretamente dentro do texto, usando ${variavel}.
// Isso faz o mesmo que a linha anterior, criando a frase 'Olá rebeca!', mas de forma mais fácil e legível.

console.log(concatenacao, template);
// Exibe os valores das variáveis 'concatenacao' e 'template' no console.
// O console vai mostrar duas vezes a frase 'Olá rebeca!', uma para cada variável.
