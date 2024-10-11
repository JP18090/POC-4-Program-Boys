# ProgramBoys - Proof of Concept 4 (POC)

## Objetivo
Esta prova de conceito (POC) tem como objetivo demonstrar a capacidade do grupo ProgramBoys em consumir uma API externa que fornece tabelas FIP de carros utilizando a tecnologia Fetch. 

## Integrantes
- Vitor Lemos 
- Marcelo Takao 
- José Pedro 
- Guilherme Anaya

## Tecnologias Utilizadas
- HTML5
- CSS3
- JavaScript (Fetch API)
- API: Brazilian Vehicles and Prices

## Funcionalidades
1. **Consulta de Tabelas FIP**:
    - Consumo da API de tabelas FIP para obter informações sobre valores de mercado de veículos.
2. **Interface Usuário Amigável**:
    - Interface simples e intuitiva para facilitar a consulta das informações.
3. **Atualização em Tempo Real**:
    - Atualização dinâmica dos dados utilizando Fetch API.

## Como Executar o Projeto
1. Clone o repositório para sua máquina local:
    ```bash
    git clone https://github.com/ProgramBoys/POC-Tabelas-FIP.git
    ```
2. Navegue até o diretório do projeto:
    ```bash
    cd POC-Tabelas-FIP
    ```
3. Instale as dependências necessárias:
    ```bash
    npm install
    ```
4. Execute o servidor de desenvolvimento:
    ```bash
    npm start
    ```
5. Acesse o projeto no navegador:
    ```bash
    http://localhost:3000
    ```

## Consumo da API
Utilizamos a Fetch API para consumir a API das tabelas FIP. Aqui está um exemplo de código para realizar a consulta:

```javascript
fetch('https://api.fipe.com.br/carros')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // Processamento dos dados recebidos
    })
    .catch(error => {
        console.error('Erro ao consumir a API:', error);
    });
```

## Contribuições
Contribuições são bem-vindas! Se você deseja contribuir com este projeto, por favor, siga os seguintes passos:
1. Faça um fork do repositório.
2. Crie uma nova branch com a sua feature:
    ```bash
    git checkout -b minha-feature
    ```
3. Commit suas alterações:
    ```bash
    git commit -m 'Adicionei uma nova feature'
    ```
4. Faça push para a branch:
    ```bash
    git push origin minha-feature
    ```
5. Abra um Pull Request.

## Licença
Este projeto está licenciado sob a Licença MIT. Consulte o arquivo [LICENSE](LICENSE) para obter mais informações.

---

**Feito com ❤️ por ProgramBoys**

```
