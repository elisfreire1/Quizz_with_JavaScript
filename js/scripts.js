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
]