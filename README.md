# ⚡ Pokédex Customizada

Uma Pokédex responsiva e interativa desenvolvida com HTML, CSS e JavaScript puro (Vanilla JS), consumindo dados diretamente da [PokéAPI](https://pokeapi.co/). Este projeto foi construído a partir do desafio da trilha de desenvolvimento web da **Digital Innovation One (DIO)**, com a adição de funcionalidades exclusivas e um layout personalizado.

## 📋 Funcionalidades e Diferenciais

- Listagem dinâmica dos Pokémons da 1ª Geração.
- **Sistema de Busca em Tempo Real:** Filtro dinâmico que permite pesquisar Pokémons carregados pelo nome ou pelo número da Pokédex (ex: "001" ou "bulbasaur").
- **Design Exclusivo:** Layout modificado em relação ao projeto base, utilizando cards com fundo limpo, sombras interativas (hover) e bordas dinâmicas baseadas no tipo principal do Pokémon.
- Cores adaptativas nos badges de tipos (Grass, Fire, Water, etc.).
- Botão "Carregar Mais" com paginação e lógica de limite de requisições.
- Layout 100% responsivo (Mobile First) estruturado com CSS Grid e Flexbox.

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Semântica e estruturação.
- **CSS3**: Estilização, transições (hover effects) e responsividade.
- **JavaScript (ES6+)**: Manipulação do DOM, eventos assíncronos (`Fetch API`, `Promises`), métodos de array (`map`, `filter`, `join`) e cache local de dados para a barra de pesquisa.
- **PokéAPI**: API REST pública.

## 📂 Estrutura do Projeto

\`\`\`text
pokedex/
├── index.html
├── README.md
└── assets/
├── css/
│ └── global.css
└── js/
├── poke-api.js
└── main.js
\`\`\`

## 🚀 Como Executar

Como o projeto utiliza apenas tecnologias front-end puras, não há necessidade de instalar dependências.

1. Faça o clone deste repositório:
   \`\`\`bash
   git clone https://github.com/MszzDev/pokedex-dio.git
   \`\`\`
2. Acesse a pasta do projeto:
   \`\`\`bash
   cd pokedex-dio
   \`\`\`
3. Abra o arquivo `index.html` em seu navegador.
   - **Dica:** No VS Code, utilize a extensão **Live Server** para rodar a aplicação localmente.
