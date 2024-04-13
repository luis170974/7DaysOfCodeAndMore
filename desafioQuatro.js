// Você já brincou de tentar adivinhar o número que seu amigo ou amiga estava pensando? 

// Hoje você vai voltar na infância e fazer exatamente isso. Mas agora, o jogo vai ser contra o próprio computador!

// Você deve criar um programinha que comece com um valor específico pré-definido entre 0 a 10 para o número que você vai adivinhar (7, por exemplo).

const prompt = require('prompt-sync')();

let numeroAleatorioEscolhido = Math.floor(Math.random() * 11);

let contadorDeChances = 3;

let acertou = false

while(contadorDeChances > 0 && !acertou ){

const palpite = parseInt(prompt("Digite um numero \t"));


if(palpite === numeroAleatorioEscolhido){
    acertou = true;
    console.log(`Parabéns, Você acertou o numero sorteado, ele era o ${numeroAleatorioEscolhido}`)

}

else {

    prompt(`Você errou \t`)

    console.clear()

    contadorDeChances--;

    console.log(`Tente novamente, você tem um total de ${contadorDeChances} chances \t`)



    if(contadorDeChances === 0){
        console.log(`Suas chances acabaram, o numero escolhido era o ${numeroAleatorioEscolhido} \t`)
        break

    }



}

if(palpite > 10){
    console.clear()
    console.log("Numero invalido, somente numeros de 0 a 10")
    return
}




}









// Em seguida, o programa vai perguntar para você qual o valor que você deseja chutar e, caso você acerte, ele irá te parabenizar. 

// Caso erre, ele vai te dar mais 2 tentativas.

// No fim, caso você não acerte nenhuma vez, ele vai imprimir qual era o número inicial.

// Depois que o programinha estiver funcionando, tente usar um número randômico em vez de um número pré-definido.