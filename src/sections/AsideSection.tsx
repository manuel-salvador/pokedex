import { useState } from 'react';

import usePokedexContext from '../hooks/usePokedexContext';
import Search from '../components/Search';

export default function AsideSection() {
  const { pokemonsSelected, filterPokemons, pokemonsFiltered, resetFilter, searchValues } =
    usePokedexContext();

  const [asideOpened, setAsideOpened] = useState<boolean>(false);

  return (
    <aside
      className={`relative bg-gradient-to-b from-white to-gray-300 text-black  flex flex-col items-center gap-4 py-8 px-2 text-sm sm:text-base transition-all ${
        asideOpened
          ? 'w-full'
          : pokemonsSelected.length !== 0 ||
            pokemonsFiltered.length !== 0 ||
            searchValues.name ||
            searchValues.ability
          ? 'w-28 md:w-1/4'
          : 'w-0 md:w-1/4'
      }`}
    >
      <div className="absolute -right-10 sm:-right-11 md:hidden">
        <span
          className="relative rotate-90 block bg-white z-40 w-16 pb-2 text-center rounded-t-md cursor-pointer text-2xl"
          onClick={() => setAsideOpened(!asideOpened)}
        >
          {asideOpened ? 'close' : 'more'}
        </span>
      </div>

      <div
        className={`w-full transition-all duration-500  ${
          asideOpened
            ? 'opacity-100'
            : 'select-none h-0 opacity-0 overflow-hidden md:h-auto md:opacity-100 md:overflow-auto'
        }`}
      >
        <Search />
      </div>

      <button
        onClick={filterPokemons}
        className={`bg-gradient-to-r from-red-400 to-red-800 text-white rounded-full hover:brightness-105 hover:shadow-md hover:shadow-gray-400 md:transition-all ${
          pokemonsSelected.length !== 0
            ? 'opacity-100 w-full md:w-auto transition-all duration-500 px-4 py-1'
            : 'w-0 h-0 opacity-20 overflow-hidden'
        }`}
      >
        Delete pokemons
      </button>

      <button
        onClick={resetFilter}
        className={`bg-gradient-to-r from-green-400 to-green-800 text-white px-4 py-1 rounded-full hover:brightness-105 hover:shadow-md hover:shadow-gray-400 
          ${
            pokemonsFiltered.length !== 0 || searchValues.name || searchValues.ability
              ? 'opacity-100 w-full md:w-auto transition-all duration-500'
              : 'w-0 h-0 opacity-0'
          }
          `}
      >
        Reset all
      </button>
    </aside>
  );
}
