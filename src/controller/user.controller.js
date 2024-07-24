// controlador da suas requisições

// recebe a request
// processa
// devolve a response com status code
const userService = require('../service/user.service');

function getAll(req, res) {
    const users = userService.getAll();
    return res.status(201).json(users);
};

module.exports = {getAll}
