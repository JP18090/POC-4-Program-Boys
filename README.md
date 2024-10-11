
# ProgramBoys - Proof of Concept (POC) 4

## Objetivo
Esta prova de conceito (POC) tem como objetivo demonstrar a capacidade do grupo ProgramBoys em consumir uma API externa que fornece informações sobre os jogos da franquia The Legend of Zelda utilizando a tecnologia Fetch.

## Integrantes
- Vitor Lemos
- Marcelo Takao
- José Pedro
- Guilherme Anaya

## Tecnologias Utilizadas
- HTML5
- CSS3
- JavaScript (Fetch API)
- API: Zelda API

## Funcionalidades
1. **Consulta de Jogos The Legend of Zelda**:
    - Consumo da API para obter informações detalhadas sobre os jogos da franquia The Legend of Zelda.
2. **Interface Usuário Amigável**:
    - Interface simples e intuitiva para facilitar a consulta das informações dos jogos.
3. **Atualização em Tempo Real**:
    - Atualização dinâmica dos dados utilizando Fetch API.

### Funcionamento Básico de uma API
Uma API (Interface de Programação de Aplicações) permite que diferentes sistemas de software se comuniquem entre si. Quando você faz uma solicitação a uma API, está basicamente pedindo dados ou recursos específicos. A API processa essa solicitação e retorna a informação desejada. No contexto da nossa POC, a API fornece informações detalhadas sobre os jogos da franquia The Legend of Zelda.

#### Exemplo de Código
Aqui está um exemplo simples de como uma API pode ser chamada e como lidar com a resposta:

```javascript
// URL da API que fornece dados sobre os jogos da franquia The Legend of Zelda
const apiUrl = 'https://api.example.com/zelda-games';

// Realiza a solicitação à API usando Fetch
fetch(apiUrl)
    .then(response => {
        // Verifica se a resposta é bem-sucedida
        if (response.ok) {
            // Converte a resposta em JSON
            return response.json();
        }
        // Lança um erro se a resposta não for bem-sucedida
        throw new Error('Erro na solicitação à API');
    })
    .then(data => {
        // Processa os dados recebidos da API
        console.log('Dados recebidos:', data);
    })
    .catch(error => {
        // Lida com quaisquer erros ocorridos durante a solicitação
        console.error('Erro ao consumir a API:', error);
    });
```

### Sintaxe do Fetch e Explicação
O Fetch é uma API JavaScript moderna que permite realizar solicitações HTTP de forma assíncrona. Isso significa que você pode fazer solicitações para servidores externos e processar as respostas sem bloquear o fluxo de execução do seu código.

#### Sintaxe Básica do Fetch
A sintaxe básica do Fetch envolve chamar a função `fetch()` com a URL do recurso que você deseja acessar. Ele retorna uma Promise que resolve com a resposta da solicitação.

```javascript
fetch('https://api.example.com/dados')
    .then(response => {
        if (response.ok) {
            return response.json(); // Converte a resposta em JSON
        }
        throw new Error('Erro na solicitação'); // Lança um erro se a resposta não for bem-sucedida
    })
    .then(data => {
        // Processa os dados recebidos
        console.log('Dados:', data);
    })
    .catch(error => {
        // Lida com erros
        console.error('Erro:', error);
    });
```

1. **fetch(url)**: Chama a API Fetch com a URL do recurso desejado.
2. **.then(response => response.json())**: Processa a resposta da solicitação e converte em JSON.
3. **.then(data => ...)**: Lida com os dados convertidos da resposta.
4. **.catch(error => ...)**: Lida com erros que possam ocorrer durante a solicitação


## Exemplo de funcionamento (o que deve aparecer)

![image](https://github.com/user-attachments/assets/538f8404-85dc-46c2-97f2-46fef53438ad)


**Feito com 🔺🔺🔺 por ProgramBoys**
```
