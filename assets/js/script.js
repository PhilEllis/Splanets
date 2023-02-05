// Splanets Quiz Questions, answers options, correct answer and image links 
let spQuiz = [
    {
        question: "What planet is closest to the Sun?",
        answers: [
			"../img/venus.png",
			"../img/mercury.png",
			"../img/mars.png",
			"../img/earth.png"
		],
		correctAnswer: '1'
	},
    {
		question: "Which planet has the highest mountain in our solar system, a volcano named Olympus Mons?",
		answers: [
			"../img/mars.png",
			"../img/jupiter.png",
			"../img/neptune.png",
			"../img/earth.png"
		],
		correctAnswer: '0'
	},
	{
		question: "Which planet has organic life?",
		answers: [
			"../img/saturn.png",
			"../img/mars.png",
			"../img/earth.png",
			"../img/uranus.png"
		],
		correctAnswer: '2'
	},
	{
		question: "Which planet is the brightest in our solar system?",
		answers: [
			"../img/mars.png",
			"../img/neptune.png",
			"../img/saturn.png",
			"../img/venus.png"
		],
		correctAnswer: '3'
	},
	{
		question: "Which planet is Nicknamed the Icy planet as it is the coldest one?",
		answers: [
			"../img/neptune.png",
			"../img/saturn.png",
			"../img/uranus.png",
			"../img/mars.png"
		],
		correctAnswer: '2'
	},
	{
		question: "Which planet is 5th from the sun and the biggest in our solar system?",
		answers: [
			"../img/saturn.png",
			"../img/mars.png",
			"../img/mercury.png",
			"../img/jupiter.png"
		],
		correctAnswer: '3'
	},
	{
		question: "Which planet is the smallest planet?",
		answers: [
			"../img/mercury.png",
			"../img/earth.png",
			"../img/neptune.png",
			"../img/jupiter.png"
		],
		correctAnswer: '0'
	},
	{
		question: "Which planet has outer rings made of dust and ice chunks?",
		answers: [
			"../img/venus.png",
			"../img/saturn.png",
			"../img/uranus.png",
			"../img/jupiter.png"
		],
		correctAnswer: '1'
	},
	{
		question: "Which planet is the hottest planet?",
		answers: [
			"../img/mercury.png",
			"../img/mars.png",
			"../img/venus.png",
			"../img/jupiter.png"
		],
		correctAnswer: '2'
	},
	{
		question: "Which planet is furthest from the sun?",
		answers: [
			"../img/neptune.png",
			"../img/saturn.png",
			"../img/uranus.png",
			"../img/mercury.png"
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
	for (let i = 0; i < answers.length; i++) {
		let answer = answers[i];
		let img = document.createElement("img");
		img.src = answers;
		img.onclick = function() {
			checkAnswer(i);
		};
		document.getElementById("answer-btns").appendChild(img);
	} 
}

//Next button

//Results Restart or Launch Rocket

//Call Quiz

displayQuestion();
//Progress Bar

//Event listen on clicks to keep it enlarged

//Disable submit on video & replace video with quiz


