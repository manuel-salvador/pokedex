import useInifinteScroll from '../hooks/useInifinteScroll';
import usePokedexContext from '../hooks/usePokedexContext';
import { Pokedex } from '../types';
import Card from './Card';
import Loading from './Loading';

type Props = { pokemons: Pokedex };

export default function PokemonList({ pokemons }: Props) {
  const { loading, loadMoreData } = usePokedexContext();
  const { scrollRef } = useInifinteScroll(loadMoreData);

  return (
    <ul
      ref={scrollRef}
      className="flex-1 overflow-auto pl-14 pr-3 md:pl-20 md:pr-8 mt-8 grid grid-cols-list-cards gap-8 pb-8"
    >
      {pokemons &&
        pokemons.map((pokemon) => (
          <li key={pokemon.id}>
            <Card pokemon={pokemon} />
          </li>
        ))}

      <div className="flex justify-center md:hidden">
        <button
          className="bg-gradient-to-r from-orange-300 to-orange-700 rounded-full px-4 py-1 text-xl"
          onClick={loadMoreData}
        >
          Load more
        </button>
      </div>

      {loading && (
        <div className="flex justify-center col-span-full">
          <Loading />
        </div>
      )}
    </ul>
  );
}
