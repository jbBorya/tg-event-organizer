CREATE TABLE "event" (
    id SERIAL PRIMARY KEY,
    plannedFor DATE NOT NULL,
    title VARCHAR(255) NOT NULL,
    venue VARCHAR(255) NOT NULL,
    street VARCHAR(255) NOT NULL,
    streetNo INTEGER NOT NULL,
    zipcode VARCHAR(64) NOT NULL,
    city VARCHAR(64) NOT NULL,
    deadline DATE,
    msg TEXT
);