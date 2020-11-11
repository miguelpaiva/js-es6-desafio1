const Usuario = require("./Usuario");

class Admin extends Usuario {
  constructor(...params) {
    super(...params);
    this.admin = true;
  }
}

module.exports = Admin;
