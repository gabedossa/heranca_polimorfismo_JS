class Aluno {
  constructor(nome, nota) {
    this.nome = nome;
    this.nota = nota;
  }

  aprovado() {
    return this.nota >= 6;
  }

  toString() {
    const status = this.aprovado() ? 'Aprovado' : 'Reprovado';
    return `${this.nome}: ${this.nota} (${status})`;
  }
}

class Turma {
  constructor() {
    this.alunos = [];
  }

  adicionarAluno(aluno) {
    this.alunos.push(aluno);
  }

  filtrarAprovados() {
    return this.alunos.filter((aluno) => aluno.aprovado());
  }

  exibirTodos() {
    console.log('=== Todos os alunos ===');
    this.alunos.forEach((aluno) => console.log(aluno.toString()));
  }

  exibirAprovados() {
    console.log('\n=== Aprovados (nota >= 6) ===');
    this.filtrarAprovados().forEach((aluno) => console.log(aluno.toString()));
  }
}

const turma = new Turma();

turma.adicionarAluno(new Aluno('Ana', 8.5));
turma.adicionarAluno(new Aluno('Bruno', 5.0));
turma.adicionarAluno(new Aluno('Carlos', 7.2));
turma.adicionarAluno(new Aluno('Diana', 4.8));
turma.adicionarAluno(new Aluno('Eduardo', 6.0));
turma.adicionarAluno(new Aluno('Fernanda', 9.1));
turma.adicionarAluno(new Aluno('Gabriel', 3.5));

turma.exibirTodos();
turma.exibirAprovados();
