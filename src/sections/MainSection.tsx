import PokemonList from '../components/PokemonList';

export default function MainSection() {
  return (
    <main className="relative flex-1 flex flex-col pt-4">
      <img
        src="/background.png"
        alt="Background image"
        className="-z-10 absolute object-cover w-full h-full top-0"
      />
      <figure className="w-full max-w-[18rem] mx-auto px-4">
        <img src="/logo.png" className="w-full" />
      </figure>
      <PokemonList />
    </main>
  );
}
