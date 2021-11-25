let startQuiz = document.getElementById('start');
let quizHolder = document.getElementById('quiz_holder');

function startFunc() {
    startQuiz.style.display = 'none'
    quizHolder.classList.remove('hidden')
}

startQuiz.addEventListener('click', startFunc)






function nextQ() {
    let q = {
        question: 'Which English football team is called the Magpies?',
        option: ['Chelsea', 'Everton', 'Newcastle', 'Stroke'],
        correctAnswer: 2
    }
    
    let questionGet = document.getElementById('question');
    questionGet.textContent = q.question;

    let optionsGet = document.querySelectorAll('.option');
    optionsGet.forEach(function(element, index) {
        element.textContent = q.option[index];

        element.addEventListener('click', function() {
            if(q.correctAnswer == index) {
                console.log('right')       
            } else {
                console.log('wrong')
            }
        })
    });
} 

nextQ(question);

