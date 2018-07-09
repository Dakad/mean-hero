// config should be imported before importing any other file
const mongoose = require('mongoose');
import config from './config/config';
import app from './config/express';
//const debug = require('debug')('express-mongoose-es6-rest-api:index');

// make bluebird default Promise
const Bluebird = require('bluebird'); // eslint-disable-line no-global-assign

// plugin bluebird promise in mongoose
mongoose.Promise = Bluebird;

/**
 * Async function to init MongoDB and Express
 */
export async function start() {
  // connect to mongo db
  const mongoUri = config.mongo.host;
  let msg = '';
  try {
    await mongoose.connect(
      mongoUri,
      { keepAlive: 1 }
    );
    msg = `[MONGODB] Connected to ${mongoUri}\n`;
  } catch (error) {
    throw new Error(`[MONGODB] Unable to connect to database : ${mongoUri}`);
  }

  // listen on port config.port
  try {
    await Bluebird.promisify(app.listen);
    return (
      msg + `[SERVER] Server started on port ${config.port} (${config.env})`
    );
  } catch (err) {
    if (err.code === 'EADDRINUSE') {
      throw new Error(
        `[SERVER] Address ${config.port} already in use (${config.env})`
      );
    } else {
      throw err;
    }
  }
}
