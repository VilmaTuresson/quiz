let startQuiz = document.getElementById('start');
let rulesBtn = document.getElementById('rules');
let rulesDiv = document.getElementById('rules-div');
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
const quizQuestionNumber = 6;

startQuiz.addEventListener('click', startFunc);
playAgain.addEventListener('click', startFrame);
rulesBtn.addEventListener('click', showRules);

/**
 * Shows text with game instructions
 */
function showRules() {
    rulesDiv.classList.remove('hidden');
    rulesBtn.style.display = 'none';
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
        question: 'Which boxer is the movie Cinderella Man about?',
        option: ['Mike Tyson', 'James Braddock', 'Marvin Dempsey', 'Jack Dempsey'],
        correctAnswer: 'James Braddock'
    },
    {
        question: "Who won FIFA Women's World Cup 2011 in Germany?",
        option: ['Germany', 'Brazil', 'Japan', 'USA'],
        correctAnswer: 'Japan'
    },
    {
        question: 'What year was the first handball game played?',
        option: ['1889', '1917', '1903', '1964'],
        correctAnswer: '1917'
    },
    {   
        question: 'What country invented curling?',
        option: ['Scotland', 'Canada', 'Ukraine', 'Sweden'],
        correctAnswer: 'Scotland'
    },
    {
        question: 'Which country does the alpine skier, Alberto Tomba come from?',
        option: ['Austria', 'Italy', 'Spain', 'Croatia'],
        correctAnswer: 'Italy'
    },
    {
        question: 'When was the first world championship of figure skating held?',
        option: ['1912', '1893', '1922', '1896'],
        correctAnswer: '1896'
    },
    {
        question: 'Which nation has the most Olympic gold medals in sailing?',
        option: ['Great Britain', 'Norway', 'Poland', 'Spain'],
        correctAnswer: 'Great Britain'
    },
    {
        question: 'How many players are on a baseball team?',
        option: ['12', '9', '8', '11'],
        correctAnswer: '9'
    },
    {
        question: 'In professional basketball, how high is the basketball hoop from the ground?',
        option: ['8 feet', '12 feet', '10 feet', '14 feet'],
        correctAnswer: '10 feet'
    },
    {
        question: 'How big is an Olympic sized swimming pool in meters?',
        option: ['40', '50', '60', '80'],
        correctAnswer: '50'
    },
    {
        question: 'What year were the first modern Olympics played?',
        option: ['1789', '1916', '1896', '1765'],
        correctAnswer: '1896'
    },
    {
        question: 'In how many seconds did Usain Bolt finish the 100-meter race in 2009?',
        option: ['9.58', '10.24', '8.97', '8.62'],
        correctAnswer: '9.58'
    }
];