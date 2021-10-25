const express = require('express');
const calendar = require('./routes/calendar.js');
const home = require('./routes/home.js');
const services = require('./routes/services.js');
const contact = require('./routes/contact.js');
const router = express.Router();
const path = require('path')
const app = express();
const port = 3000;

// app.use(express.static('/../client'))
app.use(express.static(__dirname + '/../client'));


app.use('/', home);
app.use('/home', home);
app.use('/calendar', calendar);
app.use('/services', services);
app.use('/contact', contact);

app.listen(port, () => {
  console.log(`server is listening at http://localhost:${port}`)
});