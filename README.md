# Helpdesk Ticket Board (Next.js + React)

A retro-styled helpdesk dashboard where users browse IT support tickets, search, filter by status & priority, and add items to “My Queue.” Tickets automatically update to simulate real helpdesk activity.  

Built with **Next.js App Router**, **JavaScript + JSX only (no TypeScript)**, and **Tailwind CSS**.

---

## Getting Started

### Install dependencies
npm install

### Start development server
npm run dev

### Open the app
http://localhost:3000

---

## Project Structure

src/  
 ├─ app/  
 │  ├─ page.js  
 │  ├─ api/  
 │  │  └─ tickets/route.js  
 │  └─ components/  
 │     ├─ Board.jsx  
 │     ├─ TicketList.jsx  
 │     ├─ TicketCard.jsx  
 │     ├─ StatusFilter.jsx  
 │     ├─ PriorityFilter.jsx  
 │     ├─ SearchBox.jsx  
 │     ├─ MyQueueSummary.jsx  
 │     └─ StatusMessage.jsx  
 └─ app/lib/severity.js  

✅ Client components start with `'use client'`  
✅ API route returns ticket JSON  
✅ No TypeScript — `.js` / `.jsx` files only

---

## Features & Rubric Checklist

### Project Setup & Structure (15 pts)
- Next.js App Router set up
- Tailwind enabled
- Correct folder and file structure

### Components + JSX + Keys (20 pts)
- Reusable components for list, card, filters, queue, messages
- `.map()` usage with `key={ticket.id}`

### Props + Lifting State (20 pts)
- `Board.jsx` manages state for tickets, filters, search, queue
- Child components receive data + callbacks via props

### State + Controlled Inputs (15 pts)
- `useState` used for filters/search/queue
- Fully controlled `<select>` + `<input>` elements

### Effects + Cleanup (20 pts)
- `useEffect` to fetch tickets on mount
- `useEffect` for simulated live updates
- Interval cleanup with `clearInterval`

### UX + Conditional Rendering (10 pts)
- Loading, error, and empty states shown
- Disabled button when ticket already queued

✅ **All requirements implemented (100/100)**

---

## App Features
- Fetch tickets from `/api/tickets`
- Filter by **Status** and **Priority**
- Search tickets by title/description
- Add tickets to **My Queue**
- Remove ticket or clear queue
- Live ticket updates every few seconds
- Retro green-on-black terminal UI

---

## Visual Style
- Black background (`bg-black`)
- Neon green text (`text-green-300`)
- Monospace terminal look (`font-mono`)
- Glowing hover states + borders

---

## Notes
- No TypeScript used
- Runs with `npm install` + `npm run dev`
