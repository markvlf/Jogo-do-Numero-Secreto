let listaNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();

let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});

}

function exibirTexto() {
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${numeroLimite}`);
}

exibirTexto();

function verificarChute() {

    let chute = document.querySelector('input').value;


    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagem = `Você acertou o número secreto com ${tentativas} ${palavraTentativa}.`;

        exibirTextoNaTela('p', mensagem);
        document.getElementById('reiniciar').removeAttribute('disabled');

    }else {
        if(chute > numeroSecreto) {
            
            exibirTextoNaTela('p', 'O número secreto é menor');

        }else {
            
            exibirTextoNaTela('p','O número secreto é maior');
        }

        tentativas++;
        limparTela();
    }

    
}


function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeNumerosSorteados = listaNumerosSorteados.length;

    if (quantidadeDeNumerosSorteados == 10) {
        listaNumerosSorteados = [];
    }
    if(listaNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    
    }else {
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados);
        return numeroEscolhido;
    }

    
    

}

function limparTela () {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    exibirTexto();
    limparTela();
    tentativas = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true);

}