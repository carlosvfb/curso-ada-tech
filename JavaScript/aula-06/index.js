// utilize sempre o Camel case no JavaScript!

// JavaScript possui tipagem dinâmica: infere ao tipo de dados
// JavaScript possui uma tipagem fraca

var nomeDoProfessor = 'Carlos Vitor'; // string (texto): utilize sempre aspas
var idade = 27; // number
var altura = 1.77 // number
var estudando = false; // boolean (booleano: true or false)
var semConteudo; // declarando uma Variável
var curso = 'Front-end em React', 
topico = 'JavaScript Básico I';

console.log(nomeDoProfessor, typeof nomeDoProfessor)

console.log(idade, typeof idade)

console.log(altura, typeof altura)

console.log(estudando, typeof estudando)

console.log(semConteudo, typeof semConteudo)

console.log(curso, topico)

// ! Não utilize o var nos seus Códigos JavaScript

let notaDoAluno = 10 // ! A diferença entre var e let é que var não aparece erro só e definida como undefined se tiver utilizando antes de ser declarada, diferente do let que aparece um erro (hoisting)
const mediaDoAluno = 8

notaDoAluno = 9;
// mediaDoAluno = 5; // ! Não pode mudar o valor atribuido quando é const

console.log(notaDoAluno)
console.log(mediaDoAluno)