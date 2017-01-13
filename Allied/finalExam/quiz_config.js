let quiz = quiz_json;

let questions = getQuestions();
let choices = getChoices();
let answers = getAnswers();
let response = [];

function getQuestions() {
	let questions = [];
	for (let i = 0; i < quiz.problems.length; i++) {
		questions.push(quiz.problems[i].question);
	}

	return questions;
}

function getChoices() {
	const l = quiz.problems.length;
	let choices = initArrayWithArrays(l);

	for (let i = 0; i < l; i++) {
		for (let j = 0; j < nrOfProperties(quiz.problems[i].choices); j++) {
			choices[i].push(quiz.problems[i].choices[j]);
		}
	}

	return choices;
}

function getAnswers() {
	let answers = [];
	for (let i = 0; i < quiz.problems.length; i++) {
		answers.push(quiz.problems[i].answer);
	}

	return answers;
}

function nrOfProperties(obj) {
    var count = 0;
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            ++count;
    }

    return count;
}

function initArrayWithArrays(nrOfArrays) {		
	let choices = [];
	for (let i = 0; i < nrOfArrays; i++) {
		choices[i] = [];
	}	

	return choices;
}

// response for getting 100%
response[0] = "Excellent, top marks!";
// response for getting 90% or more
response[1] = "Excellent, try again to get 100%!"
// response for getting 70% or more
response[2] = "Well done, that is a good score, can you do better?";
// response for getting over 50%
response[3] = "Nice one, you got more than half of the questions right, can you do better?";
// response for getting 40% or more
response[4] = "You got some questions right, you can do better!";
// response for getting 20% or more
response[5] = "You didn't do too well, why not try again!?";
// response for getting 10% or more
response[6] = "That was pretty poor!  Try again to improve!";
// response for getting 9% or less
response[7] = "Oh dear, I think you need to go back to school (or try again)!";
