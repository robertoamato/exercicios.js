let x = 25
let y = 30

if (x > y) {
  console.log('x é maior que y')
} else {
  console.log('y é menor que x')
}

let CidadeGrande = 300.0;  // Definimos a variável 'CidadeGrande'

if (CidadeGrande >= 300.0) {
  console.log('Cidade Grande');  // Se CidadeGrande for maior ou igual a 200, imprime "Cidade Grande"
}

// Vamos corrigir o segundo bloco, usando 'CidadeGrande' para a segunda condição
if (CidadeGrande <= 200.0) {
  console.log('Cidade Média');  // Se CidadeGrande for menor que 300, imprime "Cidade Média"
} else {
  console.log('Cidade Pequena');  // Se não for menor que 300, imprime "Cidade Pequena"
}

function Aprovados(nota) {
  if (nota >= 5) {
    console.log (nota +  " voce foi aprovado")
    
  }else{
      console.log('voce foi reprovado ' + nota)
  } 
  
}

Aprovados(6)
Aprovados(5)
Aprovados(4)
Aprovados(1)

function Aprovados1(valor) {

  if (valor) {
    console.log('é verdade... ' + valor)
    
  }
  
}

Aprovados1()
Aprovados1(null)
Aprovados1(undefined)
Aprovados1(NaN)
Aprovados1('')
Aprovados1(0)
Aprovados1(-1)

function MegaCidades(habitantes) {
  if (habitantes >= 200.000) {
    return 'cidade é grande'
    
  }else 
    return 'cidade é pequena '
}

let saoPaulo = MegaCidades(300.000)
console.log(' Sao Paulo é uma ' + saoPaulo  );
let Campinas = MegaCidades ( 199.000)
console.log ( ' Campinas é uma  ' + Campinas );

// EXEMPLO DE ELSE/IF

// Função para verificar se um número está entre dois valores
Number.prototype.entre = function (inicio, fim) {
  return this >= inicio && this <= fim;
};

// Função para verificar se um número está entre dois valores
Number.prototype.entre = function (inicio, fim) {
  return this >= inicio && this <= fim;
};

// Define uma função anônima chamada 'imprimirResultado' que recebe uma nota como parâmetro
const imprimirResultado = function (nota) {

  // Verifica se a nota está entre 9 e 10
  if (nota.entre(9, 10)) {
      // Se a nota estiver nesse intervalo, imprime "Quadro de honra"
      console.log('Quadro de honra');

  // Verifica se a nota está entre 7 e 8.99
  } else if (nota.entre(7, 8.99)) {
      // Se a nota estiver nesse intervalo, imprime "Aprovado"
      console.log('Aprovado');

  // Verifica se a nota está entre 4 e 6.99
  } else if (nota.entre(4, 6.99)) {
      // Se a nota estiver nesse intervalo, imprime "Recuperação"
      console.log('Recuperação');

  // Verifica se a nota está entre 0 e 3.99
  } else if (nota.entre(0, 3.99)) {
      // Se a nota estiver nesse intervalo, imprime "Reprovado"
      console.log('Reprovado');

  // Se a nota não se encaixar em nenhum dos intervalos acima
  } else {
      // Imprime "Nota inválida" para notas que não são válidas
      console.log('Nota inválida');
  }
};

// Chama a função passando diferentes notas para testar os resultados
imprimirResultado(10);     // Esperado: "Quadro de honra"
imprimirResultado(8.9);    // Esperado: "Aprovado"
imprimirResultado(6.55);   // Esperado: "Recuperação"
imprimirResultado(2.3);    // Esperado: "Reprovado"
imprimirResultado(1.1);    // Esperado: "Reprovado"
