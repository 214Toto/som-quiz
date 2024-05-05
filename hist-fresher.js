const quizData = [
  {
    question: "Dissection of human body started in 1514 by.........",
    a: "John Hunter",
    b: "Xavier Bichat",
    c: "Hippocrates",
    d: "Vesalius",
    e: "Leonardo da Vinci",
    correct: "d",
  },
  {
    question: "The first dissections took place on which peoples ?",
    a: "Street kids",
    b: "Executed criminals",
    c: "immigrants",
    d: "Fellow Doctors",
    e: "Any Volunteer",
    correct: "b",
  },
  {
    question: "What was the time period for the religious beleifs and magic to rational approach ?",
    a: "AD 1500 to 1800",
    b: "Prehistoric Time to AD 1500",
    c: "AD 1800 to 1950s",
    d: "Beyond 1800",
    e: "1950s to present times",
    correct: "b",
  },
  {
    question: "Whose art work of human muscles and embryos led to the development of human anatomy",
    a: "John Hunter",
    b: "Xavier Bichat",
    c: "Edward Jenner",
    d: "Vesalius",
    e: "Leonardo da Vinci",
    correct: "e",
  },
  {
    question: "Dhanvantri was the diety of medicine among which people ?",
    a: "Nigerian",
    b: "Italic",
    c: "Sapnish",
    d: "Chinese",
    e: "India",
    correct: "e",
  },
  {
    question: "Who is the father of Microscopy ?",
    a: "John Hunter",
    b: "Anthony van Leeuwenhoek",
    c: "Marcello Malpighi",
    d: "George N. Papanicolaou",
    e: "Hippocrates",
    correct: "b",
  },
  {
    question: "What was the name of the clone sheep that Ian Wilmutand is colleagues created? ",
    a: "Toto",
    b: "Jolly",
    c: "Dolly",
    d: "Prince",
    e: "elly",
    correct: "c",
  },
  {
    question: "What is the period  of modern pathology ? ",
    a: "AD 1500 to 1800",
    b: "Prehistoric Time to AD 1500",
    c: "AD 1800 to 1950s",
    d: "Beyond 1800",
    e: "1950s to present times",
    correct: "e",
  },
];

const quiz = document.getElementById("quiz")
const answerEls = document.querySelectorAll(".answer")
const questionEl = document.getElementById("question")
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const e_text = document.getElementById("e_text")
const submitBtn = document.getElementById("submit")


let currentQuiz = 0 
let score = 0

loadQuiz()

function loadQuiz() {
   
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    e_text.innerText = currentQuizData.e
}

function deselectAnswers() {
      answerEls.forEach(answerEls => answerEls.checked = false)

}

function getSelected() {
      let answer
      answerEls.forEach(answerEl => {
        if(answerEl.checked) {
          answer = answerEl.id
        }
      })
      return answer

}

submitBtn.addEventListener('click', () => {
  const answer = getSelected()
  if(answer) {
    if(answer === quizData[currentQuiz].correct) {
      score++
    }

    currentQuiz++

    if(currentQuiz < quizData.length) {
      loadQuiz()
    } else {
      quiz.innerHTML = `
      <h2> You Answered ${score}/${quizData.length} questions corretly</h2>

      <button onclick='window.location.href="histology.html" '> Reload </button>
      `
      
    }
  }
})