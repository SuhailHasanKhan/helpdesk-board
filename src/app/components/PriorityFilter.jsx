'use client';

export default function PriorityFilter({ value, onChange }) {
  return (
    <label className="flex items-center gap-2">
      <span className="text-green-400 text-sm">Priority</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-black text-green-300 border border-green-700 rounded px-2 py-1 text-sm"
      >
        {['All', 'Low', 'Medium', 'High', 'Critical'].map((p) => (
          <option key={p} value={p}>{p}</option>
        ))}
      </select>
    </label>
  );
}