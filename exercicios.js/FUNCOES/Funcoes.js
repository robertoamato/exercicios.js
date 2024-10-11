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
