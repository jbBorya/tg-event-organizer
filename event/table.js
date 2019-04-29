const pool = require('../databasePool');
const Event = require('./')

class EventTable {

    static persist(event) {
        return new Promise((resolve, reject) => {
            pool.query(
                `INSERT INTO "event"(plannedFor, title, venue, street, streetNo, zipcode, city, deadline, msg)
                VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING id;`,
                [event.plannedfor, event.title, event.venue, event.street, event.streetNo, event.zipcode, event.city, event.deadline, event.message],
                (error, response) => {
                    if (error) return reject(error);

                    const eventId = response.rows[0].id;
                    resolve({ eventId });
                }
            );
        });
    }

    // TODO: Event inklusive Teilnehmer mit Promise.all()
    static all() {
        console.log('entered', 'original all');
        return new Promise((resolve, reject) => {
            pool.query(
                `SELECT id, plannedFor, title, venue, street, streetNo, zipcode, city, deadline, msg 
                FROM "event";`,
                (error, response) => {
                    if (error) return reject(error);

                    const output = [];
                    var i = 0;

                    //console.log(response.rows[0].id);

                    for (i = 0; i < response.rows.length; i++) {
                        output.push(new Event({
                            ...response.rows[i],
                            eventId: response.rows[i].id,
                            message: response.rows[i].msg
                        }));
                    }

                    resolve(output);

                }
            );
        });
    }

    static byUser(registered, username) {
        console.log('entered', 'overloaded all');
        return new Promise((resolve, reject) => {
            const query = registered ?
                `SELECT e.id, e.plannedFor, e.title, e.venue, e.street, e.streetNo, e.zipcode, e.city, e.deadline, e.msg
            FROM registration r INNER JOIN "event" e ON r.eventId = e.id
            WHERE r.username = $1;` :
                `SELECT e.id, e.plannedFor, e.title, e.venue, e.street, e.streetNo, e.zipcode, e.city, e.deadline, e.msg
            FROM "event" e
            WHERE NOT EXISTS ( SELECT ev.id FROM "event" ev INNER JOIN registration r ON e.id = r.eventId WHERE r.username = $1 );`;
            pool.query(
                query,
                [username],
                (error, response) => {
                    if (error) return reject(error);

                    const output = [];
                    var i = 0;

                    for (i = 0; i < response.rows.length; i++) {
                        output.push(new Event({
                            ...response.rows[i],
                            eventId: response.rows[i].id,
                            message: response.rows[i].msg
                        }));
                    }

                    resolve(output);
                }
            );
        });
    }

    static byId(id) {
        return new Promise((resolve, reject) => {
            new Promise((resolve, reject) => {
                pool.query(
                    `SELECT id, plannedFor, title, venue, street, streetNo, zipcode, city, deadline, msg
                FROM "event"
                WHERE id = $1;`,
                    [id],
                    (error, response) => {
                        if (error) return reject(error);

                        if (response.rows.length === 0) return reject(new Error(`no event with id ${id}`));

                        console.log('event_db', response.rows[0])

                        resolve(new Event({
                            ...response.rows[0],
                            eventId: response.rows[0].id,
                            message: response.rows[0].msg
                        }));

                    }
                );
            })
                .then((event) => {
                    return new Promise((resolve, reject) => {
                        pool.query(
                            `SELECT username FROM registration WHERE eventId = $1;`,
                            [event.eventId],
                            (error, response) => {
                                if (error) return reject(error);
                                resolve(new Event({ ...event, attendees: response.rows }));
                            }
                        );

                    }).then((output) => {
                        resolve(output);
                    })
                        .catch(error => reject(error));
                })
                .catch(error => reject(error));
        });
    }
}

module.exports = EventTable;