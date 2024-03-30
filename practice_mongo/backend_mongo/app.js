const express = require("express");
const cors = require('cors');
const morgan = require('morgan');
require("./db/mongoConnect");


const { routeInit } = require("./routers/confing_route")
const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.use(cors({
    origin: true,
    credentials: true,
    methods: 'GET,PUT,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept',
}));

routeInit(app);
app.listen(1111);