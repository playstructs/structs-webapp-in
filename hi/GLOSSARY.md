# शब्दावली — Hindi game vocabulary

One word per idea, everywhere. Struct-type data (classes, weapons, abilities)
is in `runtime/terms.json`; this page is for everything else and agrees with it.

## Voice

- Everyday spoken Hindi, in Devanagari, as Indian gamers talk: familiar English
  game words written in Devanagari (टैंक, मिसाइल, गिल्ड, अटैक where listed) with
  Hindi grammar around them. Never textbook Sanskritised Hindi (not `आक्रमण
  प्रारंभ करें`, `संगणक`, `कृपया प्रतीक्षा कीजिए`), never Latin-script Hinglish.
- Players are strategy gamers, not crypto users. The chain stays out of sight:
  no ब्लॉकचेन, वॉलेट, टोकन, ट्रांज़ैक्शन, गैस, साइन (signing) where a game word
  does the job (see the table). webapp's English is mostly game words already.
- Address the player as आप, with `-ें` imperatives: `चुनें`, `दबाएँ`, `भेजें`.
- The player's gender is unknown. Avoid verbs that agree with the player or
  Commander: `आपका स्वागत है`, `अकाउंट बन गया`, passives and nouns rather than
  `आप तैयार हैं/जीत गए`. Say `जीत आपकी!`, not `आप जीत गए`. A third-person
  player takes respectful plural or a passive: `… ने हमला किया`.
- HR Bot and corporate callers: polite, a little stiff and cheerful, like an
  Indian office's HR mail (`आदरणीय कमांडर`, `कृपया नोट करें`, `धन्यवाद`).
- Buttons, tabs, headers: short (`पुष्टि करें`, `रद्द करें`, `हमला`, `प्रोफ़ाइल`).
  The UI is narrow. Choose the shorter of two good words.
- Spelling: nukta where usual (ख़त्म, ज़मीन, प्रोफ़ाइल, फ़्लीट), chandrabindu for
  nasal vowels without a matra above the line (बनाएँ), anusvara with one (चुनें),
  anusvara for nasal consonants (संस, एंड). `ॉ` for English o (ऑनलाइन, लॉग).
- End sentences with `।`, not a full stop; `?` and `!` as usual. Ellipses `…`.
- Postpositions after `${name}` work with any name (`${name} ने`, `${name} को`,
  `${name} में`). Where gender agreement would depend on the value, rephrase.
  Possessives agree with the thing owned (`${name} का ग्रह`, `${name} की फ़्लीट`).
- Counts: exact replacement can't choose a singular or plural. Write a label
  and a value (`सदस्य: ${n}`) or a noun whose plural is the same (`3 ग्रह`).
- Digits stay 0-9. Numbers, units and ids stay as they are: `W`, `kW`, `g`,
  `PID`, `#`, `1-42`. Time left keeps webapp's letters only where code formats them.
- The guild and its motto are never written out: `{{guild}}`, `{{tag}}`,
  `{{motto}}`, `{{badge}}` (from `guild.cjs`) stand for them.

## Words

(m)/(f) is the Hindi gender, for agreement.

