const Animal = require('./Animal');

class Cachorro extends Animal {
  constructor(nome, idade, raca) {
    super(nome, idade);
    this.raca = raca;
  }

  emitirSom() {
    return `${this.nome} diz: Au au!`;
  }

  buscarBola() {
    return `${this.nome} foi buscar a bola!`;
  }
}

module.exports = Cachorro;
