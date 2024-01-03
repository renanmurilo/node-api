'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require("cors");
const config = require('./config')

const app = express();
const router = express.Router();

// Conecta ao banco
mongoose.connect(config.connectionString);

// Carrega os Models
const Product = require('./models/product');
const Customer = require('./models/customer');
const Order = require('./models/order');

// carregar as rotas
const indexRouter = require('./routes/index-route');
const productRouter = require('./routes/products-route');
const customerRouter = require('./routes/customer-route');
const orderRouter = require('./routes/order-route');

app.use(bodyParser.json({
  limit: '5mb'
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//Habilita o CORS
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Accesse-Control-Allow-Headers', 'Origin, X-Requested-with, Accept, x-access-token');
  res.header('Accesse-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
})


app.use('/', indexRouter);
app.use('/products', productRouter);
app.use('/customers', customerRouter);
app.use('/orders', orderRouter);

module.exports = app;
