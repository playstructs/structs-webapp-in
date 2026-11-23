# The Hindi overlay

Everything in this directory is applied to the `structs-webapp` submodule as
it is built. Nothing in the submodule is edited.

| Path | What it is |
|---|---|
| `guild.cjs` | The guild this site serves, its words and its `guild.json`, and the site's hostname |
| `strings/<upstream path>.json` | Hindi for one upstream file: `{"exact source text": "replacement"}` |
| `patches.cjs` | Changes that are not text: the guild connection, sign-up without a recovery key, dates and digit grouping, translating struct-type data where it is read |
| `runtime/` | Loaded before webapp's entry: `__hi.t()` with `terms.json` (Hindi for game data from the guild API), `__hi.guild` (the guild's services), `__hi.recovery` (moves a recovered player of another guild here) and `__hi.account` (sign-up and Download Player) |
| `public/` | Static files served over webapp's: `hi/hi.css` (Devanagari faces for webapp's fonts, from the device's own), the Hindi banner frames in `lottie/`, the guild's badge and logo in `hi/img/` |
| `art/banners.py` | Draws those banner frames from webapp's (needs Pillow); `banners.json` records which upstream frames they replace |
| `art/logo.py` | Draws the guild's badge and logo, after webapp's SN Corp badge (needs Pillow) |
| `page.cjs` | Renders webapp's Twig pages (`templates/`) to static HTML |
| `loader.cjs`, `translate.cjs` | Apply `patches.cjs` then `strings/` to each source file webpack reads |
| `audit.cjs` | Reports stale entries, English still on screen and translations that don't fit their code |
| `GLOSSARY.md` | The words and voice to use |

## Writing a strings file

`strings/js/view_models/signup/IncomingCall1ViewModel.js.json`:

```json
{
  "'Incoming Call'": "'इनकमिंग कॉल'",
  "<strong>Alert:</strong> Priority Call": "<strong>अलर्ट:</strong> ज़रूरी कॉल",
  "$keep": ["SN Corp"]
}
```

- A key is text copied exactly from the upstream file, and every occurrence in
  that file is replaced, in one pass, longest key first. Include enough around
  it (quotes, tags) that it can only match what a player reads, never an id,
  class, selector, event name, storage key or anything compared or sent to the
  guild or the chain.
- Keep `${…}` expressions, tags, attributes and the surrounding quotes; reorder
  them as Hindi needs. Translate readable attributes (`title`, `placeholder`,
  `alt`, `aria-label`, `data-sui-tooltip`).
- The guild's name, tag, motto and badge are `{{guild}}`, `{{tag}}`,
  `{{motto}}` and `{{badge}}`, from `guild.cjs`.
- Text that is also used as a value in code (`STRUCT_TYPES` names, for one)
  stays English. Translate it where it is shown instead, calling the runtime:
  `"${structType.type}</div>": "${__hi.t(structType.type)}</div>"`, and add the
  word to `runtime/terms.json`. Not in `js/workers/` or what it imports: the
  task worker has no `__hi`.
- Upstream text built from fragments, or a plural `s`, or a/an: handle it in
  the key so the result is correct Hindi, agreement included.
- `$keep` lists English left as is on purpose (names, units), as the audit
  prints it, so the audit stops reporting it. `keep.json` is the same list for
  every file.

Check a file as you go:

```bash
node hi/audit.cjs js/view_models/signup/IncomingCall1ViewModel.js
```

## Game data

`runtime/terms.json` follows the struct-type text guilds serve (structs-pg's
`struct_type` migrations). When a guild sends wording it doesn't have, the page
shows the English and logs `[hi] no Hindi for game data …` once.

## After updating structs-webapp

`npm run update:webapp` lists `stale`, `orphan`, `untranslated`, `mismatch` and
`broken` entries. Fix the key and its Hindi, or for banner frames run
`python3 hi/art/banners.py` again. `npm test` fails while any remain.
