const { Client } = require('pg');
const client = new Client({
  user: 'orane',
  host: 'localhost',
  database: 'rest_api_db',
  password: 'andela',
  port: 5432,
});
// client.connect(function (err) {
//   if (err) throw err;
//   console.log('Connected!');
// });

module.exports = client;
