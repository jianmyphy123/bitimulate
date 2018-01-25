// load environment variables
require('dotenv').config();
const {
  PORT: port,
  MONGO_URI: mongoURI
} = process.env;

const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const mongoose = require('mongoose');

app.use(bodyParser());

const api = require('api');
const db = require('db');

db.connect();

const router = new Router();
router.use('/api', api.routes());

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(port, () => {
  console.log(`bitimulate server is listening to port ${port}`);
});
