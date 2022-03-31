import mysql from 'mysql';

const con = mysql.createConnection({
  host: 'localhost',
  port: 3306,
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

export default con;