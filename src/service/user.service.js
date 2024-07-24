// regras de negocio e validações
const userRepository = require('../repository/user.repository');


function getAll(){
    const users = userRepository.getAll();
    return users;
};

module.exports = { getAll};
