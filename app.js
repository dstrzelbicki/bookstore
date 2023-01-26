const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/bookRoutes');
const dbConnection = require('./utils/dbConnection');


//Initialize express framework
const app = express();

//Establish DB connection
dbConnection.establishConnection();

//Listen for request
app.listen(process.env.PORT);

//Middleware & static
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.json());

//Book routes
app.use(bodyParser.json());
app.use(bookRoutes);

