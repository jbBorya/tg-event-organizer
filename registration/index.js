class Registration {
    constructor({username, eventId, regDate} = {}) {
        this.username = username;
        this.eventId = eventId;
        this.regDate = regDate;
    }
}

module.exports = Registration;