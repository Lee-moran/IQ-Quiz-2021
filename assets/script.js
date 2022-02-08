const startButton = document.getElementById('start-btn')
const questionBoxElement = document.getElementById('question-box')
const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answer-btn')


let shuffledQuestions, currentQuestionIndex


startButton.addEventListener('click', startGame);

function startGame() {
    console.log('started');
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0; 
    questionBoxElement.classList.remove('hide');
    setNextQuestion()

}

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question

}

function selectAnswer() {

}

const questions = [
    {
        question: 'what is 2 + 2',
        answer: [
             {text: '4', correct: true},
             {text: '22', correct: false},
             {text: '2', correct: false},
             {text: '-2', correct: false} 
        ]
    }
]