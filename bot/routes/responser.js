const EventTable = require('../../event/table');
const RegistrationTable = require('../../registration/table');
const Registration = require('../../registration');
const slimbot = require('../botConfig');
const fs = require('fs');
const Mustache = require('mustache');

class Responser {
    static info(eventId, chatId) {
        EventTable.byId(eventId)
            .then((event) => {
                console.log('event_info', event)
                fs.readFile('bot/html/info.hbs', (err, data) => {
                    event['plannedfor'] = event.plannedfor.getDate() + ". " + (event.plannedfor.getMonth() + 1) + ". " + event.plannedfor.getFullYear();
                    event['deadline'] = event.deadline.getDate() + ". " + (event.deadline.getMonth() + 1) + ". " + event.deadline.getFullYear();
                    const html = Mustache.render(data.toString('utf-8'), event);
                    slimbot.sendMessage(chatId, html, {parse_mode: 'html'});
                });
            })
            .catch((error) => console.error('error', error));
    }

    static register(eventId, username, chatId) {
        RegistrationTable.persist(new Registration({
            username, eventId,
            regDate: new Date()
        }))
            .then(() => {
                slimbot.sendMessage(chatId, "Registered.");
            })
            .catch((error) => console.error('error', error));
    }

    static deregister(eventId, username, chatId) {
        RegistrationTable.remove({
            username, eventId
        })
        .then(() => {
            slimbot.sendMessage(chatId, "Deregistered.");
        })
        .catch((error) => console.error('error', error));
    }

}

module.exports = Responser;