'use client';

export default function SearchBox({ value, onChange }) {
  return (
    <label className="flex items-center gap-2 flex-1 min-w-[220px]">
      <span className="text-green-400 text-sm">Search bar</span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="title or description…"
        className="bg-black text-green-300 placeholder-green-700 border border-green-700 rounded px-2 py-1 text-sm w-full"
      />
    </label>
  );
}