// Declaração de variáveis Step01
const question = document.getElementById('question'); // div que contém a pergunta
const answersBox = document.querySelector('#answers-box'); // div que contém as respostas alternativas
const quizzContainer = document.querySelector('#quizz-container'); // div que contém o quizz
const scoreContainer = document.getElementById('score-container'); // div que contém a tela de score

const letters = ['a', 'b', 'c', 'd']; // alternativas da questão
let points = 0; // pontos do usuário: zero pq vai progredir conforme o usuário acerta as questões
let actualQuestion = 0; // questão atual: zero pq vai progredir conforme o usuário responde as questões

// Perguntas do quizz >> Step02
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
    createQuestion(0); // 0 refere-se à primeira questão, no caso, a questão 1 e assim por diante
} // End function init

// função para criar e inserir as ALTERNATIVAS na tela >> Step03
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

    // inserir as alternativas a, b, c, d
    questions[i].answers.forEach(function(answer, i){ // percorrer as respostas da questão atual
        
        // cria o template do botão do quizz
        const answerTemplate = document.querySelector('.answer-template').cloneNode(true); // clonar o template de respostas

        const letterBtn = answerTemplate.querySelector('.btn-letter'); // pegar o botão do template
        const answerText = answerTemplate.querySelector('.question-answer'); // pegar o texto da resposta
        
        letterBtn.textContent = letters[i]; // inserir a letra da alternativa
        answerText.textContent = answer['answer']; // inserir o texto da resposta

        answerTemplate.setAttribute('correct-answer', answer['correct']); // inserir o atributo de resposta correta no botão. ver pergunta

        // remover hide e answer-template class
        answerTemplate.classList.remove('hide');
        answerTemplate.classList.remove('answer-template');

        // inserir a alternativa na tela
        answersBox.appendChild(answerTemplate); // inserir o botão com a alternativa na tela

        // adicionar evento de click no botão
        answerTemplate.addEventListener('click', function(){
            checkAnswer(this);
        });

        //console.log(answerTemplate);
    });

    // incrementar o número da questão atual, alterando para próxima questão
    actualQuestion++; // incrementar a questão atual

}

// Verificando a resposta do user >> Step04
function checkAnswer(btn){
    
    // selecionar todos os botões da resposta
    const buttons = answersBox.querySelectorAll('button');

    // verificar se a resposta está correta
    buttons.forEach(function(button){
        if(button.getAttribute('correct-answer') === 'true'){ // se a resposta for verdadeira
            
            button.classList.add('correct-answer'); // adicionar a classe correct-answer

            // verificar se o usuário acertou a questão
            if(btn === button){ // se o botão clicado for igual ao botão correto
                points++; // incrementar os pontos do usuário Nota: points criado no início do código
            }

        } else {

            button.classList.add('wrong-answer'); // se a resposta for falsa, adicionar a classe wrong-answer
        }
    });

    // console.log(points); // para verificar se a lógica funciona acrescentando os pontos do usuário

    // Chamar a próxima pergunta
    nextQuestion(); //criado abaixo

}

// Função para a próxima pergunta >> Step05
function nextQuestion(){

    // timer para usuário ver a resposta
    setTimeout(function(){

        // verificar se ainda há perguntas
        if(actualQuestion >= questions.length){ // se a questão atual for maior ou igual ao número de questões
            // mostrar a tela de score >> Step06
            showScoreQuizz(); // criado abaixo
            return;
            
        }

        createQuestion(actualQuestion); // chamar a função createQuestion para a próxima questão

    }, 2000); // tempo de espera para a próxima pergunta
}

// Função para mostrar o score do quizz >> Step07

function showScoreQuizz(){
    
    // ocultar o container do quizz com o método .add ou .toggle
    quizzContainer.classList.add('hide'); // ocultar o container do quizz

    // mostrar o container de score com o método .remove ou .toggle
    scoreContainer.classList.remove('hide'); // mostrar o container de score

    // calcular os pontos do quizz
    const score = ((points / questions.length) * 100).toFixed(2);
    
    const screenScore = scoreContainer.querySelector('#display-score'); // pegar o id do score

    screenScore.textContent = score.toString(); // inserir o score na tela

    // alterar o número de perguntas corretas
    const correctAnswers = scoreContainer.querySelector('#correct-answers');
    correctAnswers.textContent = points; // inserir o número de perguntas corretas

    // alterar o total de perguntas
    const totalQuestions = scoreContainer.querySelector('#questions-qty');
    totalQuestions.textContent = questions.length; // inserir o total de perguntas
}

// Reiniciar o quizz >> Step08

const restartButton = document.querySelector('#restart'); // pegar o botão de restart

restartButton.addEventListener('click', function(){
    // zerar as variáveis do quizz
    actualQuestion = 0; // zerar a questão atual
    points = 0; // zerar os pontos

    // reiniciar o quizz
    scoreContainer.classList.add('hide'); // ocultar o container de score
    quizzContainer.classList.remove('hide'); // mostrar o container do quizz

    init(); // chamar a função init para reiniciar o quizz
})

// inicializar o quizz >> Step02
init(); // chamar a função init para iniciar o quizz