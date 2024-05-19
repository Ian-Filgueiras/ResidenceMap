# SISTEMA RESIDENCE MAP

Sistema de controle de condomínios residenciais

## Rotas Disponíveis

- [x] CRUD de Condomínio
- [ ] CRUD de Condômino
- [ ] CRUD de Porteiro
- [ ] CRUD de Síndico
- [ ] CRUD de Visitante
- [ ] CRUD de Reservas
- [ ] CRUD de Comunuicação

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