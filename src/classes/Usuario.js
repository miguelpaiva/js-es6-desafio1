class Usuario {
  constructor(email, senha) {
    this.email = email;
    this.senha = senha;
  }
  isAdmin() {
    return this.admin === true;
  }
}
module.exports = Usuario;
