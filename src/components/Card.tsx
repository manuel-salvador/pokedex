import { useEffect, useState } from 'react';

import { PokemonFiltered } from '../types';
import usePokedexContext from '../hooks/usePokedexContext';

type Props = {
  pokemon: PokemonFiltered;
};

const formatPokemonNumber = (number: number) => {
  return number.toString().padStart(3, '0');
};

export default function Card({ pokemon }: Props) {
  const [selected, setSelected] = useState<boolean>(false);
  const { updateSelectPokemon, pokemonsSelected } = usePokedexContext();

  const handleSelected = () => {
    setSelected(!selected);
    updateSelectPokemon(pokemon.id);
  };

  useEffect(() => {
    if (pokemonsSelected.length === 0) {
      setSelected(false);
    }
  }, [pokemonsSelected]);

  return (
    <div className="relative max-w-xs w-full h-full bg-gray-900 bg-opacity-60 overflow-hidden rounded-xl shadow-xl shadow-red-900 mx-auto">
      <img
        src={pokemon.sprites.other.home.front_default}
        alt={`Image of ${pokemon.name}`}
        className="absolute w-full h-3/4 -top-12 md:-top-14 object-contain blur-xl brightness-75 z-0"
      />

      <div className="z-20 relative">
        <div className="absolute right-3 top-3 cursor-pointer" onClick={handleSelected}>
          <div className="relative flex justify-center items-center w-5 h-5 border border-white rounded-full">
            <div
              className={`absolute w-3 h-3 bg-white rounded-full self-center ${
                selected ? 'opacity-100' : 'opacity-0'
              } transition-opacity duration-100`}
            />
          </div>
        </div>
        <span className="block pl-3 pt-3 font-bold text-lg text-white/70 leading-none">{`#${formatPokemonNumber(
          pokemon.id,
        )}`}</span>
        <figure className="w-40 h-40 mx-auto relative">
          <img
            src={pokemon.sprites.other.home.front_default}
            alt={`Image of ${pokemon.name}`}
            className="absolute -top-2 object-contain"
          />
        </figure>
        <div className="px-4 py-4">
          <h4 className="text-center mt-6 mb-2 text-xl capitalize font-bold">{pokemon.name}</h4>
          <div className="flex justify-between pb-3 mb-3 border-b border-gray-400">
            <span className="text-gray-200">Weight</span>
            <span className="font-medium">{pokemon.weight / 10} kg</span>
          </div>
          <div>
            <span className="font-bold text-gray-200 mb-2 block">Abilities</span>
            <ul className="flex justify-center gap-2 flex-wrap">
              {pokemon.abilities.map(({ ability }) => (
                <li
                  key={`Ability ${pokemon.name} ${ability.name}`}
                  className="cursor-default p-2 border border-gray-200 rounded-full leading-none"
                >
                  <span>{ability.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
