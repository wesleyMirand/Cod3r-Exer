// tagged templates - processa o template dentro uma funcao
function tag ( partes,...valores) {
  console.log(partes)
  console.log(valores)
  return 'Outra string'
}

const aluno = 'Gui'
const situacao = 'Aprovado'
console.log(tag`${aluno} está ${situacao}.`)