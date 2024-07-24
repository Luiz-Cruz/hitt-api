// persistir os dados da sua api
// da sua camada de dominio da aplição
// devolver dados

const users = [
    {
      "type": "STARTUP", // STARTUP | PARCEIRO | VISITANTE,
      "register_code": "123456", // opcional
      "full_name": "Luizin",
      "email": "luizin@email.com",
      "phone": "(12) ",
      "tax_id": "",
      "birthday": "1996-08-15",
      "genre": "", // MASCULINO | FEMININO | NAO_INFORMAR
      "where_from": "", // SITE | WHATSAPP | AMIGO.....
      "newsletter": false
    }
]

function getAll(){
    return users;
};

module.exports = { getAll};
