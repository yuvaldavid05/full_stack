const express = require('express');

const app = express();

app.use(express.json());

app.listen(7777);

app.get(('/'), (req, res) => {
    res.send({
        message: "welcome",
    });
});

app.get(('/user'), (req, res) => {
    res.send({
        firstName: 'yuval',
        lastName: 'david',
    });
});

app.get(('/numbers/:num'), (req, res) => {

    res.send({
        numbers: new Array(+req.params.num).fill().map((x, i) => i),
    })

})

app.get(('/numbers/:min/:max'), (req, res) => {
    const min = +req.params.min;
    const max = +req.params.max;

    res.send({
        numbers: new Array(max - min + 1).fill().map((x, i) => i + min),
    })

})

