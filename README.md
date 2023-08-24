# Desafio 1 - Desenvolvimento de REST API para Gestão de Rotas de GPS
Este projeto é parte de um desafio de desenvolvimento de uma API para gestão de rotas de GPS. A API permite cadastrar e listar rotas.

## Funcionalidades
- Listar rotas cadastradas
- Cadastrar uma nova rota, definindo: 
    -- nome da rota
    -- latitude e longitude da origem
    -- latitude e longitude do destino

## Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- Node.js: Plataforma de desenvolvimento JavaScript.
- Nest.js: Framework para desenvolvimento de APIs em Node.js.
- MongoDB: Banco de dados NoSQL para persistência dos dados.
- Prisma: ORM (Object-Relational Mapping) para interação com o banco de dados.
- Docker: Plataforma para criação e gerenciamento de containers.

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em seu ambiente de desenvolvimento:

- Node.js (versão 18.16.1)
- Docker

## Configuração e Execução

Siga estas etapas para configurar e executar o projeto em sua máquina local:

1. Clone este repositório: `git clone https://github.com/guilhermealves-dev/nestjs-api-fullcycle-challenge-1-routes.git`
2. Navegue até o diretório do projeto: `cd nestjs-api-fullcycle-challenge-1-routes`
3. Execute o comando: `docker compose up` para iniciar o MongoDB mais a aplicação da API
4. O servidor estará acessível em: `http://localhost:3000`
5. Para fazer as chamadas para a API, instale a extensão `REST Client` no **Visual Studio Code** e abra o arquivo `api.http`, em seguida clique no botões *Send Request*
6. Alternativamente, também foi disponibilizado uma *Collection* do **Postman** no diretório: `../postman-collection/*`

# Endpoints da API

A API possui os seguintes endpoints para interação:

### Cadastrar Rota

- **URL:** `/api/routes`
- **Método:** POST
- **Descrição:** Cadastra uma nova rota.
- **Corpo da Requisição:**
  - **Estrutura:**
    ```json
    {
        "name": "Rota para entrega de produto",
        "source": {
            "lat": -23.558125982978147,
            "lng": -46.6150131207001
        },
        "destination": {
            "lat": -23.55113706367705,
            "lng": -46.63464133665705
        }
    }
    ```
- **Resposta de Sucesso:**
  - **Código:** 201 (Created)
  - **Exemplo de Resposta:**
    ```json
    {
        "source": {
            "lat": -23.55812598297815,
            "lng": -46.6150131207001
        },
        "destination": {
            "lat": -23.55113706367705,
            "lng": -46.63464133665705
        },
        "id": "64e77ce430f61508dd21d0b5",
        "name": "Rota para entrega de produto"
    }
    ```

### Listar Rotas

- **URL:** `/api/routes`
- **Método:** GET
- **Descrição:** Retorna todas as rotas cadastrados.
- **Resposta de Sucesso:**
  - **Código:** 200 (OK)
  - **Exemplo de Resposta:**
    ```json
    [
        {
            "source": {
                "lat": -23.55812598297815,
                "lng": -46.6150131207001
            },
            "destination": {
                "lat": -23.55113706367705,
                "lng": -46.63464133665705
            },
            "id": "64e77ce430f61508dd21d0b5",
            "name": "Rota para entrega de produto"
        }
    ]
    ```

## Agradecimentos

Gostaria de expressar gratidão à Full Cycle pelos ensinamentos valiosos fornecidos durante essa semana da [Imersão Full Stack](https://imersao.fullcycle.com.br/). Agradeço por proporcionar a oportunidade de aprender e aplicar esses novos conhecimentos.

## Licença

[![MIT License](https://img.shields.io/badge/license-MIT-green)](https://opensource.org/licenses/MIT) 

[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/GPL-3.0)

[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)
## 🔗 Autor

| [![website](https://www.guilhermealves.dev/assets/images/mini-logo.png)](https://www.guilhermealves.dev/) | [![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/guilherme-alves-905454233/)     |
| :----------- | :---------- |
