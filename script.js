const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false },
        ]
    },
    {
        question: "Which is the smallest country in the world?",
        answers: [
            { text: "Vatican City", correct: true },
            { text: "Bhutan", correct: false },
            { text: "Nepal", correct: false },
            { text: "Sri Lanka", correct: false },
        ]
    },
    {
        question: "Which is the largest desert in the world?",
        answers: [
            { text: "Kalahari", correct: false },
            { text: "Gobi", correct: false },
            { text: "Sahara", correct: false },
            { text: "Antarctica", correct: true },
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answers: [
            { text: "Asia", correct: false },
            { text: "Australia", correct: true },
            { text: "Arctic", correct: false },
            { text: "Africa", correct: false },
        ]
    },
];

var curque = 0;
var score = 0;
var removecolor = "";
var selected = false;

function showquestion() {
    var que = document.querySelector('.question');
    que.innerHTML = questions[curque].question;
    const buttons = document.querySelectorAll('#btndiv .options');
    buttons.forEach((button, index) => {
        button.innerHTML = questions[curque].answers[index].text;
        button.disabled = false; // Enable buttons for the new question
    });
    selected = false;
}

function start() {
    showquestion();
}

function buttonsss(event) {
    if (selected) return; // Prevent multiple selections

    let correctanswer = "";
    for (let a = 0; a < 4; a++) {
        if (questions[curque].answers[a].correct == true) {
            correctanswer = questions[curque].answers[a].text;
            break;
        }
    }

    if (correctanswer === event.target.innerHTML) {
        event.target.classList.add('cor');
        score++;
    } else {
        event.target.classList.add('wrong');
    }

    removecolor = event.target;
    selected = true; // Mark that an option has been selected

    const buttons = document.querySelectorAll('#btndiv .options');
    buttons.forEach(button => button.disabled = true); // Disable all buttons after selection
}

var nextquestion = document.querySelector('.next-btn');
nextquestion.addEventListener('click', next);

function next() {
    if (removecolor === "") {
        alert("Please select an option before proceeding.");
        return;
    }
    if (curque == questions.length - 1) {
        var result = document.querySelector('.area');
        result.innerHTML = `<h1 class="h1 fs-1 text-dark">Your Score : ${score}</h1>
                            <button class="next-btn text-center px-4" onclick="restart()">Restart</button>`;
        return;
    }
    curque++;
    if (removecolor.classList.contains('cor')) {
        removecolor.classList.remove('cor');
    } 
    if (removecolor.classList.contains('wrong')) {
        removecolor.classList.remove('wrong');
    }
    removecolor = "";
    start();
}

function restart() {
    curque = 0;
    score = 0;
    location.reload();
}

start();
