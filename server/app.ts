import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import {getFun, getidFun, insertIntoObject, updateObject, deletObject} from './src/controller/UserController';

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
// app.use((_, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     next();
// });

app.use('/api/get', getFun);
app.use('/api/getid', getidFun);
app.use('/api/insert', insertIntoObject);
app.use('/api/update', updateObject);
app.use('/api/delete', deletObject);

import https from 'https';
import fs from 'fs';
import path from 'path';

const options = {
  key: fs.readFileSync(path.join('key.pem')),
  cert: fs.readFileSync(path.join('cert.pem'))
};
https.createServer(options, app).listen(3001, function (){
  console.log('SEVING)');
})

// const PORT  = 3001
// app.listen(PORT,()=> console.info(`Server has started on ${PORT}`))