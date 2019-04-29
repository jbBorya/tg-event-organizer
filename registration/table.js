const pool = require('../databasePool');
const Registration = require('./index');

class RegistrationTable {
    static persist(registration) {
        const { username, eventId, regDate } = registration;
        return new Promise((resolve, reject) => {
            pool.query(
                `INSERT INTO registration(username, eventId, regDate)
                VALUES ($1, $2, $3);`,
                [username, eventId, regDate],
                (error, response) => {
                    if (error) return reject(error);
                    resolve();
                });
        });
    }

    static remove({ username, eventId }) {
        return new Promise((resolve, reject) => {
            pool.query(
                `DELETE FROM registration
                WHERE username = $1 AND eventId = $2;`,
                [username, eventId],
                (error, response) => {
                    if (error) return reject(error);
                    resolve();
                }
            );
        });
    }
}

module.exports = RegistrationTable;