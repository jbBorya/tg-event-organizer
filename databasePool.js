const { Pool } = require('pg');
const dbConfiguration = require('./secrets/dbConfiguration');

const pool = new Pool(dbConfiguration);

module.exports = pool;

// debug

/*
pool.query("SELECT * FROM guest;", (error, response) => {
    if(error) return console.log('error', error);

    console.log('response.rows', response.rows);
});
*/