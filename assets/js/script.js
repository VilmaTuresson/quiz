let startQuiz = document.getElementById('start_holder');
let quizHolder = document.getElementById('quiz_holder');

let questionIndex = 0;


let nextBtn = document.getElementById('next');
nextBtn.addEventListener('click', startGame)


function startFunc() {
    startQuiz.style.display = 'none'
    quizHolder.classList.remove('hidden')
}

startQuiz.addEventListener('click', startFunc)



function startGame() {
    
    let questionGet = document.getElementById('question');
    questionGet.textContent = q[questionIndex].question;

    let optionsGet = document.querySelectorAll('.option');
    optionsGet.forEach(function(element, index) {
        element.textContent = q[questionIndex].option[index];

        element.addEventListener('click', function() {
            if(q.correctAnswer == index) {
                console.log('right')       
            } else {
                console.log('wrong')
            }
        })
    });
} 

let q = [
    { 
        question: 'Which English football team is called the Magpies?',
        option: ['Chelsea', 'Everton', 'Newcastle', 'Stroke'],
        correctAnswer: 2
    }, 
    {
        question: 'Who was the first black tennis player to win the singles at wimbledon?',
        option: ['Arthur Ashe', 'Althea Gibson', 'James Blake', 'Venus Williams'],
        correctAnswer: 1
    },
    {
        question: 'Which year did Matthew Webb swim the English channel?',
        option: ['1875', '1745', '1911', '1933'],
        correctAnswer: 0
    },
    {
        question: 'Which of the following hockey teams has not played in the NHL?',
        option: ['New York Americans', 'Kansas City Scouts', 'Cleveland Hornets', 'California Golden Seals'],
        correctAnswer: 2
    },
    {
        question: 'Which Formula 1 driver is the movie Rush about?',
        option: ['Ayrton Senna', 'Nigel Mansell', 'Jackie Stewart', 'Niki Lauda'],
        correctAnswer: 3
    },
    {
        question: 'Which golf player was called "white shark"?',
        option: ['Gary Player', 'Greg Norman', 'Jim Furyk', 'Bernhard Langer'],
        correctAnswer: 1
    }
]

startGame(question);

