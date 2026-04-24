const alunos = [
  { nome: 'Ana', nota: 8.5 },
  { nome: 'Bruno', nota: 5.0 },
  { nome: 'Carlos', nota: 7.2 },
  { nome: 'Diana', nota: 4.8 },
  { nome: 'Eduardo', nota: 6.0 },
  { nome: 'Fernanda', nota: 9.1 },
  { nome: 'Gabriel', nota: 3.5 },
];

const filtrarAprovados = (listaAlunos) =>
  listaAlunos.filter(({ nota }) => nota >= 6);

const aprovados = filtrarAprovados(alunos);

console.log('=== Todos os alunos ===');
alunos.forEach(({ nome, nota }) => console.log(`${nome}: ${nota}`));

console.log('\n=== Aprovados (nota >= 6) ===');
aprovados.forEach(({ nome, nota }) => console.log(`${nome}: ${nota}`));
