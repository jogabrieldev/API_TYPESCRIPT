# 🚀 API em Node.js com TypeScript, Express e MongoDB

Este projeto é uma **API RESTful** desenvolvida com **Node.js** e **TypeScript**, utilizando a arquitetura **MVC (Model-View-Controller)** para manter o código organizado, modular e escalável.

---

## 📌 **Tecnologias Utilizadas**
- ✅ **Node.js** – Plataforma para executar JavaScript no lado do servidor.
- ✅ **TypeScript** – Superset do JavaScript com tipagem estática.
- ✅ **Express** – Framework minimalista para construção de APIs.
- ✅ **MongoDB** – Banco de dados NoSQL para persistência de dados.
- ✅ **Mongoose** (ou driver nativo) – ODM/driver para comunicação com o MongoDB.
- ✅ **express-validator** – Middleware para validação de dados.
- ✅ **Morgan** – Middleware para logs de requisições HTTP.
- ✅ **Winston** – Logger configurado para armazenar e gerenciar logs.
- ✅ **Arquitetura MVC** – Separação entre Models, Controllers e rotas, facilitando manutenção e escalabilidade.

---

## ✨ **Funcionalidades**
✅ Operações **CRUD** completas (Create, Read, Update, Delete).  
✅ **Validação de dados** em cada requisição utilizando `express-validator`.  
✅ **Logs detalhados** de cada requisição HTTP com `Morgan` integrado ao `Winston`.  
✅ Estrutura organizada em **camadas** seguindo o padrão **MVC**.  
✅ **Tratamento de erros centralizado**, garantindo respostas consistentes.  
✅ Configuração pronta para **ambiente de desenvolvimento** e **produção**.

---

## 📂 **Estrutura do Projeto**
```bash
API_TYPESCRIPT/
│__ config/ #configue do banco de dados e conexão 
├─ logs/  #Logs da aplicação var ver como esta rodando e acompanhar de maneira mais pratica    (logs personaizados)
├__ src/
│  ├─ controllers/    # Lógica de negócio (camada Controller)
│  ├─ models/         # Definição de schemas e interação com o banco (Model)
│  ├─ routes/         # Rotas da aplicação
│  ├─ middlewares/    # Middlewares como logs e validações
│  ├─ utils/          # Funções auxiliares
│  ├─ config/         # Configurações (ex.: conexão com MongoDB)
│  ├─ server.ts       # Ponto de entrada da aplicação
│
├─ dist/              # Arquivos compilados (gerados pelo TypeScript)
├─ package.json
├─ tsconfig.json
└─ README.md