| English | हिन्दी |
|---|---|
| Structs (the game) | Structs (a name, stays in Latin) |
| Struct (a unit or building) | स्ट्रक्ट (m), plural स्ट्रक्ट; the machine race: स्ट्रक्ट्स |
| Player | प्लेयर |
| Commander | कमांडर |
| Guild | गिल्ड (f) |
| Guild member | गिल्ड मेंबर |
| Member Roster | मेंबर लिस्ट (f) |
| Corporation, Corp | कंपनी (f) (SN Corp as another guild's name stays) |
| HR Bot | HR बॉट |
| Planet | ग्रह (m) |
| Planetary Shield | ग्रह शील्ड (f) |
| Shield | शील्ड (f) |
| Planetary Defense | ग्रह रक्षा (f) |
| Fleet | फ़्लीट (f) |
| On station / away | तैनात / मिशन पर |
| Raid | धावा (m) |
| Raider / Defender | हमलावर / रक्षक |
| Attack / Defend / Move | हमला (m) / बचाव (m) / मूव |
| Primary / Secondary Weapon | मुख्य हथियार / दूसरा हथियार (m) |
| Counter-Attack | जवाबी हमला (m) |
| Stealth (Mode) | स्टेल्थ (मोड) (m) |
| Evade | चकमा (m) |
| Target | टारगेट (m), निशाना |
| Battleground | रणक्षेत्र (m) |
| Ambit: Space / Air / Land / Water | अंतरिक्ष / हवा / ज़मीन / पानी |
| Tile / Slot | खाना (m) / स्लॉट (m) |
| Deploy | तैनात करें, तैनाती (f) |
| Build | निर्माण (m), बनाएँ |
| Mine / Mining | खनन (m), खनन करें |
| Refine / Refining | शोधन (m), रिफ़ाइन करें |
| Alpha Matter | अल्फ़ा मैटर (m) |
| Alpha (amount) | अल्फ़ा (m) |
| Alpha Ore, Ore | अल्फ़ा अयस्क (m), अयस्क |
| Energy | ऊर्जा (f) |
| Power, Watts | पावर (f), W |
| Capacity / Load | क्षमता (f) / लोड (m) |
| Charge | चार्ज (m) |
| Battery | बैटरी (f) |
| Online / Offline (a struct) | चालू / बंद |
| Activate / Deactivate | चालू करें / बंद करें |
| Destroyed | तबाह |
| Reactor | रिएक्टर (m) |
| Substation | सबस्टेशन (m) |
| Infuse / Infusion | अल्फ़ा डालें / इन्फ़्यूज़न (m) |
| Defuse | अल्फ़ा निकालें |
| Consume Alpha | अल्फ़ा खपाएँ |
| Generator | जनरेटर (m) |
| Transfer, Send (alpha) | भेजें, ट्रांसफ़र (m) |
| Recipient | प्राप्तकर्ता |
| Transaction History | हिस्ट्री (f) |
| Transaction (shown to a player) | ट्रांसफ़र; queued actions: ऑर्डर |
| Username, Display Name | यूज़रनेम (m) |
| Player ID (PID) | प्लेयर ID |
| Profile | प्रोफ़ाइल (f) |
| Account | अकाउंट (m) |
| Device | डिवाइस (m) |
| Activate a device, activation code | डिवाइस जोड़ें, एक्टिवेशन कोड |
| Approve | मंज़ूर करें |
| Recovery Key | रिकवरी कुंजी (f) |
| Log in / Log out | लॉग इन / लॉग आउट |
| Stay Logged In | लॉग इन रहें |
| Sign up, New Player | नया प्लेयर |
| Returning Player | पुराना प्लेयर |
| Orientation | ओरिएंटेशन (m) |
| Combat Training (tutorial) | युद्ध प्रशिक्षण (m) |
| Scan | स्कैन (m) |
| Victory / Defeat | जीत (f) / हार (f) |
| Loading | लोड हो रहा है… |
| Confirm / Cancel / Back / Close | पुष्टि करें / रद्द करें / वापस / बंद करें |
| Continue / Next / Skip | आगे बढ़ें / आगे / छोड़ें |
| Settings | सेटिंग्स |
| Directory | सूची (f) |
| Leaderboard | लीडरबोर्ड (m) |
| Sector, Sector Map | सेक्टर (m), सेक्टर मैप |
| Sector Blitz, Operation: Sector Blitz | सेक्टर ब्लिट्ज़, ऑपरेशन: सेक्टर ब्लिट्ज़ |
| Influence Points (IP) | प्रभाव अंक (IP) |
| King of the Hill / KOTH Bonus | किंग ऑफ़ द हिल बोनस / KOTH बोनस |
| Event Rules / Results | इवेंट के नियम / नतीजे |
| Scoring, Score | स्कोरिंग, स्कोर (m) |
| Rival (guild, faction) | विरोधी |
| Offensive Raid | आक्रामक धावा |
| Under Attack | हमला जारी |
| Winning Guild / No Winner | विजेता गिल्ड / कोई विजेता नहीं |
| Remaining (time) | बाकी |
| 1st, 2nd, 3rd | #1, #2, #3 / पहला, दूसरा, तीसरा |
| Spectate | देखें, दर्शक मोड |
| Task, Executing | टास्क (m), जारी |
| Signal Jamming | सिग्नल जैमिंग (f) |
| Smart / Ballistic Weapon | स्मार्ट / बैलिस्टिक हथियार |
| Gatling / Missile / Torpedo / Cannon | गैटलिंग / मिसाइल (f) / टॉरपीडो (m) / तोप (f) |
| Damage (DMG) | नुकसान (m), short: DMG |
| Health (HP) | HP |
| Secure / Vulnerable / Breached (shield) | सुरक्षित / कमज़ोर / टूटी |
| Breach, Breach Countdown | सेंध (f), सेंध का काउंटडाउन |
| Ore Reserves | अयस्क भंडार (m) |
| Inspect (long-press) | जाँचें |
| Alpha Base | अल्फ़ा बेस (m) |
| Cooldown | कूलडाउन (m) |
| Commission | कमीशन (m) |
| Name Redacted, [REDACTED] | नाम गुप्त, [गुप्त] |
| Account / wallet / blockchain address | अकाउंट पता (m) |
| Non-Player Address | गैर-प्लेयर पता |
| Transfer Assets (permission) | संसाधन भेजना |
| Account Management (permission) | डिवाइस मैनेजमेंट |
| Signing paused | ऑर्डर भेजना रुका हुआ |
| Device seal | डिवाइस मुहर (f) |
| Confirmed on chain | पक्का हो गया |
| Structs Conglomerate | Structs महासंघ (m) |
| Alpha Star Council | अल्फ़ा स्टार परिषद (f) |
| Synthetic Resources Officer | सिंथेटिक रिसोर्स ऑफ़िसर |
| Employee, Employee Orientation | कर्मचारी, कर्मचारी ओरिएंटेशन |
| Galactic Codex | गैलेक्टिक कोडेक्स |
| Hoag (System) / Trydor | होग (तंत्र) / ट्राइडोर |
| Play Structs | Structs खेलें |
| N/A | — |

Struct names (the same as `runtime/terms.json`): कमांड शिप, बैटलशिप, स्टारफ़ाइटर,
फ़्रिगेट, परस्यूट फ़ाइटर, स्टेल्थ बॉम्बर, हाई-ऑल्टीट्यूड इंटरसेप्टर, मोबाइल तोपखाना,
टैंक, SAM लॉन्चर, क्रूज़र, डिस्ट्रॉयर, पनडुब्बी, अयस्क एक्सट्रैक्टर, अयस्क रिफ़ाइनरी,
ऑर्बिटल शील्ड जनरेटर, जैमिंग सैटेलाइट, अयस्क बंकर, ग्रह रक्षा तोप, फ़ील्ड जनरेटर,
महाद्वीपीय पावर प्लांट, वर्ल्ड इंजन. Model names (Spearpoint, Rolling Thunder, …) and
model numbers stay in English.
