# S Wave Countdown Timer Bar — App Plan

## Goal
Give merchants a fast way to add an on-brand countdown timer bar that boosts urgency and conversion, with simple scheduling and targeting.

## MVP (Phase 1)
- Create timer bars with title + optional message + CTA button.
- Placement options: top banner, bottom banner, or product-page inline block.
- Targeting: all products, specific products, or collections.
- Scheduling: start/end date + time zone aware display.
- Theme editor app block (liquid/checkout? later) with basic styling controls.
- Basic analytics: views, clicks, conversions (via add-to-cart clicks).

## Configuration
- Timer settings: end date/time, recurring weekly option (v2), format (DD:HH:MM:SS or HH:MM:SS).
- Style controls: background, text, CTA color, font size, border radius.
- Behavior: hide when expired, show “offer ended” message toggle.

## Data Model (MVP)
- TimerBar: id, name, status, scope (product/collection/all), schedule, style, cta, createdAt.
- TimerEvent: timerId, eventType (view/click/add_to_cart), timestamp.

## Technical Notes
- Build embedded admin UI with Polaris.
- Frontend injection via App Block + script tag for storefront rendering.
- Store config in Prisma (SQLite for dev; Postgres later).

## Next Steps
1. Define admin settings UI screens + form flow.
2. Build App Block UI skeleton + storefront rendering stub.
3. Wire basic analytics events.
