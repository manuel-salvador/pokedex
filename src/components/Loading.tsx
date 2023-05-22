export default function Loading() {
  return (
    <div className="flex items-center gap-2">
      <img src="/pokeball.png" alt="Pokeball loading" className="w-8 animate-spin" />
      <span className="text-lg">Loading...</span>
    </div>
  );
}
