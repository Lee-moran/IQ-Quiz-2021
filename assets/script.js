const startButton = document.getElementById('start-btn')
const questionBoxElement = document.getElementById('question-box')

startButton.addEventListener('click', startGame);

function startGame() {
    console.log('started');
    startButton.classList.add('hide');
    questionBoxElement.classList.remove('hide');

}

function setNextQuestion() {

}

function selectAnswer() {

}