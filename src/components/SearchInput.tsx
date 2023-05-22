import { ChangeEvent } from 'react';

type Props = {
  id: string;
  label: string;
  placeholder?: string;
  className?: string;
  value: string;
  handleReset: (id: string) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function SearchInput({
  id,
  label,
  placeholder,
  className,
  value,
  handleReset,
  handleChange,
}: Props) {
  return (
    <div className="flex flex-col gap-2 relative">
      <span
        className={`absolute right-3 bottom-[1.35rem] md:bottom-6 bg-gray-500 text-white rounded-full block leading-none text-center py-[2px] md:py-0 transition-all cursor-pointer overflow-hidden ${
          value ? 'opacity-100 w-5 h-5' : 'opacity-0 w-0 h-0'
        }`}
        onClick={() => handleReset(id)}
      >
        x
      </span>
      <label htmlFor={id} className="font-bold text-gray-600">
        {label}
      </label>
      <input
        type="text"
        id={id}
        name={id}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className={`border-2 border-gray-400 rounded-full px-2 py-1 outline-none focus:shadow-md transition-shadow pr-9 mb-4 ${
          className || ''
        }`}
        autoComplete="off"
      />
    </div>
  );
}
