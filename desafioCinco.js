// Então hoje, para facilitar a sua ida ao supermercado,
// você deve criar um programa em Javascript que perguntará se você deseja adicionar uma comida na sua lista de compras,
//  e você deve poder responder com sim ou não.

const prompt = require("prompt-sync")();

let frutas = [];
let laticinios = [];
let doces = [];
let congelados = [];
let comida = "";
let categoria = "";

let addMaisComida = "sim";

let remover = "";

while (addMaisComida != "nao") {
  addMaisComida = prompt(
    "Gostaria de adicionar uma comida na lista de compras? 'sim' ou 'nao'? \t"
  );

  while (
    addMaisComida != "sim" &&
    addMaisComida != "nao" &&
    adicionarMais != "remover"
  ) {
    console.log(`Operação não reconhecida! `);
    addMaisComida = prompt(
      "Gostaria de adicionar uma comida na lista de compras? 'sim' ou 'nao'? \t"
    );
  }

  if (addMaisComida === "nao") {
    break;
  }

  if (adicionarMais === "sim") {
    comida = prompt("Qual comida gostaria de adicionar? \t");

    console.log(
      "\n CATEGORIAS \n 1. frutas \n 2. laticínios \n 3. doces \n 4. congelados \n"
    );

    categoria = prompt(
      "Em qual categoria essa comida se encaixa: '1. frutas', '2. laticinios', '3. doces' ou '4. congelados'? "
    );

    if (categoria === "frutas" || categoria === "1") {
      frutas.push(comida);
    } else if (categoria === "laticinios" || categoria === "2") {
      laticinios.push(comida);
    } else if (categoria === "doces" || categoria === "3") {
      doces.push(comida);
    } else if (categoria === "congelados" || categoria === "4") {
      congelados.push(comida);
    } else {
      console.log("Essa categoria não foi definida");
    }
  } else if (adicionarMais === "remover") {
    if (
      frutas.length === 0 &&
      laticinios.length === 0 &&
      doces.length === 0 &&
      congelados.length === 0
    ) {
      //se a lista estiver vazia (tratamento de bug, caso a pessoa digite "remover" mesmo quando forem exibidas apenas as opções "sim" e "não"
      alert(`A lista está vazia!`);
    } else {
      //se a lista não estiver vazia
      remover = prompt(
        `Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}\n\nQual produto você deseja remover?`
      );
      if (frutas.indexOf(remover) != -1) {
        frutas.splice(frutas.indexOf(remover), 1);
  
        alert(`O item ${remover} foi removido com sucesso!`);

      } else if (laticinios.indexOf(remover) != -1) {

        laticinios.splice(laticinios.indexOf(remover), 1);

        alert(`O item ${remover} foi removido com sucesso!`);

      } else if (doces.indexOf(remover) != -1) {

        doces.splice(doces.indexOf(remover), 1);

        alert(`O item ${remover} foi removido com sucesso!`);

      } else if (congelados.indexOf(remover) != -1) {

        congelados.splice(congelados.indexOf(remover), 1);

        alert(`O item ${remover} foi removido com sucesso!`);
        
      } else {
        alert(`Não foi possível encontrar o item dentro da lista!`);
      }
    }
  }

  console.log(
    `Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}`
  );
}

// Em seguida, ele perguntará qual comida você deseja inserir, e você digitará o nome dela, como por exemplo batata.

// Depois, ele deverá perguntar em qual categoria essa comida se encaixa, com algumas opções já pré-definidas,
// como frutas, laticínios, congelados, doces e o que mais você achar interessante. Assim, você poderá separar tudo no seu devido grupo.

// Por fim, caso você não queira mais adicionar nada na lista de compras e responder não na primeira pergunta,
// ele irá exibir uma lista com todos os itens agrupados, da seguinte forma:

// Caso você adicione na sua lista:
// banana, leite em pó, tomate, leite vegetal, chiclete, bala de ursinho, maçã, uva, abacate e leite de vaca

// O programa deverá imprimir, por exemplo:

// OUTPUT
// Lista de compras:
//     Frutas: banana, tomate, maçã, uva, abacate
//     Laticínios: leite vegetal, leite de vaca, leite em pó
//     Congelados:
//     Doces: chiclete e bala de ursinho
