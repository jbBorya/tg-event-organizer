const DEFAULT_PROPERTIES = {
    plannedfor: new Date(),
    title: "Pizza meeting",
    venue: "Pizzeria Awesome",
    street: "Awesome Street",
    streetNo: '7',
    zipcode: "1010",
    city: "Vienna",
    deadline: () => {
        var yesterday = new Date();
        yesterday.setDate(yesterday.getDate() + 1);
        return yesterday;
    },
    message: "Daily meeting of pizza enthusiasts",
    attendees: []
}

class Event {
    constructor({eventId, title, plannedfor, venue, street, streetNo, zipcode, city, deadline, message, attendees } = {}) {
        this.eventId = eventId;
        this.plannedfor = plannedfor || DEFAULT_PROPERTIES.plannedfor;
        this.title = title || DEFAULT_PROPERTIES.title;
        this.venue = venue || DEFAULT_PROPERTIES.venue;
        this.street = street || DEFAULT_PROPERTIES.street;
        this.streetNo = streetNo || DEFAULT_PROPERTIES.streetNo;
        this.zipcode = zipcode || DEFAULT_PROPERTIES.zipcode;
        this.city = city || DEFAULT_PROPERTIES.city;
        this.deadline = deadline || DEFAULT_PROPERTIES.deadline
        this.message = message || DEFAULT_PROPERTIES.message;
        this.attendees = attendees || DEFAULT_PROPERTIES.attendees;
    }

    toString() {
        return this.title + " // " + this.plannedfor.getDate() + ". " + (this.plannedfor.getMonth() + 1) + ". " + this.plannedfor.getFullYear();
    }
}

module.exports = Event;