const escola = 'cod3r';
// Define uma constante chamada 'escola' que armazena a string 'cod3r'

console.log(escola.charAt(4));
// Imprime o caractere que está na posição 4 da string 'cod3r'. A contagem começa em 0, então 'r' será exibido, pois 'c' é a posição 0, 'o' é a 1, 'd' é a 2, '3' é a 3, e 'r' é a 4.

console.log(escola.charAt(5));
// Tenta imprimir o caractere na posição 5. Como a string 'cod3r' tem apenas 5 caracteres (0 a 4), não existe posição 5, e será impresso um valor vazio.

console.log(escola.charCodeAt(3));
// Imprime o código ASCII do caractere que está na posição 3 da string 'cod3r'. O caractere na posição 3 é o número '3', e seu código ASCII é 51.

console.log(escola.indexOf('3'));
// Imprime o índice (posição) em que o caractere '3' aparece na string 'cod3r'. Como '3' está na posição 3, o número 3 será exibido.

console.log(escola.substring(1));
// Imprime a string a partir da posição 1 até o final. Isso significa que será impresso 'od3r', ignorando o primeiro caractere ('c').

console.log(escola.substring(0, 3));
// Imprime a substring que vai da posição 0 até a posição 3 (não incluindo a posição 3). Será impresso 'cod', pois são os caracteres das posições 0, 1 e 2.

console.log('Escola'.concat(escola).concat("!"));
// Usa o método 'concat' para concatenar (juntar) a string 'Escola' com o valor da variável 'escola' ('cod3r') e com o caractere '!' no final. O resultado impresso será 'Escolacod3r!'.
