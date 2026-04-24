const Cachorro = require('./Cachorro');
const Gato = require('./Gato');
const Passaro = require('./Passaro');
const Animal = require('./Animal');

const cachorro1 = new Cachorro('Rex', 3, 'Labrador');
const gato1 = new Gato('Mimi', 5, 'Laranja');
const passaro1 = new Passaro('Piu', 2, 30);

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

console.log('\n=== Teste de abstração ===');
try {
  const animal = new Animal('Genérico', 1);
} catch (erro) {
  console.log('Erro esperado:', erro.message);
}
