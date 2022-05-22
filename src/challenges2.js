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

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
