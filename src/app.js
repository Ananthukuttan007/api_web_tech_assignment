const express = require('express');
const app = express();


// Import routes
const customerRoute = require('./routes/customer');
const inventoryRoute = require('./routes/inventory');
const orderRoute = require('./routes/order');


//Router MIddlewares
app.use(express.json());
app.use('/', customerRoute);
app.use('/', inventoryRoute);
app.use('/', orderRoute);

module.exports = app;
