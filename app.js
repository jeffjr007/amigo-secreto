// Função para adicionar amigo à lista
function adicionarAmigo() {
    const inputNome = document.getElementById('amigo');
    const nome = inputNome.value.trim(); // Remove espaços extras

    // Valida se o nome não está vazio
    if (nome === "") {
        alert("Por favor, insira um nome válido!");
        return;
    }

    // Cria um novo item da lista
    const listaAmigos = document.getElementById('listaAmigos');
    const novoItem = document.createElement('li');
    novoItem.textContent = nome;
    listaAmigos.appendChild(novoItem);

    // Limpa o campo de texto após adicionar o nome
    inputNome.value = "";
}

// Função para sortear amigo secreto
function sortearAmigo() {
    const listaAmigos = document.getElementById('listaAmigos');
    const amigos = Array.from(listaAmigos.getElementsByTagName('li'));

    // Verifica se a lista não está vazia
    if (amigos.length === 0) {
        alert("Adicione amigos antes de sortear.");
        return;
    }

    // Sorteia um amigo aleatoriamente
    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)].textContent;

    // Exibe o resultado do sorteio
    const resultado = document.getElementById('resultado');
    resultado.textContent = `O amigo secreto sorteado é: ${amigoSorteado}`;
}

// Função para limpar a lista de amigos e o resultado do sorteio
function limparLista() {
    // Limpa a lista de amigos
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; // Remove todos os itens da lista

    // Limpa o resultado do sorteio
    const resultado = document.getElementById('resultado');
    resultado.textContent = ""; // Remove o resultado do sorteio
}
