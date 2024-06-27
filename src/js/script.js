var numeroGerado = null;

function gerar() {
    numeroGerado = parseInt(Math.random() * 100);
}

function verificar() {
    var bet = document.getElementById('bet').value;

    if(numeroGerado == null){
        alert('O jogo ainda não foi iniciado');
        return;
    }

    if(bet > 99 || bet < 0){
        alert('aposta inválida');
        return;
    }

    if(bet > numeroGerado){
        alert('O número gerado é MENOR');
    }
    else if(bet < numeroGerado){
        alert('O número gerado é MAIOR');
    }
    else{
        alert('Acertou!');
    }
}