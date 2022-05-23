// Desafio 11
function generatePhoneNumber(phoneNumber) {
  let correctNumber = "";
  let contadorNumeroRepetido = 0;
  
  if (phoneNumber.length !== 11){
    return 'Array com tamanho incorreto.'
  }

  for(index = 0; index < phoneNumber.length; index += 1){
    if(phoneNumber[index] > 9 || phoneNumber[index] < 0){
      return 'não é possível gerar um número de telefone com esses valores';
    }
    for(indexRepeticao = 0; indexRepeticao < phoneNumber.length; indexRepeticao += 1){
      if(phoneNumber[index] === phoneNumber[indexRepeticao]){
         contadorNumeroRepetido += 1; 
      }
    }   
    if(contadorNumeroRepetido >= 3){
      return 'não é possível gerar um número de telefone com esses valores';
    }
    contadorNumeroRepetido = 0; 
  }

    correctNumber = "("+ phoneNumber[0] + phoneNumber[1] +") "+ phoneNumber[2] + phoneNumber[3] + phoneNumber[4] + phoneNumber[5] + phoneNumber[6]+ "-" + phoneNumber[7] + phoneNumber[8] + phoneNumber[9] + phoneNumber[10];
  return correctNumber;
}
generatePhoneNumber([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 5])

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if(lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)){
    return true
  } else if(lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)){
    return true
  } else if (lineC< lineA + lineB && lineC > Math.abs(lineA - lineB)){
    return true
  } else {
    return false
  }
}

// Desafio 13
function hydrate(stringRecebida) {
 let numeros = /\d+/g;
 let resultado1 = stringRecebida.match(numeros);
 let numerosSomados = 0;
 
 for(let index = 0; index < resultado1.length; index += 1){
  if(resultado1.length >= 1){
    let numerosParaString = parseInt(resultado1[index]) 
    numerosSomados += numerosParaString;
  }
 }
  if (resultado1.length == 1) {
    return numerosSomados + " copo de água";
  } else {
    return numerosSomados + " copos de água";
  }

}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
