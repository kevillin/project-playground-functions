// Desafio 1
function compareTrue(param1, param2) {
  if (param1 && param2) {
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  let areaTringulo = (base * height) / 2;
  return areaTringulo;
}

// Desafio 3
function splitSentence(stringExterna) {
  let arrayTeste = stringExterna.split(" ");

  return arrayTeste;
}

// // Desafio 4
// function concatName(nome) {
//   let ultimoNome = nome.length-1;

//   console.log(ultimoNome)

//   return ultimoNome, primeiroNome;
// }

// Desafio 5
function footballPoints(wins, ties) {

  let pontosTotais = (wins *3) + (ties * 1);
  
  return pontosTotais;
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
