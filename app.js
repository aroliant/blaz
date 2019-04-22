import express from 'express';
import chalk from 'chalk';
import { Logger } from './server/utils';

import routes from './server/routes';


const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const helmet = require('helmet');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 3000;

// secure apps by setting various HTTP headers
app.use(helmet());

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

app.options('*', (req, res) => {
  return res.send('');
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(fileUpload());


app.get('/', (req, res) => {
  res.send('...');
});


app.use('/api/v1/', routes);


app.listen(PORT, () => {

  Logger.log('The API Server is Listening on Port : ', chalk.bold.green(PORT));

});


process.on('uncaughtException', (err) => {
  Logger.log(err);
  process.exit(1);
});