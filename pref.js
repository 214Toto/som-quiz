const quizData = [
  {
    question: "What term refers to the neck region ?",
    a: "Throaco",
    b: "Ana",
    c: "Derm",
    d: "Homeo",
    e: "Cerv",
    correct: "e",
  },
  {
    question: "What term refers to after or beyond ?",
    a: "Perito",
    b: "Ana",
    c: "Meta",
    d: "Homeo",
    e: "Neo",
    correct: "c",
  },
  {
    question: "........is a term that refers to the skin region ?",
    a: "Dys",
    b: "Ana",
    c: "Cephalo",
    d: "Derm",
    e: "Homeo",
    correct: "d",
  },
  {
    question: "What term refers to the back or again or up ?",
    a: "Ana",
    b: "Neo",
    c: "Derm",
    d: "Homeo",
    e: "Dys",
    correct: "a",
  },
  {
    question: "......... is a term that refers to a disease that relates to the neurons ?",
    a: "Throaco",
    b: "Neuro",
    c: "Derm",
    d: "Homeo",
    e: "Cerv",
    correct: "b",
  },
  {
    question: "What term refers to the Abdominal region?",
    a: "Cephalo",
    b: "Meta",
    c: "Derm",
    d: "Abdomino",
    e: "Cerv",
    correct: "d",
  },
  {
    question: "What term refers to new ?",
    a: "Neuro",
    b: "Perito",
    c: "Neo",
    d: "Homeo",
    e: "Meta",
    correct: "e",
  },
  {
    question: "....... is a term that means bad or difficult or defective or abnormal?",
    a: "Dys",
    b: "Ana",
    c: "Cephalo",
    d: "Derm",
    e: "Homeo",
    correct: "a",
  },
  {
    question: "What term refers to the peritoneum region ?",
    a: "Perito",
    b: "Ana",
    c: "Meta",
    d: "Homeo",
    e: "Neo",
    correct: "c",
  },
  {
    question: "What term refers to the head regiom ?",
    a: "Derm",
    b: "Ana",
    c: "Cephalo",
    d: "Throaco",
    e: "Homeo",
    correct: "c",
  },
  {
    question: "What term refers to the chest regiom ?",
    a: "Derm",
    b: "Ana",
    c: "Cephalo",
    d: "Throaco",
    e: "Homeo",
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

      <button onclick='window.location.href="disease-pre-suf.html" '> Reload </button>
      `
      
    }
  }
})