// Splanets Quiz Questions, answers options, correct answer and image links 
let spQuiz = [
    {
        question: "What planet is closest to the Sun?",
        answers: [
			"assests/img/venus.png",
			"assests/img/mercury.png",
			"assests/img/mars.png",
			"assests/img/earth.png"
		],
		correctAnswer: '1'
	},
    {
		question: "Which planet has the highest mountain in our solar system, a volcano named Olympus Mons?",
		answers: [
			"assests/img/mars.png",
			"assests/img/jupiter.png",
			"assests/img/neptune.png",
			"assests/img/earth.png"
		],
		correctAnswer: '0'
	},
	{
		question: "Which planet has organic life?",
		answers: [
			"assests/img/saturn.png",
			"assests/img/mars.png",
			"assests/img/earth.png",
			"assests/img/uranus.png"
		],
		correctAnswer: '2'
	},
	{
		question: "Which planet is the brightest in our solar system?",
		answers: [
			"assests/img/mars.png",
			"assests/img/neptune.png",
			"assests/img/saturn.png",
			"assests/img/venus.png"
		],
		correctAnswer: '3'
	},
	{
		question: "Which planet is Nicknamed the Icy planet as it is the coldest one?",
		answers: [
			"assests/img/neptune.png",
			"assests/img/saturn.png",
			"assests/img/uranus.png",
			"assests/img/mars.png"
		],
		correctAnswer: '2'
	},
	{
		question: "Which planet is 5th from the sun and the biggest in our solar system?",
		answers: [
			"assests/img/saturn.png",
			"assests/img/mars.png",
			"assests/img/mercury.png",
			"assests/img/jupiter.png"
		],
		correctAnswer: '3'
	},
	{
		question: "Which planet is the smallest planet?",
		answers: [
			"assests/img/mercury.png",
			"assests/img/earth.png",
			"assests/img/neptune.png",
			"assests/img/jupiter.png"
		],
		correctAnswer: '0'
	},
	{
		question: "Which planet has outer rings made of dust and ice chunks?",
		answers: [
			"assests/img/venus.png",
			"assests/img/saturn.png",
			"assests/img/uranus.png",
			"assests/img/jupiter.png"
		],
		correctAnswer: '1'
	},
	{
		question: "Which planet is the hottest planet?",
		answers: [
			"assests/img/mercury.png",
			"assests/img/mars.png",
			"assests/img/venus.png",
			"assests/img/jupiter.png"
		],
		correctAnswer: '2'
	},
	{
		question: "Which planet is furthest from the sun?",
		answers: [
			"assests/img/neptune.png",
			"assests/img/saturn.png",
			"assests/img/uranus.png",
			"assests/img/mercury.png"
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
