const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progressBarFull');
const loader = document.getElementById('loader');
const game = document.getElementById('game');
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [];

// Utility function to decode HTML entities
const decodeHTML = (html) => {
    const textArea = document.createElement('textarea');
    textArea.innerHTML = html;
    return textArea.value;
};

// Fetch questions from API
fetch(
    'https://opentdb.com/api.php?amount=20&category=9&difficulty=easy'
)
    .then((res) => res.json())
    .then((loadedQuestions) => {
        questions = loadedQuestions.results.map((loadedQuestion) => {
            const formattedQuestion = {
                question: decodeHTML(loadedQuestion.question),
                type: loadedQuestion.type,
            };

            if (loadedQuestion.type === 'multiple') {
                const answerChoices = [...loadedQuestion.incorrect_answers].map(decodeHTML);
                formattedQuestion.answer = Math.floor(Math.random() * 4) + 1;
                answerChoices.splice(
                    formattedQuestion.answer - 1,
                    0,
                    decodeHTML(loadedQuestion.correct_answer)
                );

                answerChoices.forEach((choice, index) => {
                    formattedQuestion['choice' + (index + 1)] = choice;
                });
            } else if (loadedQuestion.type === 'boolean') {
                // Handle true/false questions
                formattedQuestion.answer = loadedQuestion.correct_answer === "True" ? 1 : 2;
                formattedQuestion.choice1 = "True";
                formattedQuestion.choice2 = "False";
            }

            return formattedQuestion;
        });

        startGame();
    })
    .catch((err) => console.error(err));

// Constants
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 20;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
    game.classList.remove('hidden');
    loader.classList.add('hidden');
};

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        return window.location.assign('end.html');
    }

    questionCounter++;
    progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    if (currentQuestion.type === 'multiple') {
        // Display multiple-choice options
        choices.forEach((choice, index) => {
            choice.classList.remove('hidden');
            const number = choice.dataset['number'];
            choice.innerText = currentQuestion['choice' + number];
        });
    } else if (currentQuestion.type === 'boolean') {
        // Display true/false options only
        choices.forEach((choice, index) => {
            if (index < 2) {
                choice.classList.remove('hidden');
                choice.innerText = currentQuestion['choice' + (index + 1)];
            } else {
                choice.classList.add('hidden');
            }
        });
    }

    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        const classToApply =
            selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if (classToApply === 'correct') {
            incrementScore(CORRECT_BONUS);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    });
});

incrementScore = (num) => {
    score += num;
    scoreText.innerText = score;
};
