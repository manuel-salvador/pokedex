import { useContext } from 'react';

import { IPokedexContext, PokedexContext } from '../context/PokedexContext';

export default function usePokedexContext(): IPokedexContext {
  const pokedexContext = useContext<IPokedexContext | null>(PokedexContext) ?? {
    pokemons: [],
    loading: false,
    loadMoreData: () => undefined,
    updateSelectPokemon: () => undefined,
    filterPokemons: () => undefined,
    pokemonsSelected: [],
    pokemonsFiltered: [],
    resetFilter: () => undefined,
    searchValues: { name: '', ability: '' },
    setSearchValues: () => undefined,
  };

  return pokedexContext;
}
