import { ChangeEvent } from 'react';
import usePokedexContext from '../hooks/usePokedexContext';

export default function Search() {
  const { searchValues, setSearchValues } = usePokedexContext();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="px-4">
      <div className="flex flex-col gap-2 mb-4">
        <label htmlFor="name">Search by Name</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={handleChange}
          className="border-2 border-gray-400 rounded-full px-2 py-1 outline-none focus:shadow-md transition-shadow"
          autoComplete="off"
          value={searchValues.name}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="ability">Search by Ability</label>
        <input
          type="text"
          name="ability"
          id="ability"
          onChange={handleChange}
          className="border-2 border-gray-400 rounded-full px-2 py-1 outline-none focus:shadow-md transition-shadow"
          autoComplete="off"
          value={searchValues.ability}
        />
      </div>
    </div>
  );
}
