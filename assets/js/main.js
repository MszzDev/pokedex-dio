const pokemonListHTML = document.getElementById("pokemonList");
const loadMoreButton = document.getElementById("loadMoreButton");
const searchInput = document.getElementById("searchInput");

const maxRecords = 151; // Limite da 1ª Geração
const limit = 20; // Aumentamos para testar melhor a busca
let offset = 0;

// Array de cache para guardar todos os pokémons carregados
let allLoadedPokemons = [];

function convertPokemonToLi(pokemon) {
  return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${String(pokemon.number).padStart(3, "0")}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join("")}
                </ol>

                <img src="${pokemon.photo}" alt="${pokemon.name}">
            </div>
        </li>
    `;
}

// Renderiza uma lista de pokémons arbitrária na tela
function renderPokemonList(pokemonsToRender) {
  pokemonListHTML.innerHTML = pokemonsToRender.map(convertPokemonToLi).join("");
}

function loadPokemonItems(offset, limit) {
  pokeApi.getPokemons(offset, limit).then((newPokemons = []) => {
    // Adiciona os novos pokémons ao nosso array de cache
    allLoadedPokemons = [...allLoadedPokemons, ...newPokemons];

    // Renderiza tudo o que foi carregado
    renderPokemonList(allLoadedPokemons);
  });
}

// Carga inicial
loadPokemonItems(offset, limit);

// Evento do botão "Carregar Mais"
loadMoreButton.addEventListener("click", () => {
  offset += limit;
  const nextPageRecords = offset + limit;

  if (nextPageRecords >= maxRecords) {
    const newLimit = maxRecords - offset;
    loadPokemonItems(offset, newLimit);
    loadMoreButton.parentElement.removeChild(loadMoreButton);
  } else {
    loadPokemonItems(offset, limit);
  }
});

// Evento de digitação na barra de pesquisa
searchInput.addEventListener("input", (event) => {
  const searchTerm = event.target.value.toLowerCase().trim();

  // Filtra os pokémons baseados no nome OU no número
  const filteredPokemons = allLoadedPokemons.filter((pokemon) => {
    const pokemonName = pokemon.name.toLowerCase();
    const pokemonNumber = String(pokemon.number).padStart(3, "0");

    return (
      pokemonName.includes(searchTerm) || pokemonNumber.includes(searchTerm)
    );
  });

  // Redesenha a lista apenas com os filtrados
  renderPokemonList(filteredPokemons);

  // Oculta o botão "Carregar Mais" durante a pesquisa
  if (searchTerm.length > 0) {
    loadMoreButton.style.display = "none";
  } else {
    // Se apagar a pesquisa e não tiver chegado no limite de 151, mostra o botão novamente
    if (offset + limit < maxRecords) {
      loadMoreButton.style.display = "block";
    }
  }
});
