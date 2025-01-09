// Declaração de variáveis
const question = document.getElementById('question'); // div que contém a pergunta
const answersBox = document.querySelector('#answers-box'); // div que contém as respostas alternativas
const quizzContainer = document.querySelector('#quizz-container'); // div que contém o quizz
const scoreContainer = document.getElementById('score-container'); // div que contém a tela de score
const letters = ['a', 'b', 'c', 'd']; // alternativas da questão
let points = 0; // pontos do usuário: zero pq vai progredir conforme o usuário acerta as questões
let actualQuestion = 0; // questão atual: zero pq vai progredir conforme o usuário responde as questões

