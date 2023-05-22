import { ChangeEvent } from 'react';

import usePokedexContext from '../hooks/usePokedexContext';

import SearchInput from './SearchInput';

export default function Search() {
  const { searchValues, setSearchValues } = usePokedexContext();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleResetValue = (key: string) => {
    setSearchValues((prevState) => ({
      ...prevState,
      [key]: '',
    }));
  };

  return (
    <div className="px-4">
      <SearchInput
        id="name"
        label="Search by Name"
        placeholder="Pikachu"
        value={searchValues.name}
        handleChange={handleChange}
        handleReset={handleResetValue}
      />
      <SearchInput
        id="ability"
        label="Search by Ability/Abilities"
        placeholder="static, lightning"
        value={searchValues.ability}
        handleChange={handleChange}
        handleReset={handleResetValue}
      />
    </div>
  );
}
