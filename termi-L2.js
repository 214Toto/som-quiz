const quizData = [
  {
    question: ".......... means rapid olo fast",
    a: "omini",
    b: "Tachy",
    c: "Ab",
    d: "Per",
    e: "Dis",
    correct: "b",
  },
  {
    question: ".......... means colour",
    a: "omini",
    b: "chromate",
    c: "Peri",
    d: "Per",
    e: "Juxta",
    correct: "d",
  },
  {
    question: ".......... means through or complete",
    a: "Dia",
    b: "chromate",
    c: "Disi",
    d: "Trans",
    e: "Juxta",
    correct: "a",
  },
  {
    question: ".......... means All",
    a: "omini",
    b: "Tachy",
    c: "Ab",
    d: "Melano",
    e: "Dis",
    correct: "a",
  },
  {
    question: ".......... means adjacent",
    a: "omini",
    b: "chromate",
    c: "Peri",
    d: "Per",
    e: "Juxta",
    correct: "e",
  },
  {
    question: ".......... means around",
    a: "trans",
    b: "chromate",
    c: "Peri",
    d: "Per",
    e: "Juxta",
    correct: "c",
  },
  {
    question: ".......... means relatively the same as Per",
    a: "omini",
    b: "Juxta",
    c: "Peri",
    d: "Endo",
    e: "Dia",
    correct: "e",
  },
  {
    question: ".......... means near by",
    a: "Per",
    b: "Pan",
    c: "Para",
    d: "Inter",
    e: "Dis",
    correct: "c",
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

      <button onclick='window.location.href="tada.html" '> Reload </button>
      `
      
    }
  }
})