const client = require('./connection.js');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.listen(3300, () => {
  console.log('Server Connected on port 3300');
});
client.connect();

// retrive all data from db
app.get('/users', (req, res) => {
  client.query('Select * from users', (err, result) => {
    if (!err) {
      res.send(result.rows);
    }
  });
  client.end;
});

// get by id
app.get('/users/:id', (req, res) => {
  client.query(
    `Select * from users where id =${req.params.id}`,
    (err, result) => {
      if (!err) {
        res.send(result.rows);
      }
    }
  );
  client.end;
});

//post

app.post('/users', (req, res) => {
  const user = req.body;
  let insertQuery = `insert into users (id, firstname, lastname, location) values ('${user.id}', '${user.firstname}', '${user.lastname}', '${user.location} ')`;

  client.query(insertQuery, (err, result) => {
    if (!err) {
      res.send('Insert was successful.');
    } else {
      console.log(err.message);
    }
  });
  client.end;
});

//put

app.post('/users/:id', (req, res) => {
  const user = req.body;
  let insertQuery = `insert into users (id, firstname, lastname, location) values ('${user.id}', '${user.firstname}', '${user.lastname}', '${user.location} ')`;

  client.query(insertQuery, (err, result) => {
    if (!err) {
      res.send('Insert was successful.');
    } else {
      console.log(err.message);
    }
  });
  client.end;
});

//update
app.put('/users/:id', (req, res) => {
  let user = req.body;
  let updateQuery = `update users
                     set firstname = '${user.firstname}',
                     lastname = '${user.lastname}',
                     location = '${user.location}'
                     where id = ${user.id}`;

  client.query(updateQuery, (err, result) => {
    if (!err) {
      res.send('Update was successful');
    } else {
      console.log(err.message);
    }
  });
  client.end;
});

//delete
app.delete('/users/:id', (req, res) => {
  let insertQuery = `delete from users where id=${req.params.id}`;

  client.query(insertQuery, (err, result) => {
    if (!err) {
      res.send('Deletion was successful');
    } else {
      console.log(err.message);
    }
  });
  client.end;
});
