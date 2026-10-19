# HX Nexus Trader Portal — Reference UI Clone

A responsive React/Vite frontend recreation based on the provided HX Nexus Trader Portal screenshot. The default landing page is Accounts, with a grouped sidebar and header controls modeled on the reference.

## Run locally

Requirements: Node.js 18 or newer.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Included UI and interactions

- HX Nexus-style logo, client identity card, grouped/scrollable sidebar and active navigation state
- Accounts page with balances summary, USD/EUR/live/practice account cards, Open account and Transfer actions
- Dashboard, Fund, Statements, Rewards, Games, Referrals, Support, Onboarding and Profile pages
- Day/night theme switch
- Language dropdown (selection is a UI demo; content translation is not implemented)
- Notification dropdown, profile dropdown, and Sign out confirmation
- Responsive mobile navigation, action dialogs, feedback toasts, demo funding form and referral-link interaction

## Important limitations

This is a frontend-only demo. All account names, balances, statements, notifications, referral records and statuses are illustrative sample data. There is no authentication, backend, payment provider, broker integration, or live trading functionality. It is inspired by the supplied screenshot, not a pixel-perfect copy of private authenticated pages.
