# Chatbot com Dialogflow e Node.js

Este repositório contém um projeto de chatbot integrado ao **Dialogflow**, desenvolvido em **Node.js**.  

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Dialogflow](https://cloud.google.com/dialogflow)
- [Express](https://expressjs.com/)

## 📌 Pré-requisitos

Antes de iniciar, certifique-se de ter:

1. **Node.js** instalado na sua máquina.  
2. **Conta no Google Cloud** e um **projeto no Dialogflow** criado.  
3. **Chave JSON do serviço Dialogflow**, que será usada para autenticação.

## 🔧 Instalação

1. Clone o repositório:
   ```sh
   git clone https://github.com/edugobatti/DialogFlow-Bot
   cd DialogFlow-Bot
   ```

2. Instale as dependências:
```sh
npm install
```

3. Configure a chave do Dialogflow:
Baixe o arquivo credenciais.json da sua conta Dialogflow.
Defina a variável de ambiente para autenticação:

```sh
export GOOGLE_APPLICATION_CREDENTIALS="caminho/para/seu/arquivo.json"
```

##Executando o Projeto
Após configurar a chave, inicie o servidor:
```sh
node index.js
```