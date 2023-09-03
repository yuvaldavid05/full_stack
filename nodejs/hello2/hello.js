const express = require('express');

const app = express();

app.listen(6969, () => {
    console.log("the app is listening...");
})

app.get('/', (req, res) => {
    res.send("hello world2")
})

app.get('/hello', (req, res) => {
    res.send("יופי טופי")
})