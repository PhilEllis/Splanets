// Splanets Quiz Questions, answers options, correct answer and image links 
var answers = [
	"assets/img/mercury.png",
	"assets/img/venus.png",
	"assets/img/earth.png",
	"assets/img/mars.png",
	"assets/img/jupiter.png",
	"assets/img/saturn.png",
	"assets/img/uranus.png",
	"assets/img/neptune.png"
  ];

let answer1 = document.getElementById("img1");
let answer2 = document.getElementById("img2");
let answer3 = document.getElementById("img3");
let answer4 = document.getElementById("img4");



let spQuiz = [
    {
        question: "What planet is closest to the Sun?",
        answers: [
			"assets/img/venus.png",
			"assets/img/mercury.png",
			"assets/img/mars.png",
			"assets/img/earth.png"
		],
			correctAnswer: '1'
	},
    {
		question: "Which planet has the highest mountain in our solar system, a volcano named Olympus Mons?",
		answers: [
			"assets/img/mars.png",
			"assets/img/jupiter.png",
			"assets/img/neptune.png",
			"assets/img/earth.png"
		],
		correctAnswer: '0'
	},
	{
		question: "Which planet has organic life?",
		answers: [
			"assets/img/saturn.png",
			"assets/img/mars.png",
			"assets/img/earth.png",
			"assets/img/uranus.png"
		],
		correctAnswer: '2'
	},
	{
		question: "Which planet is the brightest in our solar system?",
		answers: [
			"assets/img/mars.png",
			"assets/img/neptune.png",
			"assets/img/saturn.png",
			"assets/img/venus.png"
		],
		correctAnswer: '3'
	},
	{
		question: "Which planet is Nicknamed the Icy planet as it is the coldest one?",
		answers: [
			"assets/img/neptune.png",
			"assets/img/saturn.png",
			"assets/img/uranus.png",
			"assets/img/mars.png"
		],
		correctAnswer: '2'
	},
	{
		question: "Which planet is 5th from the sun and the biggest in our solar system?",
		answers: [
			"assets/img/saturn.png",
			"assets/img/mars.png",
			"assets/img/mercury.png",
			"assets/img/jupiter.png"
		],
		correctAnswer: '3'
	},
	{
		question: "Which planet is the smallest planet?",
		answers: [
			"assets/img/mercury.png",
			"assets/img/earth.png",
			"assets/img/neptune.png",
			"assets/img/jupiter.png"
		],
		correctAnswer: '0'
	},
	{
		question: "Which planet has outer rings made of dust and ice chunks?",
		answers: [
			"assets/img/venus.png",
			"assets/img/saturn.png",
			"assets/img/uranus.png",
			"assets/img/jupiter.png"
		],
		correctAnswer: '1'
	},
	{
		question: "Which planet is the hottest planet?",
		answers: [
			"assets/img/mercury.png",
			"assets/img/mars.png",
			"assets/img/venus.png",
			"assets/img/jupiter.png"
		],
		correctAnswer: '2'
	},
	{
		question: "Which planet is furthest from the sun?",
		answers: [
			"assets/img/neptune.png",
			"assets/img/saturn.png",
			"assets/img/uranus.png",
			"assets/img/mercury.png"
		],
		correctAnswer: '0'
	},
];

// Function to show Question and possible answers
let newQuestion = 0;
function displayQuestion () {
    let question = spQuiz[newQuestion];
    document.getElementById("question-text").innerHTML = question.question;
	let answers = question.answers;
	answer1.setAttribute("src", answers[0]);
	answer2.setAttribute("src", answers[1]);
	answer3.setAttribute("src", answers[2]);
	answer4.setAttribute("src", answers[3]);
    for (let i = 0; i < answers.length; i++) {
        let answer = ans
		wers[i];
        let img = document.createElement("img");
        img.src = answer;
        img.onclick = function() {
            checkAnswer(i);
        };
        document.getElementById("answer-btns").appendChild(img);
    } 
}

//Next button

//Results Restart or Launch Rocket
let result = 0;

function checkAnswer(answer) {
  let question = spQuiz[newQuestion];
  if (answer === question.correctAnswer) {
    result++;
    alert("Correct!");
  } else {
    alert("Incorrect.");
  }
  newQuestion++;
  if (newQuestion === spQuiz.length) {
    displayResult();
  } else {
    displayQuestion();
  }
}

function displayResult() {
	alert(`You got ${result} out of ${spQuiz.length} questions correct.`);
  }
//Call Quiz

displayQuestion();
//Progress Bar

//Event listen on clicks to keep it enlarged

//Disable submit on video & replace video with quiz


