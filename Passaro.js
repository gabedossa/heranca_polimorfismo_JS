const Animal = require('./Animal');

class Passaro extends Animal {
  constructor(nome, idade, envergadura) {
    super(nome, idade);
    this.envergadura = envergadura;
  }

  emitirSom() {
    return `${this.nome} diz: Piu piu!`;
  }

  voar() {
    return `${this.nome} está voando com ${this.envergadura}cm de envergadura!`;
  }
}

module.exports = Passaro;
