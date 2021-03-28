const mongoose = require('mongoose');

const DB = process.env.MONGODB_URI || 'mongodb://localhost:27017/db';

mongoose.connect(DB,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
    
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('db is connected');
});