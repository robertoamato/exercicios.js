function SaudeFinanceira(receitas, gastos) {
  if (receitas < gastos) {
    return 'Voce esta no vermelho'
    
  }else{
    return 'Voce esta no azul'

  }
 
}

const maria = SaudeFinanceira (1000,11000);  
const pedro = SaudeFinanceira (2999, 1000)

console.log(maria)
console.log(pedro)