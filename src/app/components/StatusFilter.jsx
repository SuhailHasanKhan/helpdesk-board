'use client';

export default function StatusFilter({ value, onChange }) {
  return (
    <label className="flex items-center gap-2">
      <span className="text-green-400 text-sm">Current status</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-black text-green-300 border border-green-700 rounded px-2 py-1 text-sm"
      >
        {['All', 'Open', 'In Progress', 'On Hold', 'Resolved'].map((s) => (
          <option key={s} value={s}>{s}</option>
        ))}
      </select>
    </label>
  );
}