// Debug
const Event = require('../event');
const EventTable = require('../event/table');

Promise.all([
EventTable.persist(new Event({
    plannedfor: new Date(),
    title: "Stammtisch Niederösterreich",
    venue: "Gasthaus zum Goldenen Hirschen",
    street: "Fantasiestraße",
    streetNo: 1,
    city: "St. Pölten",
    zipcode: "3100",
    deadline: new Date(),
    message: `Der Stammtisch NÖ freut sich über jeden Teilnehmer.
    Das Essen ist hervorragend, die Atmossphäre bezaubert.`
})),

EventTable.persist(new Event({
    plannedfor: new Date(2019, 0, 2),
    title: "Stammtisch Oberösterreich",
    venue: "Gasthaus zur Post",
    street: "Fantasiestraße",
    streetNo: 2,
    city: "Linz",
    zipcode: "4020",
    deadline: new Date(2018, 12, 1),
    message: `Der Stammtisch OÖ freut sich über jeden Teilnehmer.
    Das Essen ist hervorragend, die Atmossphäre bezaubert.`
})),

EventTable.persist(new Event({
    plannedfor: new Date(2019, 0, 3),
    title: "Stammtisch Wien",
    venue: "Gasthaus zum Blauen Hahn",
    street: "Fantasiestraße",
    streetNo: 3,
    city: "Wien",
    zipcode: "1010",
    deadline: new Date(2018, 12, 1),
    message: `Der Stammtisch Wien freut sich über jeden Teilnehmer.
    Das Essen ist hervorragend, die Atmossphäre bezaubert.`
})),

EventTable.persist(new Event({
    plannedfor: new Date(2019, 0, 4),
    title: "Stammtisch Burgenland",
    venue: "Gasthaus zum Eifrigen Schmied",
    street: "Fantasiestraße",
    streetNo: 4,
    city: "Eisenstadt",
    zipcode: "7000",
    deadline: new Date(2018, 12, 1),
    message: `Der Stammtisch Burgenland freut sich über jeden Teilnehmer.
    Das Essen ist hervorragend, die Atmossphäre bezaubert.`
})),

EventTable.persist(new Event({
    plannedfor: new Date(2019, 0, 5),
    title: "Stammtisch Kärnten",
    venue: "Gasthaus zur Quirligen Magd",
    street: "Fantasiestraße",
    streetNo: 5,
    city: "Klagenfurt",
    zipcode: "9010",
    deadline: new Date(2018, 12, 1),
    message: `Der Stammtisch Kärnten freut sich über jeden Teilnehmer.
    Das Essen ist hervorragend, die Atmossphäre bezaubert.`
})),

EventTable.persist(new Event({
    plannedfor: new Date(2019, 0, 6),
    title: "Stammtisch Tirol",
    venue: "Gasthaus zur Alten Burg",
    street: "Fantasiestraße",
    streetNo: 6,
    city: "Innsbruck",
    zipcode: "6020",
    deadline: new Date(2018, 12, 1),
    message: `Der Stammtisch Tirol freut sich über jeden Teilnehmer.
    Das Essen ist hervorragend, die Atmossphäre bezaubert.`
})),

EventTable.persist(new Event({
    plannedfor: new Date(2019, 0, 7),
    title: "Stammtisch Steiermark",
    venue: "Gasthaus zur Fröhlichen Melodie",
    street: "Fantasiestraße",
    streetNo: 7,
    city: "Graz",
    zipcode: "8010",
    deadline: new Date(2018, 12, 1),
    message: `Der Stammtisch Steiermark freut sich über jeden Teilnehmer.
    Das Essen ist hervorragend, die Atmossphäre bezaubert.`
})),

EventTable.persist(new Event({
    plannedfor: new Date(2019, 0, 8),
    title: "Stammtisch Salzburg",
    venue: "Gasthaus zum Ungelösten Geheimnis",
    street: "Fantasiestraße",
    streetNo: 8,
    city: "Salzburg",
    zipcode: "5020",
    deadline: new Date(2018, 12, 1),
    message: `Der Stammtisch Salzburg freut sich über jeden Teilnehmer.
    Das Essen ist hervorragend, die Atmossphäre bezaubert.`
})),

EventTable.persist(new Event({
    plannedfor: new Date(2019, 0, 9),
    title: "Stammtisch Vorarlberg",
    venue: "Gasthaus zum Ausgelassenen Spiel",
    street: "Fantasiestraße",
    streetNo: 9,
    city: "Bregenz",
    zipcode: "6900",
    deadline: new Date(2018, 12, 1),
    message: `Der Stammtisch Vorarlberg freut sich über jeden Teilnehmer.
    Das Essen ist hervorragend, die Atmossphäre bezaubert.`
}))
]).then(ev => console.log(ev));