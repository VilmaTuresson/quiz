let startQuiz = document.getElementById('start')
let quizHolder = document.getElementById('quiz_holder');
let scoreHolder = document.getElementById('score_holder');
let startContainer =  document.getElementById('start_holder');
let options = document.getElementsByClassName('option');
let nextBtn = document.getElementById('next');
let scoreFrame =document.getElementById('score_holder');
let scoreResult = document.getElementById('score_num');
let playAgain = document.getElementById('again-btn');
let questionIndex = 0;
let score = 0;

startQuiz.addEventListener('click', startFunc)
nextBtn.addEventListener('click', nextQuestion)
playAgain.addEventListener('click', startFunc)

/**
 * Hides start frame and shows question area
 */
function startFunc() {
    startContainer.classList.add('hidden')
    quizHolder.classList.remove('hidden')
    startGame();
}

/**
 * get question and option 
 */
function startGame() {
    let currentQuestion = q[questionIndex]
    displayQuestion(currentQuestion);
} 

/**
 * get question and options and return feedback in console
 */
function displayQuestion(question) {
    let questionGet = document.getElementById('question');
    questionGet.textContent = question.question;

    let optionsGet = document.querySelectorAll('.option');
    optionsGet.forEach(function(element, index) {

        element.textContent = q[questionIndex].option[index];

        element.addEventListener('click', function() {
            answer = this.innerText;
            if(q[questionIndex].correctAnswer == answer) {
                score++ 
                /* code from sweetAlert with changed title value line 59 to 62 */
                Swal.fire({
                    title: 'Right Answer!',
                    icon: 'success',
                  })
            } else {
                /* code from sweetAlert with changed title value line 65 to 68 */
                Swal.fire({
                    title: 'Wrong Answer',
                    icon: 'error',
                  })
            }
        })
    });
}

/** go to next question */
function nextQuestion() {
    if (q.length > questionIndex + 1) {
    questionIndex++;
    } else {
        displayScore();
    }
    currentQuestion = q[questionIndex];
    displayQuestion(currentQuestion);
}

/**
 * display score frame
 */
function displayScore() {
    quizHolder.classList.add('hidden')
    scoreHolder.classList.remove('hidden');
    scoreResult.innerText = score;
};

/**
 * go back to start frame
 */
function startFrame() {
    questionIndex = 0;
    score = 0;
    startGame();
}

let q = [
    { 
        question: 'Which English football team is called the Magpies?',
        option: ['Chelsea', 'Everton', 'Newcastle', 'Stroke'],
        correctAnswer: 'Newcastle'
    }, 
    {
        question: 'Who was the first black tennis player to win the singles at wimbledon?',
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
        option: ['New York Americans', 'Kansas City Scouts', 'Cleveland Hornets', 'Boston Bruins'],
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
    }
]


