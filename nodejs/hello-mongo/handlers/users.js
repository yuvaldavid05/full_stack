const mongoose = require('mongoose');
const authGuard = require('../auth-guard');

module.exports = (app) => {
    const schema = new mongoose.Schema({
        firstName: String,
        lastName: String,
        phone: String,
        email: String,
    });

    const User = mongoose.model("users", schema);

    app.get('/users', authGuard, async (req, res) => {
        res.send(await User.find());
    });

    app.get('/users/:id', authGuard, async (req, res) => {
        res.send(await User.findOne({ _id: req.params.id }));
    });

    app.post('/users', authGuard, async (req, res) => {
        const { firstName, lastName, email, phone } = req.body;

        const user = new User({ firstName, lastName, email, phone });
        const newUser = await user.save();
        res.send(newUser);
    });

    app.put('/users/:id', authGuard, async (req, res) => {
        const { firstName, lastName, email, phone } = req.body;
        const user = await User.findOne({ _id: req.params.id });

        if (!user) {
            return res.status(403).send("משתמש לא קיים!");
        }

        user.firstName = firstName;
        user.lastName = lastName;
        user.email = email;
        user.phone = phone;

        await user.save();

        res.send(user);
    });

    app.delete('/users/:id', authGuard, async (req, res) => {
        await User.deleteOne({ _id: req.params.id });
        res.send();
    });
}