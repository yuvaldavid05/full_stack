const { getUsers, getUser } = require('./handlers/users');
const { getClients, getClient } = require('./handlers/clients');

module.exports = (app) => {

    app.get('/', (req, res) => {
        res.send({
            message: "ברוכים הבאים",
        });
    });


    app.get('/users', users.getUsers);
    app.get('/users/:id', users.getUser);
    app.get('/clients', clients.getClients);
    app.get('/clients/:id', clients.getClient);
}
