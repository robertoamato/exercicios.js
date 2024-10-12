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

 function DizerOla() {
  console.log("olá mundo");
  
 }

 DizerOla()
 soma(2800, 100)
 soma1(5000,10)
 
 function NotaDoAluno(nota10,nota5) {
  if (nota10 > nota5) {
    return "aluno passou de ano"
    
  }else{
    return "aluno reprovou"

  }
  
 }
 let roberto = NotaDoAluno(10,10)
 console.log(roberto);