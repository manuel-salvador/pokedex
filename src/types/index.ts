import { Ability } from './Ability';

export type Pokedex = PokemonFiltered[];

export interface PokemonFiltered {
  id: number;
  name: string;
  weight: number;
  abilities: Ability[];
  sprites: Sprites;
}

export interface Pokemon extends PokemonFiltered {
  type: string[];
  height: number;
  weight: number;
  candy: string;
  candy_count?: number;
  egg: string;
  spawn_chance: number;
  avg_spawns: number;
  spawn_time: string;
  multipliers: number[] | null;
  weaknesses: string[];
  next_evolution?: Evolution[];
  prev_evolution?: Evolution[];
}

export interface Sprites {
  front_default: string;
  other: OtherSprites;
}
export interface OtherSprites {
  home: {
    front_default: string;
  };
}

export interface Evolution {
  num: string;
  name: string;
}

export interface IPokeAPI {
  count: number;
  next: null | string;
  previous: null | string;
  results: IResultsApi;
}

type IResultsApi = { name: string; url: string }[];
