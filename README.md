# THE WORLD TODAY — Thursday 26 November 2026

[![news-image-20261126](https://make.fun/badge/news-image-20261126.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![rank](https://make.fun/badge/news-image-20261126/hadiba924-prog/news-image-20261126/rank.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![reward](https://make.fun/badge/news-image-20261126/hadiba924-prog/news-image-20261126/reward.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)

## What this is

One page that sums up the world's news of Thursday 26 November 2026: a dense
data front page, "THE WORLD TODAY", drawn entirely in code with Python and
Pillow — no AI image generation, so every letter is crisp and nothing is
garbled. Three leads on top, then 24 more stories in eight colour-coded
sections. Every story on the page either happened on 26 November 2026 or was
first reported that day, in some time zone. The page was built in the first
hours of the day (UTC), so it covers the news that existed by then — the
Thanksgiving storm in New York, Taiwan's tariff answer, the BBC–Met Office
partnership going live, and the day's sport and fixtures — and it says so
honestly rather than padding itself with yesterday's news.

## The stories

**Leads** — Storm hits Thanksgiving (New York rain, wind and warnings; the
100th Macy's parade moves to Saturday) · Taiwan tariff: 15% (Taipei says the
US proposed the lowest tier) · BBC x Met Office live (partnership goes live
today).

**Americas** — Thanksgiving Day · NYC storm warnings · Parade replay on NBC ·
Detroit parade steps off · National Dog Show.

**Europe** — Snow sweeps Scotland · UK cities: cloudy, 4–8°C.

**Asia-Pacific** — PIA flies its own jets to UK.

**South Asia** — India marks Constitution Day · National Milk Day · Farm
unions to protest.

**Business** — Wall Street shut after slide (Wednesday's close is given as
context; the closure is Thursday's news) · Tata Sons board put off (announced
25 Nov; the meeting itself was scheduled for 26 Nov).

**Science & Tech** — AI meets copyright · Quantum leap for Korea (IQM–QAI
54-qubit computer) · Kioxia flashes faster memory.

**Sport** — Chess: Game 3 today (Gukesh–Sindarov, Geneva) · India A v Sri
Lanka A · Pakistan A v Bangladesh A · Bears at Lions 1 p.m. · Eagles at
Cowboys 4:30 p.m. · Chiefs at Bills 8:20 p.m. · TCU at Texas Tech 8 p.m.

**Tonight on TV** — JLo live in Las Vegas, Mary Poppins, The Tonight Show
with Justin Timberlake, Friendsgiving marathon.

## Sources

Reuters, AP, BBC, Met Office, Chess.com, NFL, ACC, weather.com, and the
outlets that first reported each item on 26 November 2026. Stories that
turned out to belong to 25 November — the Houthi claim on Ras Tanura, the
Cairo tanker fire, the Cartagena hostage rescue, the Shenzhou-24 docking,
the North Korea–Switzerland expulsion, the IPL auction list, the Flipkart
CEO exit, the Hera asteroid images — were checked and left out.

## How to run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `entry.png` to
`$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output`) and verifies it first:
at most 1,048,576 bytes, exactly 1024×1024 pixels, whole PNG or JPEG by its
magic bytes, and byte-identical to the source after copying. Running it twice
writes the same bytes twice — it is a pure copy, so it is deterministic.

To redraw the image from scratch:

```sh
python3 build_image.py
```

That regenerates `entry.png` with Pillow and Liberation Sans. The image is
1024×1024 and 197,530 bytes (PNG), inside the bounty limits.

## Licence

MIT — see LICENSE.
