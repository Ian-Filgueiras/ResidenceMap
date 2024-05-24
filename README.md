# SISTEMA RESIDENCE MAP

Sistema de controle de condomínios residenciais

## Rotas Disponíveis

- [x] CRUD de Condomínio
- [x] CRUD de Condômino
- [x] CRUD de Porteiro
- [x] CRUD de Síndico
- [x] CRUD de Visitante
- [x] CRUD de Reservas
- [x] CRUD de Comunuicação

## Execução da Aplicação

```bash
# Instação das dependências Node
npm install

# Instalação do banco MySQL com Docker
docker-compose up -d

# Execução da API Express
node express.js

# Preenchimento das tabelas do Banco (rodar apenas uma vez)
node console.js

```