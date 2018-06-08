const mongoose = require('mongoose')
mongoose.Promise = global.Promise

let mongo = {
  host: 'mongo',
  port: 27018,
  database: 'test_database',
  user: 'test1',
  pwd: 'test123'
}

mongoose.connect(`mongodb://${mongo.user}:${mongo.pwd}@${mongo.host}:${mongo.port}/${mongo.database}`, {useMongoClient: true}, (err) => {
  if (err) {
    console.error('connect to %s error: ', err.message);
    process.exit(1);
    return next(460)
  }
})