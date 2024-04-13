// Neste último desafio, a minha proposta para você é: crie a sua própria calculadora, 
// porém com um detalhe muito 

// importante: cada operação deverá ser uma função diferente no seu código.



// Depois, ela deverá inserir os dois valores que deseja utilizar, 

// e o programa imprimirá o resultado da operação em questão.

// As opções disponíveis deverão ser: soma, subtração, multiplicação, divisão, e sair. 

// Nessa última, o programa deverá parar de ser executado, mostrando uma mensagem "Até a próxima".

function realizarAdicao(numero1, numero2){

    return Number(numero1) + Number(numero2);
}


function realizarSubtracao(numero1, numero2){
    
    return Number(numero1) - Number(numero2);
}

function realizarMultiplicacao(numero1, numero2){
    
    return Number(numero1) * Number(numero2);
}


function  realizarDivisao(numero1, numero2){

    if(numero2 == 0){
        console.log("Não é possivel dividir um numero por 0")
    }

    else{
        return Number(numero1) / Number(numero2);
    }
    
    
}


const prompt = require("prompt-sync")();

let continuar = true;

let numero1;
let numero2;

let operacao

// Primeiramente, a pessoa deverá escolher uma opção de operação impressa pelo programa na tela.

while(continuar){


console.log("\n'+' para realizar adição");
console.log("'-' para realizar subtração");
console.log("'*' para realizar multiplicação");
console.log("'/' para realizar divisão");
console.log("'s' para sair\n");



operacao = prompt("Qual operação você deseja realizar?");

if(operacao === 's'){
    console.log("Até a próxima")
    break;
}

numero1 = prompt(`Insira o primeiro numero:`);
numero2 = prompt(`Insira o segundo numero:`);

switch(operacao){
    case '+':
        console.log(`\n\n O resultado da soma é ${realizarAdicao(numero1, numero2)}\n\n`);
        break;
    case '-':
        console.log(`\n\n O resultado da subtração é ${realizarSubtracao(numero1, numero2)}\n\n`);
        break;
    case '*':
        console.log(`\n\n O resultado da multiplicação é ${realizarMultiplicacao(numero1, numero2)}\n\n`);
        break;
    case '/':
        console.log(`\n\n O resultado da divisão é ${realizarDivisao(numero1, numero2)}\n\n`);
        break;
    
}

}













