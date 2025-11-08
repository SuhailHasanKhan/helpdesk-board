'use client';

export default function MyQueueSummary({ tickets, queued, onRemove, onClear }) {
    let queuedList = Object.keys(queued).map((id) => tickets.find((t) => t.id === id)).filter(Boolean);

    return (
        <div className="border border-green-700 rounded p-3">
            <h1 className="font-bold text-xl mb-2 tracking-wide">Queue ({queuedList.length})</h1>

            {queuedList.length === 0 ? (
                <p className="text-sm text-green-400">Nothing in queue.</p>
            ) : (
                <ul className="space-y-2 mb-3">
                    {queuedList.map((t) => (
                        <li key={t.id} className="flex items-center justify-between">
                            <span className="text-sm">{t.title}</span>
                            <button onClick={() => onRemove(t.id)} className="text-xs px-2 py-1 border border-green-700 rounded hover:bg-green-900/20">Remove</button>
                        </li>
                    ))}
                </ul>
            )}

            <button onClick={onClear} disabled={queuedList.length === 0} className="w-full text-sm px-3 py-2 rounded border border-green-700 disabled:border-green-900 disabled:text-green-800 hover:bg-green-900/20">Clear the Queue</button>
        </div>

    );

} 