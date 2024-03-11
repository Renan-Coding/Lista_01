# Questões objetivas

**1)** O que o código a seguir faz?

Resposta: Letra A

A) Imprime os números pares de 1 a 10.

______

**2)** Identificar a linha que falta no código para criar uma classe Veiculo com atributo marca, e uma classe Carro que herda de Veiculo com um método ligar(). 

Resposta: Letra A

A) let carro = new Carro("Toyota"); 

______

**3)** Qual é o valor de resultado após a execução deste código?

Resposta: Letra A

A) 18

______

**4)** Como você criaria um método `acelerar()` em uma classe `Carro`, que recebe um parâmetro `velocidade` e o adiciona a um atributo `velocidadeAtual`?

Resposta: Letra A

______

**5)** Qual a forma correta de definir uma classe Carro em JavaScript, com um método ligar() e um atributo marca?

Resposta: Letra A

______

**6)** Observe o código abaixo:

Qual será a saída do código acima?

Resposta: Letra A

A) "Olá, meu nome é João. Olá, meu nome é Maria."

______

# Questões dissertativas

**7)** Vamos criar um programa em JavaScript para entender classes, métodos e atributos!
Classe Animal:

Resposta:
``` 
// Criando a classe Animal e definindo seus atributos e métodos
 class Animal {
   constructor(nome, idade) {
     this.nome = nome;
     this.idade = idade;
}

//  Criação do método descrever
   descrever(nome, idade) {
     console.log(`Este é um ${this.nome} e tem ${this.idade} anos.`);
   }
}

// Criando os animais
  const cachorro = new Animal("cachorrinho", 2);
  const gato = new Animal("gatinho", 5);
// Chamando o método descrever para cada animal
  cachorro.descrever(); // Saída: Este é um cachorrinho e tem 2 anos.
  gato.descrever(); // Saída: Este é um gatinho e tem 5 anos.
```
______

**8)** Nos últimos dias tivemos a oportunidade de ter contato com Programação Orientada a Objetos, e tivemos contato com o tema "herança". Herança é um princípio de orientação a objetos, que permite que classes compartilhem atributos e métodos. Ela é usada na intenção de reaproveitar código ou comportamento generalizado ou especializar operações ou atributos. Então vamos praticar esse conteúdo nessa questão.
Vamos criar um programa em JavaScript para entender classes, métodos, atributos e herança!

Resposta: 
```
// Criando a classe Animal e definindo seus atributos e métodos.
    class Animal {
      constructor(nome, idade) {
       this.nome = nome;
       this.idade = idade;
}
// Criação do método descrever
     descrever() {
       console.log(
         `Este é um ${this.nome}, tem ${this.idade} anos e é ${this.cor}.`
);
}
}
// Criando a classe Gato e herdando alguns atibutos da classe Animal
    class Gato extends Animal {
      constructor(nome, idade, cor) {
        super(nome, idade);
          this.cor = cor;
}
// Criação do método miar
      miar() {
        console.log("Miau!!");
}
}
// Criando as variáveis cachorro e gato.
 const cachorro = new Animal("cachorro", 4);
 const gato = new Gato("gato", 3, "cinza");
// Chamando o método descrever dos animais
  cachorro.descrever(); // Saída: Este é um cachorro, tem 4 anos e é undefined.
  gato.descrever(); // Saída: Este é um gato, tem 3 anos e é cinza.
// Chamando o método miar para o gato
  gato.miar(); // Saída: Miau!! 
```
______

**9)** Vamos criar um programa em JavaScript para somar notas!

Resposta:
```
// Criando a classe SomadorNotas e definindo seus atributos e métodos.
 class SomadorNotas {
   constructor() {
     this.total = 0;
}

   adicionarNota(nota) {
     this.total += nota;
}

  verTotal() {
    console.log(`O total das notas dão: ${this.total}.`);
  }
}

// Criando um objeto da classe SomadorNotas
const somador = new SomadorNotas();

// Adicionando algumas notas
somador.adicionarNota(7.5);
somador.adicionarNota(8.5);
somador.adicionarNota(10);

somador.verTotal(); // Saída: O total das notas é: 26.
```
______

**10)** Imagine que você está criando um programa em JavaScript para uma escola. Neste programa, existem diferentes tipos de funcionários, cada um com suas próprias características. Considere as seguintes classes:


Resposta: 
```
// Criação da classe Funcionário
    class Funcionario {
      // No construtor da classe, atribui-se nome, idade e salário base
     constructor(nome, idade, salarioBase) {
       this.nome = nome;
       this.idade = idade;
       this.salarioBase = salarioBase;
}
// Criação do método para calcular o salário total do funcionário
     calcularSalario() {
      // Este método será atibuido nas classes herdeiras
      // Cada tipo de funcionário terá seu próprio cálculo
  }
}

// Criação da classe Professor, que herda de Funcionário
    class Professor extends Funcionario {
// Construtor da classe Professor, recebe também disciplina e horasAula como parâmetros
    constructor(nome, idade, salarioBase, disciplina, horasAula) {
       super(nome, idade, salarioBase); // Chama ao construtor a classe pai
       this.disciplina = disciplina;
       this.horasAula = horasAula;
}
// Utilização do método calcularSalario, específico para professores
     calcularSalario() {
       const valorHoraAula = 70;
       const salarioProfessor = this.horasAula * valorHoraAula; // O salário do professor é calculado multiplicando suas horas de aula pelo valor
// Adiciona o salário base ao salário calculado
       const salarioTotal = this.salarioBase + salarioProfessor;
// Mostra o resultado na tela
       console.log(
       `O professor ${this.nome}, com seus ${this.idade} anos, que realiza ${this.horasAula} horas de aula por semana da disciplina de ${this.disciplina} possui um salário de: R$ ${salarioTotal.toFixed(2)}.`
);
  }
}
// Criando dois objetos do tipo Professor com informações fictícias
   const professorFAC = new Professor("José Sergio", 43, 7000, "física", 40);
   const professorEM = new Professor("Hugo Campos", 54, 5500, "biologia", 25);

// Chama o método calcularSalario() para cada professor e mostrando o salário total
   professorFAC.calcularSalario(); // Saída: O professor José Sergio, com seus 43 anos, que realiza 40 horas de aula por semana da disciplina de física possui um salário de: R$ 9800.00.

   professorEM.calcularSalario(); // Saída: O professor Hugo Campos, com seus 54 anos, que realiza 25 horas de aula por semana da disciplina de biologia possui um salário de: R$ 7250.00.
```
