// Exemplos de funcoes

// Funcao classica

function GanhosEGastos(Ganhos, gastos) {
  if (Ganhos > gastos) {
    return "voce esta no azul"
    
  }else{
    return "voce esta no vermelho"
  }

}

let marcos = GanhosEGastos (3000,5000)
console.log(marcos);

// Function do tipo void

function soma( numero1,  numero2) {
   const SomaDosNumero = numero1 + numero2
   console.log(SomaDosNumero);
  }
 soma(1000,2000)
 
 function soma1(numero3, numero4) {
  let calcular =numero3 + numero4
  console.log(calcular);
 
 }
 soma1(1900,1500)
