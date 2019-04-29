CREATE TABLE registration (
    username VARCHAR(64) NOT NULL,
    eventId INTEGER NOT NULL,
    regDate DATE NOT NULL,
    FOREIGN KEY (eventId) REFERENCES "event"(id),
    PRIMARY KEY (username, eventId)
);