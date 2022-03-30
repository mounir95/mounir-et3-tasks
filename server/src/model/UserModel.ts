import con from '../conn';
import {TBodyObject} from '../constants/interfaces';

// All the database models should go into the models folder. 
// Again you should write each model into its own file. e.g. User model in UserModel.js.

export const insertIntoFun = async (body: TBodyObject) => {
  console.log(' insert query ', body);
  const date = body.date;
  const se = body.selist;
  const id = body.id;
  const platform = body.platform;
  const release = body.releaseVerion;
  const comm = body.comment;
  const pr = body.prlink;
  const size = body.size;
  const diff = body.difficulity;
  const stat = body.statuslist;
  const revby = body.reveiwedbyby;
  const revah = body.reveiwedbyah;
  const revht = body.reveiwedbyht;
  const sqlInsert =
    'INSERT INTO Pr (date, selist, id,platform, releaseVerion, comment, prlink, size, difficulity, statuslist, reveiwedbyby, reveiwedbyah, reveiwedbyht) values (?,?,?,?,?,?,?,?,?,?,?,?,?)';
  return await con.query(
    sqlInsert,
    [date, se, id, platform, release, comm, pr,size, diff, stat, revby, revah, revht],
    function (err, result) {
      if (err) return 'err';
      else return result;
    });
  };

export const UpdateIntoFun = async (body: TBodyObject) => {
  console.log(' update query ');
  const se = body.selist;
  const id = body.id;
  const platform = body.platform;
  const release = body.releaseVerion;
  const comm = body.comment;
  const pr = body.prlink;
  const size = body.size;
  const diff = body.difficulity;
  const stat = body.statuslist;
  const revby = body.reveiwedbyby;
  const revah = body.reveiwedbyah;
  const revht = body.reveiwedbyht;
  const sqlInsert =
    'UPDATE Pr SET selist=?, platform=?, releaseVerion=?, comment=?, prlink=?, size=?, difficulity=?, statuslist=?, reveiwedbyby=?, reveiwedbyah=?, reveiwedbyht=? WHERE id=?';
  return await con.query(
    sqlInsert,
    [se, platform, release, comm, pr,size, diff, stat, revby, revah, revht, id],
    function (err, result) {
      if (err) return 'err';
      else return result;
    });
  };

export const  deletIntoFun = async (body: TBodyObject) => {
  console.log(' delete query ');
  const id = body.id;
  const sqlInsert =
    'DELETE from Pr where id = ?';
  return await con.query(
    sqlInsert,
    [id],
    function (err, result) {
      if (err) return 'err';
      else return result;
    });
  };

export const  getObjectsFun = async (callback: Function) => {
  console.log('get all data');
  const sqlSelect = 'SELECT * FROM Pr ORDER BY id ASC';
  return await con.query(sqlSelect, function (err, result) {
      if (err) { 
        callback(err, null);}
      else {
        callback(null, result);
      }
    });
};

export const  getMaxIdFun = async (callback: Function) => {
  console.log('get max id');
  const sqlSelect = 'SELECT MAX(id) AS id FROM Pr';
  return await con.query(sqlSelect, function (err, result) {
      if (err) { 
        callback(err, null);}
      else {
        callback(null, result);
      }
    });
};