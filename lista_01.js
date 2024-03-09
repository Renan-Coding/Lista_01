// OBS: Todo o código está comentado, pois caso contrário ele não executaria :)

// Questão 01 = Letra A
// let numero = 1;

// while(numero <= 10) {
//     if( numero % 2 == 0) {
//         console.log(numero);
//     }
//     numero++;
// }

// // Questão 02 = Letra A
// class Veiculo {
//     constructor(marca) {
//         this.marca = marca;
//     }
// }

// class Carro extends Veiculo {
//     ligar() {
//         console.log("Carro ligado!");
//     }
// }

// let carro = new Carro("Toyota");
// carro.ligar();

// // Questão 03 = Letra A
// let resultado = 0;
// for (let i = 10; i >= 0; i -= 2) {
//     if (i === 4) {
//         continue;
//     }
//     if (i === 6) {
//         break;
//     }

//     resultado += i;
// }
// console.log(resultado);

// Questão 04 = Letra A
// class Carro {
//     constructor() {
//         this.velocidadeAtual = 0;
//     }

//     acelerar(velocidade) {
//         this.velocidadeAtual += velocidade;
//     }
// }

// Questão 05 = Letra A
// class Carro {
//     constructor(marca) {
//         this.marca = marca;
//     }

//     ligar() {
//         console.log("Carro ligado!");
//     }
// }

// const carro = new Carro("Toyota");
// console.log(carro.marca);

// Questão 06 = Letra A
// class Person {
//     constructor(name) {
//         this.name = name;
//     }

//     greet() {
//         return `Olá, meu nome é ${this.name}.`;
//     }
// }

// const person1 = new Person("João");
// const person2 = new Person("Maria");

// console.log(person1.greet() + " " + person2.greet());

// Questão 07
// Criando a classe Animal e definindo seus atributos e métodos
// class Animal {
//   constructor(nome, idade) {
//     this.nome = nome;
//     this.idade = idade;
//   }

//  Criação do método descrever
//   descrever(nome, idade) {
//     console.log(`Este é um ${this.nome} e tem ${this.idade} anos.`);
//   }
// }

//  Criando os animais
// const cachorro = new Animal("cachorrinho", 2);
// const gato = new Animal("gatinho", 5);

//  Chamando o método descrever para cada animal
// cachorro.descrever(); // Saída: Este é um cachorrinho e tem 2 anos.
// gato.descrever(); // Saída: Este é um gatinho e tem 5 anos.

// Questão 08
// Criando a classe Animal e definindo seus atributos e métodos.
// class Animal {
//   constructor(nome, idade) {
//     this.nome = nome;
//     this.idade = idade;
//   }

//   // Criação do método descrever
//   descrever() {
//     console.log(
//       `Este é um ${this.nome}, tem ${this.idade} anos e é ${this.cor}.`
//     );
//   }
// }

// // Criando a classe Gato e herdando alguns atibutos da classe Animal
// class Gato extends Animal {
//   constructor(nome, idade, cor) {
//     super(nome, idade);
//     this.cor = cor;
//   }

//   // Criação do método miar
//   miar() {
//     console.log("Miau!!");
//   }
// }

// // Criando as variáveis cachorro e gato.
// const cachorro = new Animal("cachorro", 4);
// const gato = new Gato("gato", 3, "cinza");

// // Chamando o método descrever dos animais
// cachorro.descrever(); // Saída: Este é um cachorro, tem 4 anos e é undefined.
// gato.descrever(); // Saída: Este é um gato, tem 3 anos e é cinza.
// // Chamando o método miar para o gato
// gato.miar(); // Saída: Miau!!

// Questão 09
// Criando a classe SomadorNotas e definindo seus atributos e métodos.
// class SomadorNotas {
//   constructor() {
//     this.total = 0;
//   }

//   adicionarNota(nota) {
//     this.total += nota;
//   }

//   verTotal() {
//     console.log(`O total das notas dão: ${this.total}.`);
//   }
// }

// // Criando um objeto da classe SomadorNotas
// const somador = new SomadorNotas();

// // Adicionando algumas notas
// somador.adicionarNota(7.5);
// somador.adicionarNota(8.5);
// somador.adicionarNota(10);

// somador.verTotal(); // Saída: O total das notas é: 26.

// Questão 10
// Criação da classe Funcionário
// class Funcionario {
//   // No construtor da classe, atribui-se nome, idade e salário base
//   constructor(nome, idade, salarioBase) {
//     this.nome = nome;
//     this.idade = idade;
//     this.salarioBase = salarioBase;
//   }
//   // Criação do método para calcular o salário total do funcionário
//   calcularSalario() {
//     // Este método será atibuido nas classes herdeiras
//     // Cada tipo de funcionário terá seu próprio cálculo
//   }
// }

// // Criação da classe Professor, que herda de Funcionário
// class Professor extends Funcionario {
//   // Construtor da classe Professor, recebe também disciplina e horasAula como parâmetros
//   constructor(nome, idade, salarioBase, disciplina, horasAula) {
//     super(nome, idade, salarioBase); // Chama ao construtor a classe pai
//     this.disciplina = disciplina;
//     this.horasAula = horasAula;
//   }
//   // Utilização do método calcularSalario, específico para professores
//   calcularSalario() {
//     const valorHoraAula = 70;
//     const salarioProfessor = this.horasAula * valorHoraAula; // O salário do professor é calculado multiplicando suas horas de aula pelo valor
//     // Adiciona o salário base ao salário calculado
//     const salarioTotal = this.salarioBase + salarioProfessor;
//     // Exibe o resultado no console
//     console.log(
//       `O professor ${this.nome}, com seus ${this.idade} anos, que realiza ${this.horasAula} horas de aula por semana da disciplina de ${this.disciplina} possui um salário de: R$ ${salarioTotal.toFixed(2)}.`
//     );
//   }
// }
// // Criando dois objetos do tipo Professor com informações fictícias
// const professorEM = new Professor("José Sergio", 43, 7000, "física", 40);
// const professorFAC = new Professor("Hugo Campos", 54, 5500, "biologia", 25);

// // Chama o método calcularSalario() para cada professor e mostrando o salário total
// professorEM.calcularSalario(); // Saída: O professor José Sergio, com seus 43 anos, que realiza 40 horas de aula por semana da disciplina de física possui um salário de: R$ 9800.00.

// professorFAC.calcularSalario(); // Saída: O professor Hugo Campos, com seus 54 anos, que realiza 25 horas de aula por semana da disciplina de biologia possui um salário de: R$ 7250.00.