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
function splitSentence(frase) {

  return frase.split(" ");
}

// Desafio 4
function concatName(listaNomes) {
  
  let nomes = [];
  nomes = listaNomes[listaNomes.length-1] + ", " + listaNomes[0];

  return nomes;
}

// Desafio 5
function footballPoints(wins, ties) {
  let ganhou = 3;
  let pontosTotais = (wins * ganhou) + (ties);

  return pontosTotais;
}

// Desafio 6 - [1, 9, 2, 3, 9, 5, 7]
function highestCount(listaNumeros) {
  let maiorNumero = 0;
  let menorNumero = 0;
  let contador = 0;
  let auxiliar = 0;

  for(let i = 0; i < listaNumeros.length; i++){
    menorNumero = i;
    for(let j = i + 1; j < listaNumeros.length; j++){
      if(listaNumeros[j] < listaNumeros[menorNumero]){
        menorNumero = j;
      }
    }
    if (menorNumero != i){
      auxiliar = listaNumeros[menorNumero];
      listaNumeros[menorNumero] = listaNumeros[i];
      listaNumeros[i] = auxiliar;
    }
  }

  maiorNumero = listaNumeros[listaNumeros.length-1];
  for (let index = 0; index < listaNumeros.length; index++) {
    if(listaNumeros[index] == maiorNumero){
      contador += 1;
    }
    
  }

  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {

  let mouseParaCat1;
  let mouseParaCat2;
  
  if (mouse > cat1){
    mouseParaCat1 = (mouse - cat1);
 } else {
    mouseParaCat1 = (cat1 - mouse);
 }

 if (mouse > cat2){
  mouseParaCat2 = (mouse - cat2);
} else {
  mouseParaCat2 = (cat2 - mouse);
}

  if(mouseParaCat1 > mouseParaCat2){
    return "cat2";
  }
  if(mouseParaCat2 > mouseParaCat1){
  return "cat1"
  }
  if (mouseParaCat1 === mouseParaCat2) {
    return "os gatos trombam e o rato foge";
  }
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
