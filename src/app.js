const express = require('express')
const app = express()
const cors = require('cors');

//settings
app.set('port', process.env.PORT || 4000);

//middleweres
app.use(cors());
app.use(express.json());

//routes
app.get('/users', (req, res) => res.send('Users Routes'))



module.exports = app;

