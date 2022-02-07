// const mongoose = require('mongoose');
// mongoose.connect(process.env.MONGO_URI, { 
//      useNewUrlParser: true,
//      useUnifiedTopology: true,
//      useFindAndModify: false,
//      useCreateIndex: true
// }).then(() => {
//      console.log('Connection successful!');
// }).catch((e) => {
//      console.log('Connection failed!');
// })
//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/my_database';
mongoose.connect(mongoDB, {
    useNewUrlParser: true, useUnifiedTopology: true
});

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));