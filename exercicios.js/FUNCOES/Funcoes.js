function SaudeFinanceira(ganhos, gastos) {
  if (ganhos > gastos ) {
    return 'Voce esta no azul'
  } else {
    return 'Voce esta no vermelho'
  }
}

const maria = SaudeFinanceira(1000, 11000)
const pedro = SaudeFinanceira(2999, 1000)
const roberto = SaudeFinanceira (10000, 3500)
console.log(maria)
console.log(pedro)
console.log(roberto)