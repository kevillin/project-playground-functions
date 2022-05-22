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
} //refatorado

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
} //refatorado

// Desafio 6 - [1, 9, 2, 3, 9, 5, 7]
function highestCount(listaNumeros) {
  let maiorNumero = 0;
  let menorNumero = 0;
  let contador = 0;
  let auxiliar = 0;

  for(let i = 0; i < listaNumeros.length; i += 1){
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
  for (let index = 0; index <= listaNumeros.length-1; index += 1) {
    if(listaNumeros[index] === maiorNumero){
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
function fizzBuzz(arrayNumeros) {
  let numeroParaPalavra = [];
  for (let index = 0; index < arrayNumeros.length; index += 1) {
    if(arrayNumeros[index] % 3 === 0 && !(arrayNumeros[index] % 5 === 0)){
      numeroParaPalavra.push("fizz");
    } else if(arrayNumeros[index] % 5 === 0 && !(arrayNumeros[index] % 3 === 0)){
      numeroParaPalavra.push("buzz");
    } else if(arrayNumeros[index] % 5 === 0 && arrayNumeros[index] % 3 === 0){
      numeroParaPalavra.push("fizzBuzz");
    } else {
      numeroParaPalavra.push('bug!')
    }
  }
  return numeroParaPalavra;
// acho que vai ser dois for aqui
}

// Desafio 9 - How are you today? || H4w 1r2 y45 t4d1y?
function encode(fraseLetras) {
  let letrasCodificadas = fraseLetras;

  for(let index = 0; index < fraseLetras.length; index += 1)
    if(fraseLetras[index] == String){
      letrasCodificadas.push(fraseLetras.encode());
    }
    return letrasCodificadas;
  } 
function decode(fraseLetras) {
  // let letrasDecodificadas = "";
  // for(let index = 0; index > fraseLetras.length-1; index += 1)
  //   if(fraseLetras[index] == Number){
  //   letrasDecodificadas = fraseLetras.decode(fraseLetras[index]);
  //   return letrasDecodificadas
  // }
} 

// Desafio 10
function techList(nomeTecnologia, nomePessoa) {
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
  techList,};
