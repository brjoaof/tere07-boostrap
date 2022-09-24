// Comentário de linha

/*
    Comentário de Múltiplas Linhas
*/

// Imprime mensagens no console
console.log("Hello World!"); 

// Mostra uma Janela de Alerta com Botão de OK
// alert("Hello World!");

//Abre caixa de diálogo que espera um texto como resposta
// const nome = prompt("Qual é o seu nome?");

// Tipos de Variáveis - const, let, var;
// const - É um valor constante que não muda;
// let - Valor variável mais utilizado;
// var - similar ao let, mas tem um problema de escopo

const idade = 21;
let estadoCivil = "solteiro";


// Funções
function imprimeNoConsole() {
    console.log("Função Imprime no Console ativada com sucesso");
}

// Chamando uma função
// imprimeNoConsole();

const user = {
    email: "joao@gmail.com",
    senha: 'senha@123'
}

//Função para Capturar os dados de login e senha
function login() {
    const email = document.querySelector("#email");
    const senha = document.querySelector('#senha');

    if(email.value == "" || senha.value == "") {
        alert("Preencha todos os Campos");
        return
    }
    
    if(email.value == user.email && senha.value == user.senha) {
        alert("Senha Correta!")
    } else {
        alert("Sai daqui, hacker!")
    }

    email.value = ""
    senha.value = ""
}

function switchTheme() {
    const botao = document.querySelector("#flexSwitchCheckDefault")

    if(botao.checked){
        document.body.style.backgroundColor = '#000'
        document.body.style.color = '#fff'
    } else {
        document.body.style.backgroundColor = '#fff'
        document.body.style.color = '#000'
    }
}