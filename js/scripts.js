// Declaração de variáveis
const question = document.getElementById('question'); // div que contém a pergunta
const answersBox = document.querySelector('#answers-box'); // div que contém as respostas alternativas
const quizzContainer = document.querySelector('#quizz-container'); // div que contém o quizz
const scoreContainer = document.getElementById('score-container'); // div que contém a tela de score

const letters = ['a', 'b', 'c', 'd']; // alternativas da questão
let points = 0; // pontos do usuário: zero pq vai progredir conforme o usuário acerta as questões
let actualQuestion = 0; // questão atual: zero pq vai progredir conforme o usuário responde as questões

// Perguntas do quizz
const questions = [
    // questão 1
    {
        "question": "PHP foi desenvolvido para qual fim?",
        "answers": [
            {
                "answer": "back-end",
                "correct": true
            },
            {
                "answer": "front-end",
                "correct": false
            },
            {
                "answer": "Sistema operacional",
                "correct": false
            },
            {
                "answer": "Banco de dados",
                "correct": false
            }
        ]
    },
    // questão 2
    {
        "question": "Uma forma de declarar variável em JavaScript:",
        "answers": [
            {
                "answer": "$var",
                "correct": false
            },
            {
                "answer": "var",
                "correct": true
            },
            {
                "answer": "@var",
                "correct": false
            },
            {
                "answer": "#let",
                "correct": false
            }
        ]
    },
    // questão 3
    {
        "question": "Qual o seletor de id no CSS?",
        "answers": [
            {
                "answer": "#",
                "correct": true
            },
            {
                "answer": ".",
                "correct": false
            },
            {
                "answer": "@",
                "correct": false
            },
            {
                "answer": "/",
                "correct": false
            }
        ]
    }
];

// função para iniciar o quizz: substituir a tela inicial pela tela inicial do quizz, ou seja, a 1ª pergunta
function init() {
   // criar a primeira pergunta
    createQuestion(0); // 0 refere-se à primeira questão, no caso a questão 1 e assim por diante
}

// função para criar e inserir as alternativas na tela
function createQuestion(i){ // i refere-se à questão atual
    //limpar a questão anterior
    const oldButtons = answersBox.querySelectorAll('button'); // pegar todos os botões da questão anterior, no caso, as letras a, b, c, d.
    oldButtons.forEach(function(btn){
        btn.remove(); // remover cada botão
    });
    // alterar o texto da pergunta
    const questionText = question.querySelector("#question-text"); // pegar a questão atual
    const questionNumber = question.querySelector("#question-number"); // pegar o número da questão atual

    // alterar o texto da pergunta com array de questões
    questionText.textContent = questions[i].question; // pegar a questão atual representada pelo índice i
    questionNumber.textContent = i + 1; // pegar o número da questão atual, actualQuestion, representada pelo índice i
}

// inicializar o quizz
init(); // chamar a função init para iniciar o quizz