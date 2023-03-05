const usuarios = [
  { nome: "luis", idade: 26 },
  { nome: "norma", idade: 16 },
  { nome: "daiana", idade: 26 },
  { nome: "jorge", idade: 16 },
  { nome: "kauan", idade: 16 },
  { nome: "charles", idade: 26 },
  { nome: "marco", idade: 16 },
  { nome: "bruno", idade: 16 },
];

const maiorDeIdade = [];
const menorDeIdade = [];

usuarios.forEach((pessoa) => {
  pessoa.idade >= 18 ? maiorDeIdade.push(pessoa.nome) : menorDeIdade.push(pessoa.nome);
});

console.log(maiorDeIdade);
console.log(menorDeIdade);