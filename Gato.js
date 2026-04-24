const Animal = require('./Animal');

class Gato extends Animal {
  constructor(nome, idade, cor) {
    super(nome, idade);
    this.cor = cor;
  }

  emitirSom() {
    return `${this.nome} diz: Miau!`;
  }

  arranhar() {
    return `${this.nome} arranhou o sofá!`;
  }
}

module.exports = Gato;
