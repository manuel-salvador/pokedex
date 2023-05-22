import { createContext, useEffect, useState, Dispatch, SetStateAction } from 'react';
import { Pokedex } from '../types';
import { getPokemons } from '../api/pokeAPI';

export interface IPokedexContext {
  pokemons: Pokedex;
  loading: boolean;
  loadMoreData: () => void;
  updateSelectPokemon: (pokemonId: number) => void;
  filterPokemons: () => void;
  pokemonsSelected: number[];
  pokemonsFiltered: Pokedex;
  resetFilter: () => void;
  searchValues: { name: string; ability: string };
  setSearchValues: Dispatch<SetStateAction<{ name: string; ability: string }>>;
}

const PokedexContext = createContext<IPokedexContext | null>(null);

function PokedexProvider({ children }: { children: JSX.Element }) {
  const [pokemons, setPokemons] = useState<Pokedex>([]);
  const [pokemonsFiltered, setPokemonsFiltered] = useState<Pokedex>([]);
  const [pokemonsSelected, setPokemonsSelected] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);
  const [nextPageUrl, setNextPageUrl] = useState<null | string>(null);
  const [searchValues, setSearchValues] = useState({ name: '', ability: '' });

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      try {
        const { data, nextUrl } = await getPokemons({ limit: 12 });
        setPokemons(data);
        setNextPageUrl(nextUrl);
      } catch (error) {
        console.error('Error al obtener los Pokémones:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const loadMoreData = () => {
    setLoading(true);

    async function fetchData() {
      try {
        const { data, nextUrl } = await getPokemons({ nextUrl: nextPageUrl });

        if (pokemonsFiltered.length === 0) {
          setPokemons([...pokemons, ...data]);
        } else {
          setPokemonsFiltered([...pokemonsFiltered, ...data]);
        }

        setNextPageUrl(nextUrl);
      } catch (error) {
        console.error('Error al obtener los Pokémones:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  };

  const filterPokemons = () => {
    if (pokemonsSelected.length === 0) return;

    const pokemonsToFilter = pokemonsFiltered.length === 0 ? pokemons : pokemonsFiltered;

    const filtered = pokemonsToFilter.filter((pokemon) => !pokemonsSelected.includes(pokemon.id));

    setPokemonsFiltered(filtered);
    setPokemonsSelected([]);
  };

  const updateSelectPokemon = (pokemonId: number) => {
    if (pokemonsSelected.includes(pokemonId)) {
      const updatedPokemonsSelected = pokemonsSelected.filter((id) => id !== pokemonId);
      setPokemonsSelected(updatedPokemonsSelected);
    } else {
      setPokemonsSelected([...pokemonsSelected, pokemonId]);
    }
  };

  const resetFilter = () => {
    setPokemonsFiltered([]);
    setPokemonsSelected([]);
    setSearchValues({ name: '', ability: '' });
  };

  let pokedex = pokemonsFiltered.length === 0 ? pokemons : pokemonsFiltered;
  let searchedPokemons: Pokedex = [];

  if (searchValues.name || searchValues.ability) {
    const searchNameValue = searchValues.name.toLowerCase();
    const searchAbilityValue = searchValues.ability.toLowerCase();

    searchedPokemons = pokedex.filter((pokemon) => {
      let pokemonName = pokemon.name.toLowerCase();
      let pokemonAbilities = pokemon.abilities.map((ability) => ability.ability.name);

      const hasMatchingName = searchNameValue ? pokemonName.includes(searchNameValue) : true;
      const hasMatchingAbility = searchAbilityValue
        ? pokemonAbilities.some((ability) => ability.includes(searchAbilityValue))
        : true;

      return hasMatchingName && hasMatchingAbility;
    });
  } else {
    searchedPokemons = pokedex;
  }

  return (
    <PokedexContext.Provider
      value={{
        pokemons: searchedPokemons,
        pokemonsFiltered,

        updateSelectPokemon,
        loadMoreData,
        filterPokemons,
        resetFilter,
        setSearchValues,

        pokemonsSelected,
        loading,
        searchValues,
      }}
    >
      {children}
    </PokedexContext.Provider>
  );
}

export { PokedexContext, PokedexProvider };
