# Wander mockups

Clickable HTML mockups for **Wander**, an iPhone audio guide for tourists. We agree on each screen here before building it in SwiftUI.

Open `index.html` in a browser. The phone is clickable, and the panel next to it switches between states (Near or Popular, playing or not, free or premium, location on or off, light or dark).

## The idea

- Open the app and see attractions in two orders: **Near** and **Popular**.
- Tap one to see its photo and hear a 1-minute intro. **Tell me more** plays a 3 to 5 minute guide.
- Works anywhere in the world, in many languages. Place data comes from Wikipedia, a language model writes the guide, and the results are cached in Redis. Guides and audio are generated the first time someone asks for them, as long as that is fast enough.
- Free: 10 places a month. Premium: a weekly pass or $10 a month.

## Decisions

| Topic | Decision |
| --- | --- |
| More detail | A Tell me more button. Spoken questions come later. |
| Where | Places around you, plus search for any city or place. |
| Free limit | 10 places a month. A place counts the first time you play it; replays are free. |
| Popular | Popular in your area (about a city's distance), ranked by Wikipedia page views. |
| Guide text | Shown under the photo, highlighted as the audio plays. |
| Account | None until you subscribe, then Sign in with Apple. |
| Plans | Weekly pass and $10 a month. |
| Look | Native iOS, light and dark. |
| Name | Wander |

## Screens

| # | Screen | Status |
| --- | --- | --- |
| 1 | Attractions list | In review |
| 2 | Attraction page and player | Next |
| 3 | Search | Later |
| 4 | Paywall | Later |
| 5 | Welcome | Later |
| 6 | Settings | Later |

Proposed on screen 1: a **Listened** tab with the places you've heard.

## Placeholders

Photos are drawn placeholders. The app will use each place's photo from Wikimedia Commons, with credits. Distances and guide lengths are examples.
