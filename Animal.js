class Animal {
  constructor(nome, idade) {
    if (new.target === Animal) {
      throw new Error('Animal é uma classe abstrata e não pode ser instanciada diretamente.');
    }
    this.nome = nome;
    this.idade = idade;
  }

  emitirSom() {
    throw new Error(`${this.constructor.name} deve implementar o método emitirSom().`);
  }

  apresentar() {
    return `Olá, meu nome é ${this.nome}, tenho ${this.idade} ano(s) e sou um(a) ${this.constructor.name}.`;
  }
}

module.exports = Animal;
