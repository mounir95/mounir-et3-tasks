const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const con = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: '',
  database: 'dbdata',
});

con.connect(function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log('connected');
  }
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
// app.use((_, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     next();
// });

app.get('/api/get', (req, res) => {
  console.log('get all data');
  const sqlSelect = 'SELECT * FROM Pr ORDER BY id ASC';
  con.query(sqlSelect, (err, result) => {
      res.send(result);
    },
  )
});

app.post('/api/insert', (req, res) => {
  console.log(' insert query ');
  const date = req.body.date;
  const se = req.body.selist;
  const id = req.body.id;
  const platform = req.body.platform;
  const release = req.body.releaseVerion;
  const comm = req.body.comment;
  const pr = req.body.prlink;
  const size = req.body.size;
  const diff = req.body.difficulity;
  const stat = req.body.statuslist;
  const revby = req.body.reveiwedbyby;
  const revah = req.body.reveiwedbyah;
  const revht = req.body.reveiwedbyht;
  const sqlInsert =
    'INSERT INTO Pr (date, selist, id,platform, releaseVerion, comment, prlink, size, difficulity, statuslist, reveiwedbyby, reveiwedbyah, reveiwedbyht) values (?,?,?,?,?,?,?,?,?,?,?,?,?)';
  con.query(
    sqlInsert,
    [date, se, id, platform, release, comm, pr,size, diff, stat, revby, revah, revht],
    function (err, result) {
      if (err) throw err;
      res.send(' successfully');

    });
  });

  app.post('/api/update', (req, res) => {
  console.log(' update query ');
  const se = req.body.selist;
  const id = req.body.id;
  const platform = req.body.platform;
  const release = req.body.releaseVerion;
  const comm = req.body.comment;
  const pr = req.body.prlink;
  const size = req.body.size;
  const diff = req.body.difficulity;
  const stat = req.body.statuslist;
  const revby = req.body.reveiwedbyby;
  const revah = req.body.reveiwedbyah;
  const revht = req.body.reveiwedbyht;
  const sqlInsert =
    'UPDATE Pr SET selist=?, platform=?, releaseVerion=?, comment=?, prlink=?, size=?, difficulity=?, statuslist=?, reveiwedbyby=?, reveiwedbyah=?, reveiwedbyht=? WHERE id=?';
  con.query(
    sqlInsert,
    [se, platform, release, comm, pr,size, diff, stat, revby, revah, revht, id],
    function (err, result) {
      console.log(result);
      if (err) throw err;
      res.send(' successfully');

    });
  });

  app.post('/api/delete', (req, res) => {
  console.log(' delete query ');
  const id = req.body.id;
  const sqlInsert =
    'DELETE from Pr where id = ?';
  con.query(
    sqlInsert,
    [id],
    function (err, result) {
      if (err) throw err;
      res.send(' successfully');
    });
  });

const https = require('https');
const fs = require('fs');
const path = require('path');

const options = {
  key: fs.readFileSync(path.join('key.pem')),
  cert: fs.readFileSync(path.join('cert.pem'))
};
https.createServer(options, app).listen(3001, function (){
  console.log('SEVING)');
})

// app.listen(3001, () => {
//   console.log('running on port 3001');
// });