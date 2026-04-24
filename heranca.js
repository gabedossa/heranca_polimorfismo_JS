// Classe abstrata base
class Animal {
  constructor(nome, idade) {
    if (new.target === Animal) {
      throw new Error('Animal é uma classe abstrata e não pode ser instanciada diretamente.');
    }
    this.nome = nome;
    this.idade = idade;
  }

  // Método abstrato — deve ser implementado pelas subclasses
  emitirSom() {
    throw new Error(`${this.constructor.name} deve implementar o método emitirSom().`);
  }

  apresentar() {
    return `Olá, meu nome é ${this.nome}, tenho ${this.idade} ano(s) e sou um(a) ${this.constructor.name}.`;
  }
}

// Subclasse 1: Cachorro
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

// Subclasse 2: Gato
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

// Subclasse 3: Passaro
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

// --- Instâncias ---

const cachorro1 = new Cachorro('Rex', 3, 'Labrador');
const gato1 = new Gato('Mimi', 5, 'Laranja');
const passaro1 = new Passaro('Piu', 2, 30);

// Exibindo resultados
console.log('=== Apresentações ===');
console.log(cachorro1.apresentar());
console.log(gato1.apresentar());
console.log(passaro1.apresentar());

console.log('\n=== Sons ===');
console.log(cachorro1.emitirSom());
console.log(gato1.emitirSom());
console.log(passaro1.emitirSom());

console.log('\n=== Ações exclusivas ===');
console.log(cachorro1.buscarBola());
console.log(gato1.arranhar());
console.log(passaro1.voar());

// Demonstrando que a classe abstrata não pode ser instanciada
console.log('\n=== Teste de abstração ===');
try {
  const animal = new Animal('Genérico', 1);
} catch (erro) {
  console.log('Erro esperado:', erro.message);
}
