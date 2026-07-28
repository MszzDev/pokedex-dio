# ⚡ Pokédex

Uma Pokédex responsiva e dinâmica desenvolvida com HTML, CSS e JavaScript puro (Vanilla JS), consumindo dados diretamente da [PokéAPI](https://pokeapi.co/). Este projeto foi baseado no desafio da trilha de desenvolvimento web da **Digital Innovation One (DIO)**.

## 📋 Funcionalidades

- Listagem de Pokémons da 1ª Geração.
- Renderização dinâmica de imagens, números e tipos.
- Cores dos cards adaptativas com base no tipo principal do Pokémon (Grass, Fire, Water, etc.).
- Botão "Carregar Mais" com paginação calculada para não ultrapassar o limite de 151 Pokémons.
- Layout 100% responsivo (Mobile First) utilizando CSS Grid e Flexbox.

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Semântica e estruturação da interface.
- **CSS3**: Estilização, responsividade e paleta de cores dinâmica.
- **JavaScript (ES6+)**: Manipulação do DOM, classes, métodos de array (`map`, `join`) e consumo de API via `Fetch API` e `Promises`.
- **PokéAPI**: API RESTful pública para consulta dos dados dos Pokémons.

## 📂 Estrutura do Projeto

\`\`\`text
pokedex/
├── index.html
└── assets/
├── css/
│ └── global.css
└── js/
├── poke-api.js
└── main.js
\`\`\`

## 🚀 Como Executar o Projeto

Como o projeto foi desenvolvido apenas com tecnologias front-end puras, não é necessária a instalação de nenhuma dependência complexa.

1. Faça o clone deste repositório:
   \`\`\`bash
   git clone https://github.com/SEU_USUARIO/pokedex-dio.git
   \`\`\`
2. Navegue até a pasta do projeto:
   \`\`\`bash
   cd pokedex-dio
   \`\`\`
3. Abra o arquivo `index.html` no seu navegador de preferência.
   - **Dica:** Se estiver usando o VS Code, recomendamos utilizar a extensão **Live Server** para emular um servidor local e rodar a aplicação com recarregamento automático.

## 🤝 Créditos

Projeto desenvolvido como material de estudo com base nas aulas de JavaScript da [Digital Innovation One (DIO)](https://www.dio.me/).
