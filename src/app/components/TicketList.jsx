'use client';

import TicketCard from './TicketCard';

export default function TicketList({ tickets, queued, onAddToQueue }) {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      {tickets.map((t) => (
        <TicketCard key={t.id} ticket={t} isQueued={!!queued[t.id]} onAddToQueue={() => onAddToQueue(t.id)}/>
      ))}
    </div>
  );
}