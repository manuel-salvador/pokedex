import { POKEAPI_URL } from '../constants';
import { IPokeAPI, Pokedex, Pokemon, PokemonFiltered } from '../types';

interface IGetPokemons {
  limit?: number;
  nextUrl?: string | null;
}

export async function getPokemons(
  params: IGetPokemons
): Promise<{ data: Pokedex; nextUrl: string | null }> {
  const apiUrl = params.nextUrl || `${POKEAPI_URL}pokemon?limit=${params.limit}`;

  try {
    const response = await fetch(apiUrl);
    const data: IPokeAPI = await response.json();

    const nextUrl = data.next;

    const results = data.results;

    const pokemonsPromises = results.map(async (pokemon) => {
      const pokemonResponse = await fetch(pokemon.url);
      const pokemonData: Pokemon = await pokemonResponse.json();

      const { id, name, sprites, weight, abilities } = pokemonData;

      const pokemonDataFiltered: PokemonFiltered = { id, name, sprites, weight, abilities };

      return pokemonDataFiltered;
    });

    const pokemons = await Promise.all(pokemonsPromises);

    return { data: pokemons as Pokedex, nextUrl };
  } catch (error) {
    console.error(error);
    return { data: [], nextUrl: null };
  }
}
