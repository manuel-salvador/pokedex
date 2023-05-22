import AsideSection from './sections/AsideSection';
import MainSection from './sections/MainSection';

export default function App() {
  return (
    <div className="flex h-screen overflow-hidden">
      <AsideSection />
      <div className="relative w-4 h-full md:w-6 rounded-full z-10">
        <div className="absolute left-2 w-28 h-28 md:w-44 md:h-44 bg-red-500 top-3/4 -translate-y-1/2 -translate-x-1/2 border-[1rem] md:border-[1.5rem] rounded-full border-black">
          <div className="w-full h-full top-0 left-0 rounded-full bg-white shadow-[inset_0_-8px_8px_rgba(0,0,0,0.2)] shadow-gray-4 00 rotate-[45deg]" />
        </div>
      </div>
      <MainSection />
    </div>
  );
}
