


const prompt = require("prompt-sync")();

let lista = [];

let continuar = true;

let opcao, elemento;

function InserirElementoNoInicio(elemento){

    if(lista.length == 0 ){
        console.log("A lista está vazia!")
    }
    
    console.log("Elemento Inserido no Inicio da lista");
    console.clear();

    return lista.unshift(elemento);
    
}

function InserirElementoNoFinal(elemento){

    if(lista.length == 0 ){
        console.log("A lista está vazia!")
    }

    console.log("Elemento Inserido no Final da lista");
    
    console.clear();

    return lista.push(elemento);


}

function ConsultarPorPosicao(posicao){



let valor, index;

index = lista.findIndex((item) => item == posicao);

valor = lista[posicao];

if(lista.length == 0 ){
        console.log("A lista está vazia!")
}

console.clear();

console.log(`o Valor da posição ${posicao} é : ${valor}`);

}

function RemoverElementoDoInicio(){
    
    if(lista.length == 0 ){
        console.log("A lista está vazia!")
    }

    console.log("Elemento do inicio removido!");

    console.clear();

    return lista.shift();
}

function RemoverElementoDoFinal(){
   
    if(lista.length == 0 ){
        console.log("A lista está vazia!")
    }

    console.log("Elemento do final removido!");

    console.clear();

    return lista.pop();
}

function ExibirTamanhoDaLista(){


    if(lista.length == 0 ){
        console.log("A lista está vazia!")
    }

    console.clear();


    console.log(`O tamanho da lista é de: ${lista.length}`);
}

function ImprimirLista(){

    if(lista.length == 0 ){
        console.log("A lista está vazia!")
    }

    console.clear();
    console.log(`Os elementos da Lista: ${lista}`);
}

function SairDoSistema(){
    console.log("Até mais!!")

    continuar = false;
}



while(continuar){

console.log("\n'1' para Inserir elemento no inicio da lista");
console.log("'2' para Inserir elemento no final da lista");
console.log("'3' para Consultar elemento pela posicao");
console.log("'4' para Remover elemento do inicio");
console.log("'5' para Remover elemento do final");
console.log("'6' para Exibir tamanho da lista");
console.log("'7' para Imprimir a lista");
console.log("'s' para Sair\n\n");

opcao = prompt("Qual opção você deseja executar?");

switch(opcao){
    case '1':
        elemento = prompt("Digite qual elemento você gostaria de adicionar")
        InserirElementoNoInicio(elemento);
        break;
    case '2':
        elemento = prompt("Digite qual elemento você gostaria de adicionar")
        InserirElementoNoFinal(elemento);
        
        break;
    case '3':
        elemento = prompt("Digite qual posiçao você gostaria de filtrar")
        ConsultarPorPosicao(elemento);
        break;
    case '4':
        RemoverElementoDoInicio();
        break;
    case '5':
        RemoverElementoDoFinal();
        break;
    case '6':
        ExibirTamanhoDaLista();
        break;
    case '7':
        ImprimirLista();
        break;
    case 's':
        SairDoSistema();

}

}
