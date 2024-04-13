// Seu desafio de hoje é criar os destinos possíveis de um jogo, em que o usuário consiga escolher:

// 1. Se quer seguir para área de Front-End ou seguir para a área de Back-End.

const prompt = require("prompt-sync")();

const area = prompt(
  "Você quer seguir para área de Front-End ou seguir para a área de Back-End? \t"
);

// 2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.

if (area == "Front-End" || area == "Front" || area == "front") {
  prompt("Você quer aprender React ou aprender Vue? \t");
} else if (area == "Back-End" || area == "Back" || area == "back") {
  prompt("Você quer aprender C# ou aprender Java? \t");
}

// 3. Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se especializando
// na área escolhida ou seguir se desenvolvendo para se tornar Fullstack. Você deve exibir na tela uma mensagem específica para cada escolha.

console.log(
  "Gostaria de seguir se especializando na Área escolhida ou seguir se desenvolvendo para se tornar Fullstack? \t"
);

const opcao = prompt(
  "Digite | 1 | para seguir se especializando e | 2 | para se tornar um Full Stack \t"
);

let tecnologias = []; // Array para armazenar as perguntas
let continuar = true; // Flag para controlar o loop

if (opcao === "1") {
  while (continuar) {
    perguntarTecnologia();

    let response = prompt("Deseja continuar? (S/N)");
    if (response.toLowerCase() === "N") {
      continuar = false;
    }

    console.log(tecnologias)
  }
}

else if(opcao === "2"){
    console.log("Desejo muito sucesso em sua caminhada de Full Stack")
    
}





function perguntarTecnologia() {
  let tecnologia = prompt(
    "Quais tecnologias você gostaria de se especializar ou de conhecer? "
  );

  tecnologias.push(tecnologia);
}

// 4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer. Aqui, a pessoa pode responder N tecnologias,
// uma de cada vez. Então, enquanto ela continuar respondendo ok para a pergunta: “Tem mais alguma tecnologia que você gostaria de aprender?”, continue apresentando para ela o Prompt, para que ela complete o nome da tecnologia em questão. E, logo depois, apresente uma mensagem comentando algo sobre a linguagem inserida.

// O importante é que a pessoa que estiver jogando possa sempre escolher qual decisão tomar para conseguir aprender e se desenvolver na área de programação.

// Além disso, também é essencial que, ao final do jogo, ela possa inserir quantas tecnologias quiser na lista de aprendizado.
