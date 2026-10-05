# Kav Cafe inventory count (جرد كاف) — demo

Daily stock-count app + management dashboard for **Kav Cafe** (كاف كافيه, Dammam · Qatif), built as a copy of
`~/nira-inventory` (same features) with Kav's branding, branches and an item list made from their menu.
Front end only: sample data, saved in the browser (localStorage, `kav-inventory-v1`). Not deployed yet.

## Run

```bash
npm install
npm run dev      # http://localhost:5196  (also on your Wi-Fi IP, port 5196, for a phone)
```

| Area | URL | Demo login |
|---|---|---|
| Staff count page | `/` | shared password `1234` |
| Management dashboard | `/#/admin` | `manager` / `1234` |

Staff: password → pick branch → count every item → name → review → send.
Dashboard: Today, Branches, Order list, History, Edit log, Items & settings; CSV export and print-to-PDF. Arabic by default, English toggle.

## What came from Kav (via `~/kav-cafe`)

| Where | What |
|---|---|
| `src/data/branches.js` | 7 branches: the 5 from their hours highlight + King Fahd Specialist Hospital and Al Salam (newer) |
| `public/assets/logo-*.png`, `favicon.png`, `icon.png` | Their logo (cream on dark, maroon on light) |
| `src/styles.css` → `@theme` | Kav green / maroon / cream / gold. Status colours stay green / orange / red |
| `items.csv` | **Proposed** list of 69 items (77 count cells) built from their menu: coffee, milks, sauces, mojito/tea, bread and sandwich fillings, each dessert, cups/lids/drive-thru bags, cleaning |

## Confirm with Kav

- The item list, minimums (`low`) and order quantities in `items.csv` are **my guesses** from the menu, not from Kav.
  They'll have their own list (and maybe a paper sheet like Nira's); swap it into `items.csv`, the app reads it directly.
- Whether desserts/croissants arrive ready from a supplier (counted by piece, as now) or are made in-house.
- Whether all branches (hospital kiosks vs drive-thru) use the same item list.
- Branch names and whether all 7 count daily.

## Code map

Same as Nira: `items.csv` → `src/data/items.js` · `src/data/branches.js` · `src/data/seed.js` (14 days of demo history,
2 branches missing today) · `src/store.jsx` (localStorage; swap for Supabase for a live version) · `src/staff/*` · `src/admin/*`.
