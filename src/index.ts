import { fetchBase } from './utils';
import { IPokemon } from './types';

const pokemonGoAPI = 'https://pokemon-go-api.github.io/pokemon-go-api';

async function main() {
  const pokemons: IPokemon[] = [];
  const pokemonNames: string[] = [];

  await fetchBase(`${pokemonGoAPI}/api/pokedex.json`, { method: 'GET', params: {} }).then(data => {
    data.forEach((pokemon: IPokemon) => {
      pokemons.push(pokemon);
      pokemonNames.push(pokemon.id);
    });
  });

  console.log(pokemonNames);
}

main();
