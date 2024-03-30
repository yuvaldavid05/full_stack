const express = require("express");
const cors = require('cors');
require("./db/mongoConnect");


const { routeInit } = require("./routers/confing_route")
const app = express();

app.use(express.json());

app.use(cors({
    origin: true,
    credentials: true,
    methods: 'GET,PUT,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept',
}));

routeInit(app);
app.listen(1111);