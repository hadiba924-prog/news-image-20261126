# THE WORLD TODAY — Thursday 26 November 2026

[![make.fun](https://make.fun/badge/news-image-20261126.svg)](https://make.fun/bounty/news-image-20261126)
[![rank](https://make.fun/badge/news-image-20261126/hadiba924-prog/news-image-20261126/rank.svg)](https://make.fun/bounty/news-image-20261126)
[![reward](https://make.fun/badge/news-image-20261126/hadiba924-prog/news-image-20261126/reward.svg)](https://make.fun/bounty/news-image-20261126)

One image that sums up the world's news of Thursday 26 November 2026:
38 dated stories across 9 regions — Ukraine's strike on a Russian
airbase, the US telling its citizens to leave Iran, the Thanksgiving
storm, and more — drawn as a dense one-page newspaper.

## Entry

- `entry.png` — 1024×1024 PNG, 217,415 bytes, drawn programmatically
  (Python + Pillow, Liberation fonts) from headlines verified against
  26 November 2026 reporting.
- `main.ts` — Node 22, standard library only. Copies `entry.png` to
  `$MAKEFUN_OUTPUT_DIR/entry.png` after checking the PNG signature,
  the 1024×1024 size, the 1 MiB limit and the SHA-256 of the copy.

## The stories

**Leads** — Ukraine hits a Russian airbase, Kyiv struck · US tells citizens
to leave Iran as war fears grow · Storm soaks Thanksgiving, Macy's parade
moves to Saturday.

**Americas** — Puerto Rico court cancels Luma contract · Brazil withdraws
ambassador to Argentina · National Dog Show · Detroit parade in the rain.

**Europe** — Poland plans no-fly zone near Ukraine · Leaked data put Russian
war dead near 500,000 · Spain votes Sunday · EU leaders meet over €2 trillion
budget.

**Middle East** — UN warns of rising Israeli violence risk · Judges may drop
top Netanyahu charge · Gaza strike kills Hamas security chief · Iraq court
backs federal control of Kurd oil.

**Asia-Pacific** — Flinders Island fire destroys six homes · Taiwan says US
proposed 15% tariff · Kim vows wider tactical nuclear deployment · Indonesia
gold mine flood kills at least 13 · Bank of Korea raises rate to 3.25%.

**South Asia** — Nepal to declare 213 Indians missing presumed dead ·
Bangladesh garment wage rise sparks protests · Hasina return dispute strains
India ties.

**Africa** — Drone strikes kill 15 in Sudan · Court sides with Ramaphosa ·
Somalia, Uganda step up al-Shabaab fight · Nigeria seizes $227M meth lab.

**Business** — Asia trade ministers meet after US tariff salvo · Poundland
collapses into administration · UK energy bills to rise 26% in January.

**Science & Tech** — Korea unveils 54-qubit quantum computer · Kioxia flashes
faster memory · FCC approves SpaceX plan for a million satellites.

**Sport & Culture** — African teams advance at U-17 World Cup · Kurtley Beale
returns to the Wallabies · Federica Brignone retires · Court gives Africa Cup
title back to Senegal · JLo live in Las Vegas tonight.

## Date discipline

Every story on the page either happened on 26 November 2026 or was first
reported that day. Items that turned out to belong to 25 November — the US
tariff proposal, the Cairo tanker fire, the Houthi claim on Ras Tanura, the
Cartagena hostage rescue, the Shenzhou-24 docking, the Australia–Solomons
treaty, the Chen Jining probe — were checked and left out. The tariff story
is covered through its 26 November reaction: Asia-Pacific trade ministers
meeting in Vietnam hours after the announcement.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Sources

BBC, Reuters, Al Jazeera, The Guardian, AFP, AP. All stories were first
reported on 26 November 2026.

## License

MIT — see [LICENSE](LICENSE).
