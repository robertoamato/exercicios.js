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