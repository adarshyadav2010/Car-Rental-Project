const mongoose = require("mongoose");
const bodyparser = require('body-parser');
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");

const adminRouter = require('./routes/adminRoutes')

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}))


app.use('/admin', adminRouter)

module.exports = app;