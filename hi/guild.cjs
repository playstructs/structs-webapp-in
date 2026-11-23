// The guild this site serves, and the words the overlay uses for it.
//
// Everything about the guild is here: strings/ and runtime/ name it only
// through these values ({{guild}}, {{tag}}, {{motto}}, {{badge}} in strings/,
// filled in by translate.cjs), and the site's guild.json is made from them, so
// founding or renaming it changes this file and the art, and nothing else.
//
// With `founded` false the site plays through SN Corp (0-5) instead: recovery
// moves nobody (runtime/recovery.js), no guild.json is served, the build warns
// and the Pages workflow refuses to deploy.
const guild = {
  founded: true,
  id: '0-17',
  name: 'गैलेक्सी एंड संस',
  // The name on chain: the chain takes letters, digits, - _ ' and spaces but no
  // combining marks, which most Hindi vowel signs are (structsd ugc.go).
  chainName: 'Galaxy and Sons',
  tag: 'GNS',
  motto: 'सन् 1987 से आपकी सेवा में।',
  badge: '/hi/img/gns-badge.png',
  logo: '/hi/img/gns-logo.png',
  // The guild's token: a million boond (drops) make a chai.
  denom: {6: 'chai', 0: 'boond'},

  // The site's hostname.
  host: 'galaxyandsons.structs.zone',
  // Onboarding telemetry's interface name: a guild accepts only
  // RegexPattern::SLUG here (ASCII letters, digits, _ . -).
  telemetry: 'galaxyandsons.structs.zone',
  // Google Tag Manager container, e.g. 'GTM-XXXXXXX'; empty for none.
  gtm: '',
};

/** The guild.json served at the guild's on-chain endpoint, https://<host>/guild.json. */
function guildJson() {
  return {
    guild: {
      schema_version: 1,
      id: guild.id,
      name: guild.name,
      description: guild.motto,
      tag: guild.tag,
      logo: `https://${guild.host}${guild.logo}`,
      webapp: guild.host,
      website: `https://${guild.host}`,
      recruiting: {status: 'open'},
      socials: {
        bluesky: '', facebook: '', farcaster: '', instagram: '', twitch: '', x: '', youtube: '',
        discord_contact: '', discord_server: '', telegram_contact: '', telegram_channel: '',
      },
      denom: guild.denom,
      services: {
        guild_api: 'https://beta.playstructs.com/api/',
        reactor_api: 'https://public.testnet.structs.network/',
        client_websocket: 'wss://public.testnet.structs.network:26657/websocket',
        grass_nats_websocket: 'wss://beta.playstructs.com:1443',
        matrix: 'https://matrix.beta.playstructs.com',
        explorer: '',
      },
    },
  };
}

module.exports = {...guild, guildJson};
