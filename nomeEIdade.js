const nome = process.argv[2]
const idade = Number(process.argv[3])
const novaIdade = Number(process.argv[3])+7

if(!nome || !idade){
  console.log('Informe seu nome e idade')
}else{
  console.log(`Olá, ${nome}! Você tem ${idade} anos.`)
  console.log(`Em sete anos você terá ${novaIdade}`)
}