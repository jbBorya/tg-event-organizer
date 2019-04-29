const { TELEGRAM_BOT_TOKEN } = require('../secrets/tgToken')
const Slimbot = require('slimbot');
const slimbot = new Slimbot(TELEGRAM_BOT_TOKEN);

module.exports = slimbot;