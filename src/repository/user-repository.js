const users = [
  {
    "type": "STARTUP", // STARTUP | PARCEIRO | VISITANTE
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
];

export function fetchAllUsers() {
  return users;
}
