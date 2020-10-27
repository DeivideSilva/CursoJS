let amigo = {nome:'Jose', sexo:'M', idade:'25', peso:90.0, engordar(p = 0){
  console.log('Engordou!')
  this.peso += p
}}
amigo.engordar(5)
console.log(`${amigo} do sexo ${sexo} tem ${idade} anos e  pesa ${amigo.peso} Kg`)