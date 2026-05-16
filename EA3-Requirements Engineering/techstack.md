# Tech Stack

## Leitprinzipien

> **Kostengünstig und einfach.** Als Solo-Entwickler zählt jede Stunde. Der Stack soll produktiv machen, nicht bremsen — und im Free-Tier laufen, solange das Projekt klein ist.

---

## Übersicht

| Schicht | Technologie | Begründung |
|---|---|---|
| Mobile App | React Native + Expo | Cross-platform (iOS + Android), ein Codebase |
| Sprache | TypeScript | Typsicherheit, bessere DX, weniger Laufzeitfehler |
| Backend & DB | Supabase | Postgres, Auth, Storage, Realtime — alles in einem, großzügiger Free-Tier |
| Auth | Supabase Auth | E-Mail/Passwort + Social Login out of the box |
| Push-Notifications | Expo Notifications + Supabase Edge Functions | Einfache Integration ohne extra Service |
| Deployment | Expo EAS Build | Managed Build & OTA-Updates ohne eigene CI |

---

## Frontend — React Native + Expo

**Warum Expo?**
- Kein eigenes Xcode/Android Studio Setup nötig für den Start
- OTA-Updates: Kleine Fixes erreichen Nutzer sofort, ohne App-Store-Review
- Expo EAS baut die nativen Binaries in der Cloud

**Wichtige Libraries (geplant)**

| Library | Zweck |
|---|---|
| `expo-router` | File-based Navigation (ähnlich Next.js) |
| `@supabase/supabase-js` | Supabase Client |
| `react-query` (TanStack Query) | Server-State-Management, Caching |
| `zod` | Validierung von Formularen und API-Responses |
| `react-hook-form` | Formularverwaltung |
| `date-fns` | Datums-Formatierung |

---

## Backend — Supabase

**Warum Supabase?**
- Managed Postgres: kein eigener Server, kein DevOps
- Row-Level Security (RLS): Datenschutz direkt in der Datenbank
- Realtime: Bewertungen und Reviews erscheinen live
- Storage: Buchcover-Bilder ohne extra CDN
- Free-Tier: 500 MB DB, 5 GB Storage, 50.000 MAU — ausreichend für MVP

**Geplante Tabellen (grob)**

```
clubs         — id, name, description, created_by
memberships   — club_id, user_id, role (admin | member)
books         — id, club_id, title, author, cover_url, added_by, added_at
readings      — id, book_id, user_id, read_at, rating, review
events        — id, club_id, book_id, title, date, location
attendances   — event_id, user_id, status (going | not_going)
```

**Row-Level Security:** Mitglieder sehen nur Daten ihres eigenen Clubs.

---

## Kosten (Free-Tier-Plan)

| Service | Free-Tier | Limit für MVP |
|---|---|---|
| Supabase | kostenlos | 500 MB DB, 50k MAU |
| Expo EAS | kostenlos | 30 Builds/Monat |
| App Store / Play Store | 99 $/Jahr / 25 $ einmalig | Einmalige Kosten |

**Gesamtkosten MVP-Phase: ~125 $ einmalig** (App Store Accounts), laufend 0 $.

---

## Entwicklungsumgebung

- **Editor:** VS Code + ESLint + Prettier
- **Versionskontrolle:** Git + GitHub
- **Testing:** Jest + React Native Testing Library (Unit), Expo Go für Device-Tests
- **Design:** Figma (Wireframes vor dem Coden)

---

## Skalierung (wenn nötig)

Der Stack skaliert ohne Technologiewechsel:
- Supabase Pro ab 25 $/Monat für mehr Ressourcen
- Edge Functions für komplexere Backend-Logik (z. B. Jahresstatistiken)
- Expo EAS Production Plan für mehr Builds
