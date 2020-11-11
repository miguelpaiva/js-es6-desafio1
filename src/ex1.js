const Usuario = require("./classes/Usuario");
const Admin = require("./classes/Admin");

const User1 = new Usuario("user@teste.com", "senha123");
const Adm1 = new Admin("admin@teste.com", "senha123");

console.log(User1.isAdmin());
console.log(Adm1.isAdmin());

console.log(User1.email);
console.log(Adm1.email);
