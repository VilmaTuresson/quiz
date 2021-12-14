let startQuiz = document.getElementById('start');
let rulesBtn = document.getElementById('rules');
let quizHolder = document.getElementById('quiz_holder');
let scoreHolder = document.getElementById('score_holder');
let startContainer = document.getElementById('start_holder');
let scoreResult = document.getElementById('score_num');
let playAgain = document.getElementById('again-btn');
let answer;
let currentQuestion;
let questionIndex = 0;
let score = 0;
let currentIndex = 0;
let usedIndexes = [];
let quizQuestionNumber = 6;

startQuiz.addEventListener('click', startFunc);
playAgain.addEventListener('click', startFrame);
rulesBtn.addEventListener('click', rulesAlert);

/**
 * Sets alert with game instructions
 */
function rulesAlert() {
    alert('When you start the game you will be provided with a question and four options for answers. When you click the option that you think is the right answer the option will display in green color if correct and in red color if incorrect. When the last question is answered, you will be able to see what you scored on the quiz and of course, you can play the quiz again!');
}

/**
 * Hides start frame and shows question area
 */
function startFunc() {
    startContainer.classList.add('hidden');
    quizHolder.classList.remove('hidden');
    startGame();
}

/**
 * Gets first question and options
 */
function startGame() {
    let currentQuestion = q[questionIndex];
    displayQuestion(currentQuestion);
}

/**
 * Checks answer, gives feedback, add score if correct, and sets next question
 */
function validateAnswer() {
    answer = this.innerText;
    if (q[currentIndex].correctAnswer == answer) {
        score++;
        this.classList.add('correct');
    } else {
        this.classList.add('incorrect');
    }
    setTimeout(nextQuestion, 1000);
}

/**
 * Gets new the question and corresponding options
 */
function displayQuestion(question) {
    let questionGet = document.getElementById('question');
    questionGet.textContent = question.question;

    let optionsGet = document.querySelectorAll('.option');
    optionsGet.forEach(function (element, index) {
        element.classList.remove('correct');
        element.classList.remove('incorrect');
        element.textContent = q[currentIndex].option[index];
        element.addEventListener('click', validateAnswer);
    });
}
/**
 * Gets random qestion from q array and pushes questions that have been displayed
 */
function getRandomIndex() {
    currentIndex = Math.floor(Math.random() * (q.length - 1));
    while (usedIndexes.includes(currentIndex)) {
        currentIndex = Math.floor(Math.random() * (q.length - 1));
    } 
    usedIndexes.push(currentIndex);
    return currentIndex;
}

/**
 * Iterates q array
 */
function nextQuestion() {
   
    if (quizQuestionNumber > questionIndex + 1) {
        questionIndex++;
    } else {
        displayScore();
    }
    currentIndex = getRandomIndex()
    currentQuestion = q[currentIndex];
    displayQuestion(currentQuestion);
}

/**
 * Display score frame
 */
function displayScore() {
    quizHolder.classList.add('hidden');
    scoreHolder.classList.remove('hidden');
    scoreResult.innerText = score;
}

/**
 * Go back to start frame
 */
function startFrame() {
    quizHolder.classList.remove('hidden');
    scoreHolder.classList.add('hidden');
    questionIndex = 0;
    score = 0;
    usedIndexes = [];
    startGame();
}

let q = [{
        question: 'Which English football team is called the Magpies?',
        option: ['Chelsea', 'Everton', 'Newcastle', 'Stroke'],
        correctAnswer: 'Newcastle'
    },
    {
        question: 'Who was the first black tennis player to win the singles at Wimbledon?',
        option: ['Arthur Ashe', 'Althea Gibson', 'James Blake', 'Venus Williams'],
        correctAnswer: 'Althea Gibson'
    },
    {
        question: 'Which year did Matthew Webb swim the English channel?',
        option: ['1875', '1745', '1911', '1933'],
        correctAnswer: '1875'
    },
    {
        question: 'Which of the following hockey teams has not played in the NHL?',
        option: ['Seattle Kraken', 'Kansas City Scouts', 'Cleveland Hornets', 'Boston Bruins'],
        correctAnswer: 'Cleveland Hornets'
    },
    {
        question: 'Which Formula 1 driver is the movie Rush about?',
        option: ['Ayrton Senna', 'Nigel Mansell', 'Jackie Stewart', 'Niki Lauda'],
        correctAnswer: 'Niki Lauda'
    },
    {
        question: 'Which golf player was called "white shark"?',
        option: ['Gary Player', 'Greg Norman', 'Jim Furyk', 'Bernhard Langer'],
        correctAnswer: 'Greg Norman'
    },
    {
        question: 'Which English football team is called the Magpies? 2',
        option: ['Chelsea', 'Everton', 'Newcastle', 'Stroke'],
        correctAnswer: 'Newcastle'
    },
    {
        question: 'Who was the first black tennis player to win the singles at Wimbledon? 2',
        option: ['Arthur Ashe', 'Althea Gibson', 'James Blake', 'Venus Williams'],
        correctAnswer: 'Althea Gibson'
    },
    {
        question: 'Which year did Matthew Webb swim the English channel? 2',
        option: ['1875', '1745', '1911', '1933'],
        correctAnswer: '1875'
    },
    {   question: 'Which of the following hockey teams has not played in the NHL? 2',
        option: ['Seattle Kraken', 'Kansas City Scouts', 'Cleveland Hornets', 'Boston Bruins'],
        correctAnswer: 'Cleveland Hornets'
    },
    {
        question: 'Which Formula 1 driver is the movie Rush about? 2',
        option: ['Ayrton Senna', 'Nigel Mansell', 'Jackie Stewart', 'Niki Lauda'],
        correctAnswer: 'Niki Lauda'
    },
    {
        question: 'Which golf player was called "white shark"? 2',
        option: ['Gary Player', 'Greg Norman', 'Jim Furyk', 'Bernhard Langer'],
        correctAnswer: 'Greg Norman'
    },
    {
        question: 'Which English football team is called the Magpies? 3',
        option: ['Chelsea', 'Everton', 'Newcastle', 'Stroke'],
        correctAnswer: 'Newcastle'
    },
    {
        question: 'Who was the first black tennis player to win the singles at Wimbledon? 3',
        option: ['Arthur Ashe', 'Althea Gibson', 'James Blake', 'Venus Williams'],
        correctAnswer: 'Althea Gibson'
    },
    {
        question: 'Which year did Matthew Webb swim the English channel? 3',
        option: ['1875', '1745', '1911', '1933'],
        correctAnswer: '1875'
    },
    {
        question: 'Which of the following hockey teams has not played in the NHL? 3',
        option: ['Seattle Kraken', 'Kansas City Scouts', 'Cleveland Hornets', 'Boston Bruins'],
        correctAnswer: 'Cleveland Hornets'
    },
    {
        question: 'Which Formula 1 driver is the movie Rush about? 3',
        option: ['Ayrton Senna', 'Nigel Mansell', 'Jackie Stewart', 'Niki Lauda'],
        correctAnswer: 'Niki Lauda'
    },
    {
        question: 'Which golf player was called "white shark"? 3',
        option: ['Gary Player', 'Greg Norman', 'Jim Furyk', 'Bernhard Langer'],
        correctAnswer: 'Greg Norman'
    }
];