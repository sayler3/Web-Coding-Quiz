//creating varibles for timer
var timerCount = 100;
var timerEl = document.querySelector("#countdown");

timerEl.textContent = timerCount;

var timer = window.setInterval(function() {
    timerCount--;
    timerEl.textContent = timerCount

    if (timerCount === 0) {
        clearInterval(timer)
    }
}, 1000)

//creating questions and answers
var questions = [
    {
        q: "Inside which HTML element do we put the JavaScript?",
        choices: ["<javaScript>", "<js>", "<script>"],
        a: "C"
    },
    {
        q: "Where is the correct place to insert a JavaScript?",
        choices: ["head", "footer", "body"],
        a: "C"
    }]

//creating varibles for questions
var questionsPointer = 0

var question = document.querySelector("#question")
var optionA = document.querySelector("#optionA")
var optionB = document.querySelector("#optionB")
var optionC = document.querySelector("#optionC")

//creating function for showing questions
function setQuestions() {

    if (questionsPointer === questions.length) {
        clearInterval(timer)
        alert("you are done with " + timerCount + " time left")
        return
    }
    question.textContent = questions[questionsPointer].q
    optionA.textContent = questions[questionsPointer].choices[0]
    optionB.textContent = questions[questionsPointer].choices[1]
    optionC.textContent = questions[questionsPointer].choices[2]
}

//running function for answering questions
setQuestions() 

optionA.addEventListener("click", function() {
    if (optionA.getAttribute("data-answer") === questions[questionsPointer].a) {
        alert("That is correct")
        questionsPointer++
        setQuestions()
    } else {
        alert("wrong")
        timerCount -= 10
    }
})

optionB.addEventListener("click", function() {
    if (optionB.getAttribute("data-answer") === questions[questionsPointer].a) {
        alert("This is correct")
        questionsPointer++
        setQuestions()
    } else {
        alert("wrong")
        timerCount -= 10
    }
})

optionC.addEventListener("click", function() {
    if (optionC.getAttribute("data-answer") === questions[questionsPointer].a) {
        alert("this is correct")
        questionsPointer++
        setQuestions()
    } else {
        alert("wrong")
        timerCount -= 10
    }
})