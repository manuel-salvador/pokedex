import { useContext } from 'react';
import { IPokedexContext, PokedexContext } from '../context/PokedexContext';

export default function usePokedexContext(): IPokedexContext {
  const pokedexContext = useContext<IPokedexContext | null>(PokedexContext) ?? {
    pokemons: [],
    pokemonsFiltered: null,
    loading: false,
    loadMoreData: () => {},
  };

  return pokedexContext;
}
