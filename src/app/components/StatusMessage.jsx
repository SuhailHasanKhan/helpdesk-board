'use client';

export default function StatusMessage({ loading, error, isEmpty }) {
  if (loading) return <p className="text-sm text-green-400 mb-3">Loading, please wait...</p>;
  if (error)   return <p className="text-sm text-red-400 mb-3">Error loading tickets.</p>;
  if (isEmpty) return <p className="text-sm text-green-400 mb-3">No results.</p>;
  return null;
}