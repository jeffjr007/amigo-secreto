
function adicionarAmigo() {
    const inputNome = document.getElementById('amigo');
    const nome = inputNome.value.trim(); 

    if (nome === "") {
        alert("Por favor, insira um nome válido!");
        return;
    }

   
    const listaAmigos = document.getElementById('listaAmigos');
    const novoItem = document.createElement('li');
    novoItem.textContent = nome;
    listaAmigos.appendChild(novoItem);

    inputNome.value = "";
}


function sortearAmigo() {
    const listaAmigos = document.getElementById('listaAmigos');
    const amigos = Array.from(listaAmigos.getElementsByTagName('li'));

    if (amigos.length === 0) {
        alert("Adicione amigos antes de sortear.");
        return;
    }

   
    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)].textContent;

    const resultado = document.getElementById('resultado');
    resultado.textContent = `O amigo secreto sorteado é: ${amigoSorteado}`;
}

function limparLista() {

    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; 

    // Limpa o resultado do sorteio
    const resultado = document.getElementById('resultado');
    resultado.textContent = ""; // Remove o resultado do sorteio
}
