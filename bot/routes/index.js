const EventTable = require('../../event/table');
const slimbot = require('../botConfig');

class Routes {
    static info(chatId) {
        EventTable.all()
            .then((events) => {
                let inlineKeyboard = [];
                let i = 0;
                for (i = 0; i < events.length; i++) {
                    inlineKeyboard.push([{
                        text: events[i].toString(),
                        callback_data: JSON.stringify({
                            type: 'info',
                            value: events[i].eventId
                        })
                    }]);
                }

                let optionalParams = {
                    parse_mode: 'Markdown',
                    reply_markup: JSON.stringify({
                        inline_keyboard: inlineKeyboard
                    })
                }

                slimbot.sendMessage(chatId, 'Choose your event!', optionalParams);
            })
            .catch((error) => {
                console.error('error', error);
            });
    }

    static register(chatId, user) {
        EventTable.byUser(false, user.username)
            .then((events) => {
                console.log('log', user);
                let inlineKeyboard = [];
                let i = 0;
                for (i = 0; i < events.length; i++) {
                    inlineKeyboard.push([{
                        text: events[i].toString(),
                        callback_data: JSON.stringify({
                            type: 'register',
                            value: {
                                id: events[i].eventId,
                                u: user.username
                            }
                        })
                    }]);
                }

                let optionalParams = {
                    parse_mode: 'Markdown',
                    reply_markup: JSON.stringify({
                        inline_keyboard: inlineKeyboard
                    })
                }

                slimbot.sendMessage(chatId, 'Register for an event!', optionalParams);
            })
            .catch((error) => {
                console.error('error', error);
            });
    }

    static deregister(chatId, user) {
        EventTable.byUser(true, user.username)
            .then((events) => {
                console.log('log', user);
                let inlineKeyboard = [];
                let i = 0;
                for (i = 0; i < events.length; i++) {
                    inlineKeyboard.push([{
                        text: events[i].toString(),
                        callback_data: JSON.stringify({
                            type: 'deregister',
                            value: {
                                id: events[i].eventId,
                                u: user.username
                            }
                        })
                    }]);
                }

                let optionalParams = {
                    parse_mode: 'Markdown',
                    reply_markup: JSON.stringify({
                        inline_keyboard: inlineKeyboard
                    })
                }

                slimbot.sendMessage(chatId, 'Deregister from an event!', optionalParams);
            })
            .catch((error) => {
                console.error('error', error);
            });
    }
}

module.exports = Routes;