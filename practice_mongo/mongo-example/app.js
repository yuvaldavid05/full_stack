const express = require('express');
const cors = require('cors');
require("./db/mongoConnect");

// const http = require("http");
// const path = require("path");



// const schema = new mongoose.Schema({

//     firstName: {

//         type: String,

//         maxLength: 256,

//         trim: true,

//         lowercase: true,

//     },

//     lastName: {

//         type: String,

//         maxLength: 256,

//         trim: true,

//         lowercase: true,

//     },

//     phone: {

//         type: String,

//         required: true,

//         match: RegExp(/0[0-9]{1,2}\-?\s?[0-9]{3}\s?[0-9]{4}/),

//     },

//     email: {

//         type: String,

//         required: true,

//         match: RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/),

//         lowercase: true,

//         trim: true,

//         unique: true,

//     },

// });



// const User = mongoose.model("user", schema);

const { routeInit } = require("./routers/config_route")

const app = express();

// שהוא יכול לקבל מידע מסוג גייסון בבאדי בבקשות שהם לא גט
app.use(express.json());



app.use(cors({
    origin: true,
    credentials: true,
    methods: 'GET,PUT,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept',
}));


routeInit(app);

// // הגדרת שרת עם יכולות אפ שמייצג את האקספרס
// const server = http.createServer(app);
// // משתנה שיגדיר על איזה פורט אנחנו נעבוד
// // ויאסוף את הפורט משם אם לא ואנחנו לוקאלית יעבוד על 3333
// let port = process.env.PORT || 3333;
// // הפעלת השרת והאזנה לפורט המבוקש
// server.listen(port);


app.listen(3333);


