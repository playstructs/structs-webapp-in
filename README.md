# Structs in Hindi

The [structs-webapp](https://github.com/playstructs/structs-webapp) game client,
in Hindi. structs-webapp is a git submodule (`structs-webapp/`, following its
`main`) and its client is built as it is: its own JavaScript, page, styles and
art, with its webpack configuration as the starting point. What this repository
adds is the Hindi overlay in [`hi/`](hi/README.md), applied while webpack reads
webapp's sources. Nothing in the submodule is edited, so a newer structs-webapp
builds with the same overlay. It is made the same way as structs-kor and
structs-webapp-bra.

Only the client side is used. This site hosts no guild API of its own: the page
talks straight to a guild's API, its GRASS feed and its chain node, wherever the
guild runs them.

## Setup

```bash
git clone --recurse-submodules <this repository>
npm install          # also installs structs-webapp/src's own dependencies
npm run dev          # http://localhost:5196
```

## Which guild

The site, `galaxyandsons.structs.zone`, is the Indian players' own guild's,
Galaxy and Sons (`GNS`). Its name, tag, motto ("सन् 1987 से आपकी सेवा में।", "At your service
since 1987."), badge, token, id and hostname are all in
[`hi/guild.cjs`](hi/guild.cjs), and the site's `/guild.json` is made from them.

### On chain

| | |
|---|---|
| Guild | `0-17` Galaxy and Sons, owned by founder player `1-14691` (`structs1d662tf27kwp36cke0x347kwskvdxzmr4hzwfdk`) |
| Primary reactor | `3-2` ChainTools |
| Entry substation | `4-28`, fed by allocation `6-78` from the guild's own stake |
| Joining | open: join minimum 0, invite bypass permissioned |
| Endpoint | `https://galaxyandsons.structs.zone/guild.json` |
| Sign-up (TSA) | player `1-14693` (`structs1ke0w68uhmpyqndwe8hex3yhr06llptwnz4p54u`), the host's proxy-join signer: 512 (GuildMembership) on `0-17`, 1024 (SubstationConnection) on `4-28` |
| Bank denom | `chai` / `boond` (in guild.json) |

The guild shares SN Corp's API, so the page asks it for `/guild/<id>` instead of
`/guild/this`. Before webapp's code starts, it reads the guild's `guild.json`
(its endpoint on chain) for its `guild_api`, `grass_nats_websocket` and
`client_websocket` (`hi/runtime/guild.js`). If it can't be read, it uses what it
last read, then the fallback in `webpack.config.js`. Requests carry a bearer
token from the guild's `/api/auth/token`, since a guild's session cookie would be
third-party here.

Account recovery asks the chain which guild the key's player is in before it
calls the guild API, since a shared API may log in another guild's player. A
player of another guild is moved here first: the key signs
`MsgGuildMembershipJoin` for this guild (allowed when its join minimum is 0).
Recovery stops instead when the player owns their guild, the guild asks a join
minimum, or the chain can't be read (`hi/runtime/recovery.js`).

| Variable (build time) | Default | |
|---|---|---|
| `HI_LCD_URL` | `https://public.testnet.structs.network` | the chain node the guild is read from |
| `HI_GUILD_API` | — | a fixed guild API (a local guild in development), skipping guild.json |
| `HI_GRASS_URL`, `HI_CHAIN_WS` | — | override what the guild publishes |

### Hindi names

The chain refuses combining marks in names (structsd `ugc.go`), and most Hindi
vowel signs are combining marks. So the guild is `Galaxy and Sons` on chain, and
for now in its `guild.json` and on the page too (`name`); in Hindi it is
गैलेक्सी एंड संस. For the same reason players' names are in practice in A-Z.

## Sign-up and the player's key

Sign-up has no recovery key section: once the player has chosen their name, the
page makes their key and creates the account straight away (`hi/runtime/account.js`).
The Account page has **प्लेयर डाउनलोड करें** (Download Player) where webapp has Log
Out: a text file holding the mnemonic this browser signs with.

## Building and serving

```bash
npm run build        # dist/
```

`dist/` is a static site that uses absolute paths, so serve it from the root of
its domain. `.github/workflows/pages.yml` publishes it to GitHub Pages from `main`.

## Updating structs-webapp

```bash
npm run update:webapp
```

The audit lists what the update touched; `npm test` fails while anything remains
(see [`hi/README.md`](hi/README.md)). Commit the submodule pointer together with
the overlay.

## Fonts and licences

structs-webapp is Apache-2.0 (Slow Ninja Inc). Its pixel fonts have no
Devanagari, so Hindi is shown in the device's own Devanagari font
(`hi/public/hi/hi.css`); no font is downloaded or bundled.
