
const express = require('express')
const app = express()
const port = 3000;

app.use(express.json());

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

// respond with "hello world" when a GET request is made to the homepage
app.get('/user', (req, res) => {
  res.status(201).json(users);
})

app.post('/user', (req, res) => {
  const { body } = req;
  console.log(body);
  // saveUser(body);
  // const userToken = generateUserToken();
  const userToken = "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTcyMTI2MDAyNiwiaWF0IjoxNzIxMjYwMDI2fQ.Ph86JVKU9CFJikTCOKS0sBp_CV899pscpuzCbbL7PpU";
  res.status(201).json({
    data: userToken
  });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
