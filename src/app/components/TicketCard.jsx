'use client';

export default function TicketCard({ ticket, isQueued, onAddToQueue }) {
    const { title, description, priority, status, assignee, updatedAt } = ticket;

    return (
        <div className="border border-green-700 rounded p-3 bg-black/60">
            <h2 className="font-bold text-lg mb-1 tracking-wide">{title}</h2>
            <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 rounded border border-green-600 text-green-300 text-xs">Status: {status}</span>
                <span className="px-2 py-0.5 rounded border border-green-600 text-green-300 text-xs">Priority: {priority}</span>
            </div>

            <p className="text-sm text-green-400 mb-2">{description}</p>
            <div className="text-xs text-green-500 mb-3">
                <span>Assignee: {assignee}</span>
                <span className="mx-2">|</span>
                <span>Updated: {new Date(updatedAt).toLocaleString()}</span>
            </div>

            <button onClick={onAddToQueue} disabled={isQueued} className={`w-full text-sm px-3 py-2 rounded border ${isQueued ? 'border-green-900 text-green-800 cursor-not-allowed' : 'border-green-600 text-green-300 hover:bg-green-900/20'}`}>
                {isQueued ? 'In My Queue' : 'Add to My Queue'}
            </button>
        </div>
    );
}