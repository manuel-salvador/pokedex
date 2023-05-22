export interface Ability {
  ability: {
    id: number;
    name: string;
    is_main_series: boolean;
    generation: NamedAPIResource;
    names: Name[];
    effect_entries: VerboseEffect[];
    effect_changes: AbilityEffectChange[];
    flavor_text_entries: AbilityFlavorText[];
    pokemon: AbilityPokemon[];
  };
}

interface NamedAPIResource {
  name: string;
  url: string;
}

interface Name {
  name: string;
  language: NamedAPIResource;
}

interface VerboseEffect {
  effect: string;
  short_effect: string;
  language: NamedAPIResource;
}

interface AbilityEffectChange {
  effect_entries: Effect[];
  version_group: NamedAPIResource;
}

interface Effect {
  effect: string;
  language: NamedAPIResource;
}

interface AbilityFlavorText {
  flavor_text: string;
  language: NamedAPIResource;
  version_group: NamedAPIResource;
}

interface AbilityPokemon {
  is_hidden: boolean;
  slot: number;
  pokemon: NamedAPIResource;
}
