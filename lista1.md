- lembre-se de utilizar as estruturas de código como ``esta aqui com ` `` ou
```javascript

# Questões objetivas

Resposta: Letra A
**1)** O que o código a seguir faz?

![Uma imagem](assets/ex01.PNG)

Escolha a opção que responde corretamente:

a) Imprime os números pares de 1 a 10.

b) Imprime os números ímpares de 1 a 10.

c) Imprime os números pares de 2 a 10.

d) Imprime os números ímpares de 2 a 10.

______

Resposta: Letra A
**2)** Identificar a linha que falta no código para criar uma classe Veiculo com atributo marca, e uma classe Carro que herda de Veiculo com um método ligar(). 

![Uma imagem](assets/ex02.PNG)

No lugar onde está escrito “// linha” qual das opções abaixo deve estar para funcionar corretamente o código?

A) let carro = new Carro("Toyota"); 

B) let ligar = new ligar("Toyota");

C) class Moto extends Veiculo {};

D) carro1.ligar();

______

Resposta: Letra A
**3)** Qual é o valor de resultado após a execução deste código?

![Uma imagem](assets/ex03.PNG)

Escolha a opção que responde corretamente:

A) 18

B) 16

C) 14

D) 12

______

Resposta: Letra A
**4)** Como você criaria um método `acelerar()` em uma classe `Carro`, que recebe um parâmetro `velocidade` e o adiciona a um atributo `velocidadeAtual`?

A) ![Uma imagem](assets/ex04_1.PNG)

B) ![Uma imagem](assets/ex04_2.PNG)

C) ![Uma imagem](assets/ex04_3.PNG)

D) ![Uma imagem](assets/ex04_4.PNG)

______

Resposta: Letra A
**5)** Qual a forma correta de definir uma classe Carro em JavaScript, com um método ligar() e um atributo marca?

A) ![Uma imagem](assets/ex05_1.PNG)

B) ![Uma imagem](assets/ex05_2.PNG)

C) ![Uma imagem](assets/ex05_3.PNG)

D) ![Uma imagem](assets/ex05_4.PNG)

______

Resposta: Letra A
**6)** Observe o código abaixo:

![Uma imagem](assets/ex06.PNG)

Qual será a saída do código acima?

A) "Olá, meu nome é João. Olá, meu nome é Maria."

B) "Olá, meu nome é ."

C) "João Maria"

D) "undefined undefined"

______

# Questões dissertativas

**7)** Vamos criar um programa em JavaScript para entender classes, métodos e atributos!
Classe Animal:
- Crie uma classe chamada Animal.
- Adicione dois atributos: nome e idade.
- Adicione um método chamado descrever() na classe Animal.
  - Este método deve exibir no console uma descrição do animal com seu nome e idade.

Criando e manipulando Animais:
- Crie dois objetos da classe Animal: um chamado "cachorro" e outro "gato", com idades distintas.
- Para cada animal, chame o método descrever() para ver a descrição no console.

Dica: Utilize `console.log()` para exibir as informações!

Resposta:
``// Criando a classe Animal e definindo seus atributos e métodos
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
// gato.descrever(); // Saída: Este é um gatinho e tem 5 anos. ``
______

**8)** Nos últimos dias tivemos a oportunidade de ter contato com Programação Orientada a Objetos, e tivemos contato com o tema "herança". Herança é um princípio de orientação a objetos, que permite que classes compartilhem atributos e métodos. Ela é usada na intenção de reaproveitar código ou comportamento generalizado ou especializar operações ou atributos. Então vamos praticar esse conteúdo nessa questão.
Vamos criar um programa em JavaScript para entender classes, métodos, atributos e herança!

Classe Animal:
- Crie uma classe chamada Animal.
- Adicione dois atributos: nome e idade.
- Adicione um método descrever() que exiba no console uma descrição do animal com seu nome e idade.

Classe Gato (Herda de Animal):
- Crie uma classe chamada Gato que herda da classe Animal.
- Adicione um atributo extra cor específico para gatos.
- Adicione um método miar() que exiba no console o som que um gato faz.

Criando Animais:
- Crie dois objetos da classe Animal: um chamado cachorro e outro gato, com idades distintas.
- Para o gato, também defina a cor.

Chamando os Métodos:
- Para cada animal, chame o método descrever() para ver a descrição no console.
- Para o gato, chame o método miar() para "ouvir" o som que ele faz (é também para ver o som no console).

Dica: Utilize console.log() para exibir as informações!

Resposta: 
`` // Criando a classe Animal e definindo seus atributos e métodos.
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
// gato.miar(); // Saída: Miau!! ``
______

**9)** Vamos criar um programa em JavaScript para somar notas!

Classe SomadorDeNotas:
- Crie uma classe chamada SomadorDeNotas.
- Adicione um atributo total inicializado com 0 para armazenar a soma das notas.

Método adicionarNota:
- Adicione um método chamado adicionarNota(nota) na classe SomadorDeNotas.
- Este método deve receber um parâmetro nota e somá-lo ao atributo total.

Criando o Somador e Adicionando Notas:
- Crie um objeto da classe SomadorDeNotas, chamado somador.
- Utilize o método adicionarNota(nota) para adicionar algumas notas ao somador.

Chamando o Método para Ver o Total:
- Após adicionar todas as notas, chame um método verTotal() para exibir o total das notas adicionadas.

Dica: Utilize console.log() para exibir as informações!

Resposta:
`` // Criando a classe SomadorNotas e definindo seus atributos e métodos.
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

// somador.verTotal(); // Saída: O total das notas é: 26. ``
______

**10)** Imagine que você está criando um programa em JavaScript para uma escola. Neste programa, existem diferentes tipos de funcionários, cada um com suas próprias características. Considere as seguintes classes:

Funcionário:
- atributo: Nome
- atributo: Idade
- atributo: Salário base
- método: calcularSalario() - Este método calcula o salário total do funcionário. Para cada tipo de funcionário, o cálculo será diferente.

Professor (herança de Funcionário):
- atributo: Disciplina
- atributo: Horas de aula por semana
- método: calcularSalario() - Para calcular o salário do professor, multiplicamos suas horas de aula pelo valor da hora/aula.

Agora, sua tarefa é escrever um código em JavaScript que crie as classes Funcionário e Professor, com suas características e métodos descritos acima. Depois de criar as classes, crie:
- Dois objetos do tipo Professor com informações fictícias.
- Para cada objeto, chame o método calcularSalario() e mostre o salário calculado no console.

Certifique-se de explicar cada parte do código utilizando comentários, explicando para que serve cada atributo e método, bem como a lógica por trás do cálculo de salário para o tipo de funcionário Professor.

Resposta: 
`` // Criação da classe Funcionário
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
// const professorFAC = new Professor("José Sergio", 43, 7000, "física", 40);
// const professorEM = new Professor("Hugo Campos", 54, 5500, "biologia", 25);

// // Chama o método calcularSalario() para cada professor e mostrando o salário total
// professorFAC.calcularSalario(); // Saída: O professor José Sergio, com seus 43 anos, que realiza 40 horas de aula por semana da disciplina de física possui um salário de: R$ 9800.00.

// professorEM.calcularSalario(); // Saída: O professor Hugo Campos, com seus 54 anos, que realiza 25 horas de aula por semana da disciplina de biologia possui um salário de: R$ 7250.00. ``
