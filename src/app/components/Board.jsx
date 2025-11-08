'use client';

import { useEffect, useMemo, useState } from 'react';
import TicketList from './TicketList';
import StatusFilter from './StatusFilter';
import PriorityFilter from './PriorityFilter';
import SearchBox from './SearchBox';
import MyQueueSummary from './MyQueueSummary';
import StatusMessage from './StatusMessage';

let statusFlow = ['Open', 'In Progress', 'On Hold', 'Resolved'];
let priorities = ['Low', 'Medium', 'High', 'Critical'];

let rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export default function Board() {
    let [tickets, setTickets] = useState([]);
    let [loading, setLoading] = useState(true);
    let [error, setError] = useState('');
    let [filters, setFilters] = useState({ status: 'All', priority: 'All' });
    let [search, setSearch] = useState('');
    let [queue, setQueue] = useState({});    

    useEffect(() => {
        setLoading(true);
        fetch('/api/tickets')
          .then((r) => {
            if (!r.ok) throw new Error('Error occured while atetempting to load tickets.');
            return r.json();
          })
          .then((data) => {
            setTickets(data);
            setError('');
          })
          .catch((e) => setError(e.message || 'Error loading tickets.'))
          .finally(() => setLoading(false));
    }, []);

    useEffect(() => {
        if (tickets.length === 0) return;

        let ticketInterval = rand(4000, 7000);
        let id = setInterval(() => {
            setTickets((prev) => {
                if (prev.length === 0) return prev;

                let index = rand(0, prev.length - 1);
                let pick = prev[index];

                let spChange = Math.random() < 0.5 ? 'status' : 'priority';
                let nextStatus = pick.status;
                let nextPriority = pick.priority;

                if (spChange === 'status') {
                    let sop = statusFlow.indexOf(pick.status);
                    let nextSop = Math.min(pos + 1, statusFlow.length - 1);
                    nextStatus = statusFlow[nextSop];
                } else {
                    let sop = priorities.indexOf(pick.priority);
                    let delta = Math.random() < 0.6 ? 1 : -1;
                    let nextSop = Math.max(0, Math.min(priorities.length - 1, sop + delta));
                    nextPriority = priorities[nextSop];
                }

                let updated = new Date().toISOString();

                return prev.map((t, i) =>
                    i === index ? { ...t, status: nextStatus, priority: nextPriority, updatedAt: updated } : t
                );
        
            });
        }, ticketInterval);

        return () => clearInterval(id);
    }, [tickets.length]);

    let visibleTickets = useMemo(() => {
        let q = search.trim().toLowerCase();
        return tickets.filter((t) => {
            let matchStatus = filters.status === 'All' || t.status === filters.status;
            let matchPriority = filters.priority === 'All' || t.priority === filters.priority;
            let hay = (t.title + ' ' + t.description).toLowerCase();
            const matchSearch = q === '' || hay.includes(q);
            return matchStatus && matchPriority && matchSearch;
        });
    }, [tickets, filters, search]);

    let addingToQueue = (id) => {
        setQueue((prev) => ({ ...prev, [id]: true }));
    };

    let removingFromQueue = (id) => {
        setQueue((prev) => {
            let next = { ...prev };
            delete next[id];
            return next;
        });
    };

    let clearingQueue = () => setQueue({});

    return (
        <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
            <section>
                <div className="mb-4 flex flex-wrap gap-3 p-3 border border-green-700 rounded">
                    <StatusFilter value={filters.status} onChange={(v) => setFilters((f) => ({ ...f, status: v }))}/>
                    <PriorityFilter value={filters.priority} onChange={(v) => setFilters((f) => ({ ...f, priority: v }))}/>
                    <SearchBox value={search} onChange={setSearch} />
                </div>
                <StatusMessage loading={loading} error={error} isEmpty={!loading && visibleTickets.length === 0}/>

                {!loading && !error && (
                    <TicketList tickets={visibleTickets} queued={queue} onAddToQueue={addingToQueue}/>
                )}
            </section>
            <aside>
                <MyQueueSummary tickets={tickets} queued={queue} onRemove={removingFromQueue} onClear={clearingQueue}/>
            </aside>
        </div>
    );
}


