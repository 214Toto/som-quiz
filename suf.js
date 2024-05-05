const quizData = [
  {
    question: ".......... refers to  a tumor or mass?",
    a: "penia",
    b: "plasia",
    c: "oma",
    d: "opthy",
    e: "itis",
    correct: "c",
  },
  {
    question: ".......... refers to an increase in the number of cells ?",
    a: "ectasis",
    b: "oid",
    c: "oma",
    d: "opthy",
    e: "cytosis",
    correct: "e",
  },
  {
    question: "What term refers to an adnormal state ?",
    a: "penia",
    b: "opthy",
    c: "cytosis",
    d: "oma",
    e: "itis",
    correct: "b",
  },
  {
    question: ".......... refers to a resemblance?",
    a: "penia",
    b: "oid",
    c: "oma",
    d: "osis",
    e: "itis",
    correct: "b",
  },
  {
    question: "What term is used to refer to condition or just an abnormal condition?",
    a: "ectasis",
    b: "itis",
    c: "oma",
    d: "opthy",
    e: "osis",
    correct: "e",
  },
  {
    question: "What term is used to refer to a disorder of growth?",
    a: "ectasis",
    b: "plasia",
    c: "itis",
    d: "opthy",
    e: "osis",
    correct: "b",
  },
  {
    question: "........... refers to an inflammation ?",
    a: "penia",
    b: "plasia",
    c: "oma",
    d: "opthy",
    e: "itis",
    correct: "e",
  },
  {
    question: "What term is used to refer to dilation?",
    a: "ectasis",
    b: "plasia",
    c: "oma",
    d: "penia",
    e: "oid",
    correct: "a",
  },
  {
    question: "............. is a term used to refer to lack of or a deficiency?",
    a: "ectasis",
    b: "plasia",
    c: "oma",
    d: "penia",
    e: "oid",
    correct: "d",
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