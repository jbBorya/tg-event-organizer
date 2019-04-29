const slimbot = require('./botConfig');
const Routes = require('./routes');
const Responser = require('./routes/responser');
const { BOT_NAME } = require('../secrets/tgToken')

slimbot.on('message', message => {
    switch (message.text) {
        case `/info@${ BOT_NAME }`:
        case "/info": Routes.info(message.chat.id); break;
        case `/anmeldung@${ BOT_NAME }`:
        case "/anmeldung": Routes.register(message.chat.id, message.from); break;
        case `/abmeldung@${ BOT_NAME }`:
        case "/abmeldung": Routes.deregister(message.chat.id, message.from)
    }
});

slimbot.on('callback_query', query => {
    const data = JSON.parse(query.data);
    switch (data.type) {
        case "info": Responser.info(data.value, query.message.chat.id); break;
        case "register": Responser.register(data.value.id, data.value.u , query.message.chat.id); break;
        case "deregister": Responser.deregister(data.value.id, data.value.u , query.message.chat.id);
        
    }
});

slimbot.startPolling();