
let amigos = [];

function limparCampo () {
    inputAmigo = document.querySelector ('amigo');
    inputAmigo.value = '';
}

function adicionarAmigo () {
    let inputAmigo = document.getElementById ('amigo');
    let nomeAmigo = inputAmigo.value;

    if (!nomeAmigo) {
        alert ('Por favor, insira um nome');
        return;
    } else {
        amigos.push (nomeAmigo);
        inputAmigo.value = '';
        atualizarLista ();
    }

};

function atualizarLista () {
    let listaAmigos = document.getElementById ('listaAmigos');
    listaAmigos.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        let itemLista = document.createElement ('li');
        itemLista.textContent = amigos[i];
        listaAmigos.appendChild (itemLista);
    }
}

function sortearAmigo () {
    if (amigos.length < 2) {
        alert ('Por favor, adicione mais amigos');
        return;
    }
    else {
        let amigoSorteado = amigos [Math.floor (Math.random () * amigos.length)];
        let resultado = document.getElementById ('resultado');
        resultado.innerHTML = `O amigo sorteado foi: ${amigoSorteado}`
        document.getElementById('reiniciar').disabled = false; 
    }
}

function reiniciarJogo() {
    amigos = [];
    atualizarLista();
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    document.getElementById('reiniciar').disabled = true; 
}