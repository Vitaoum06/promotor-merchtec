# Sistema MerchTech

## Descrição

Sistema web para listagem de mercados, com integração entre frontend (HTML, CSS, JavaScript), backend (Python Flask) e banco de dados Firebird.

Os dados são consumidos via API REST e exibidos dinamicamente na interface utilizando JavaScript com fetch e forEach.

---

## Tecnologias Utilizadas

- Python
- Flask
- Flask-CORS
- Firebird
- HTML
- CSS
- JavaScript

---

## Estrutura do Projeto

promotor/
│
├── app.py
├── promotor.html
├── promotor.js
├── mercados.css
└── IMAGEM/
    ├── comper.jpg
    ├── atacadao.jpg
    └── padrao.jpg

---

## Pré-requisitos

- Python instalado
- Firebird instalado
- Banco de dados criado (.FDB)
- VS Code (opcional)

---

## Instalação

### 1. Acessar a pasta do projeto

cd "C:\Users\joaov\OneDrive\Área de Trabalho\promotor"

### 2. Instalar dependências

pip install flask
pip install flask-cors
pip install fdb

---

## Configuração do Banco

### Adicionar coluna de imagem

ALTER TABLE LOJA ADD IMAGEM VARCHAR(255);

### Atualizar registros

UPDATE LOJA SET IMAGEM = 'IMAGEM/comper.jpg' WHERE NOME = 'Comper';
UPDATE LOJA SET IMAGEM = 'IMAGEM/atacadao.jpg' WHERE NOME = 'Atacadão';

---

## Execução do Sistema

### 1. Rodar o backend

python app.py

Servidor disponível em:
http://127.0.0.1:5000

---

### 2. Testar API

http://127.0.0.1:5000/lojas

---

### 3. Rodar o frontend

Opção 1:
Abrir promotor.html com Live Server

Opção 2:
python -m http.server 5500

Acessar:
http://127.0.0.1:5500/promotor.html

---

## Funcionamento

- Backend consulta o Firebird e retorna JSON
- Frontend consome API com fetch
- Dados exibidos com forEach
- Imagens vinculadas pelo banco

---

## Problemas Comuns

API não responde:
python app.py

Failed to fetch:
Backend não iniciado ou CORS incorreto

Imagem não aparece:
Verificar caminho no banco e pasta IMAGEM

Acentuação incorreta:
Usar charset UTF8 e ensure_ascii=False

---

## Melhorias Futuras

- Upload de imagens
- Cadastro de promotores
- Login
- Mapa
- Dashboard

---

## Login do Banco
login: SYSDBA
senha: masterkey
