# **Site de filmes em cartaz com react** 
## **Imagens do site**

<p aling="center">
<img width="500" height="250" src="src/Img/Captura de tela 2025-01-14 183511.png">
<img width="500" height="250" src="src/Img/Captura de tela 2025-01-14 183545.png">
<img width="700" height="250" src="src/Img/Captura de tela 2025-01-14 183626.png">
</p>

## **Objetivo**

Criar um site que permita aos usuários explorar uma lista de filmes obtida a partir de uma API externa. O Site pocibilita visualizar detalhes de filmes específicos e salvar e excluir filmes favoritos no armazenamento local (Local Storage).

---
## **Público-Alvo**

Pessoas que buscam filmes que estão em cartaz no cinema. De modo que vejam trailer e salvem seus filmes favoritos.

## **Funcionalidades Principais**

### **Páginas e Rotas**

1. **Home:**
   - Header com função de ir para filmes favoritos e voltar para pagina home
   - Exibe uma lista de 10 filmes que estão em cartaz. filmes obtidos pela API.
2. **Filme:**
   - Exibe todos os detalhes de um filme selecionado, incluindo:
     - Título.
     - Descrição.
     - Nota.
   - Botão para adicionar o filme à lista de favoritos.
   - Botão com link para ver trailer do filme no youtube 
3. **Favoritos:**
   - Lista todos os filmes salvos pelo usuário no Local Storage.
   - Permite excluir filmes da lista de favoritos.
4. **Erro:**
   - Página exibida para rotas não encontradas com uma mensagem dizendo que a apagina não foi encontrada e opção de retorno à home.

   ---

   ### **Funcionalidades Específicas**

   1. **Favoritos:**
   - Salvar filmes no Local Storage ao clicar em um botão.
   - Recuperar e exibir os filmes salvos na página de Favoritos.
   - Remover filmes da lista de favoritos.
   2.  **Detalhes dos Filmes:**
   - Exibição completa de informações obtidas pela API para um filme específico.

### **Componentes**

- **Header:**
  - Barra de navegação com links para Home e Favoritos.
- **Rotas:**
  - Definidas usando `react-router-dom`.
  - Rotas principais: `/`, `/filme/:id`, `/favoritos`, `/*` (página de erro).
- **Páginas:**
  - Home.
  - Filme.
  - Favoritos.
  - Erro.

  ### **Local Storage**

- **Salvar Favoritos:**
  - Filmes são armazenados no Local Storage com uma chave única.
- **Exibir Favoritos:**
  - Recuperar e renderizar os dados salvos na página de Favoritos.
- **Excluir Favoritos:**
  - Remover filmes da lista e atualizar o Local Storage.

---

## **Tecnologias Utilizadas**

### **Frontend:**

- React.js.
- React Router DOM.
- Axios.
- CSS para estilização.
- react-toastify.

### **API Externa:**

- Integração com uma API de filmes (ex.: [The Movie Database API - TMDB](https://www.themoviedb.org/)).

### **Armazenamento Local:**

- Local Storage para salvar filmes favoritos.

---

## **Como Executar o Projeto**

1. Clone este repositório:
   ```bash
   git clone git@github.com:erick-d-ps/reacFlix.git

2. Instale as dependências:
   ```bash
    yarn add

3. Configure a API:
   ```
   - Crie uma conta no TMDB e obtenha sua chave de API.
   - Substitua a chave de API no arquivo de configuração do projeto.
    
4. Inicie o servidor de desenvolvimento:
   ```bash
    yarn start

---


