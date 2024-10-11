document.getElementById('fetchButton').addEventListener('click', async () => {
    const gameName = document.getElementById('gameInput').value.trim();
    const suggestionsDiv = document.getElementById('suggestions');
    const gameDetailsDiv = document.getElementById('gameDetails');

    // Limpa as informações anteriores
    suggestionsDiv.innerHTML = 'Sugestões: Ocarina, Twilight, Skyward, Majora';
    gameDetailsDiv.innerHTML = '';

    if (gameName) {
        try {
            const response = await fetch(`https://zelda.fanapis.com/api/games?name=${gameName}`);
            const data = await response.json();

            if (data.data && data.data.length > 0) {
                const game = data.data[0]; // Pega o primeiro jogo encontrado
                const gameElement = document.createElement('div');
                gameElement.className = 'game';
                
                // Informações Básicas (nome, data de lançamento e descrição)
                gameElement.innerHTML = `
                    <strong>${game.name}</strong> - Lançamento: ${game.released_date}<br>
                    <strong>Descrição:</strong> ${game.description && game.description.trim() !== '' ? game.description : 'Descrição não disponível.'}<br>
                `;

                // Adiciona o elemento à div de detalhes
                gameDetailsDiv.appendChild(gameElement);

            } else {
                suggestionsDiv.innerHTML = 'Nenhum jogo encontrado. Tente com outra palavra.';
            }

        } catch (error) {
            suggestionsDiv.innerHTML = 'Erro ao buscar dados. Tente novamente.';
        }
    } else {
        suggestionsDiv.innerHTML = 'Por favor, digite um nome de jogo.';
    }
});
