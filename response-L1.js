const quizData = [
  {
    question: "Atrophy....",
    a: "Is always a pathological response",
    b: "Is a decreased in the size of cells",
    c: "is characterised by calcification of the organs",
    d: "Is an increase in the cell size",
    correct: "",
  },
  {
    question: "Which of the following ?",
    a: "Glycine",
    b: "Proline",
    c: "Histidine",
    d: "Cysteine",
    e: "Isoleucine",
    correct: "d",
  },
  {
    question: "Which of the following may cause Metaplasia ?",
    a: "Denervation",
    b: "Diminished blood supply",
    c: "Inadequate nutrition",
    d: "Chronic Irritation of the epithelium",
    correct: "a",
  },
  {
    question: "WHat is your dads name? ",
    a: "Blake",
    b: "Joe",
    c: "Jake",
    d: "Joel",
    correct: "b",
  },
  {
    question: "Metaplasia..........",
    a: "Is an increase in the numer of cells",
    b: "Is synonymous with cancer",
    c: "Is an irreversible adaptive response",
    d: "Arise by genetic reprogramming of stem cell",
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

      <button onclick='window.location.href="response.html" '> Reload </button>
      `
      
    }
  }
})