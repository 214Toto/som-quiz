const quizData = [
  {
    question: "The removal and examination of tissue obtained from the living body is called.............",
    a: "Rigor Mortis",
    b: "Algor mortis",
    c: "Somatc death",
    d: "Biopsy",
    e: "Livor Mortis",
    correct: "e",
  },
  {
    question: "A probable outcome of a disease in a living individual is referref to as........",
    a: "Pathonomic Lesion",
    b: "Prognosis",
    c: "Lesion",
    d: "Symptoms",
    e: "Diagnosis",
    correct: "b",
  },
  {
    question: "A diagnosis made on the basis of the nature and locaton of the lesion is referred to as",
    a: "Clinical Diagnosis",
    b: "Aetiological Diagnosis",
    c: "Definitive diagnosis",
    d: "Morphological Diagnosis",
    e: "Pathonomical Leson",
    correct: "d",
  },
  {
    question: "A structural or morphological alteration associated with a diseased state in an individual is called........",
    a: "Pathonomic Lesion",
    b: "Prognosis",
    c: "Lesion",
    d: "Symptoms",
    e: "Diagnosis",
    correct: "c",
  },
  {
    question: "A diagnosis made on the basis of the cause of a disease is referred to as",
    a: "Clinical Diagnosis",
    b: "Aetiological Diagnosis",
    c: "Definitive diagnosis",
    d: "Morphological Diagnosis",
    e: "Pathonomical Leson",
    correct: "b",
  },
  {
    question: "The determinaton of the nature of a disease that has been expressed in a concise manner is termed as........",
    a: "Pathonomic Lesion",
    b: "Prognosis",
    c: "Lesion",
    d: "Symptoms",
    e: "Diagnosis",
    correct: "e",
  },
  {
    question: "Which oe of the following is not a possible outcome under prognosis",
    a: "Medication",
    b: "Complete Recovery",
    c: "Partial healing",
    d: "Death",
    e: "",
    correct: "c",
  },
  {
    question: "A diagnosis made on the basis of the specific disease entity involved is referred to as",
    a: "Clinical Diagnosis",
    b: "Aetiological Diagnosis",
    c: "Definitive diagnosis",
    d: "Morphological Diagnosis",
    e: "Pathonomical Leson",
    correct: "c",
  },
  {
    question: "The decolouration of dependent parts of the body after death as a result of reb blood cell destruction is called.............",
    a: "Rigor Mortis",
    b: "Algor mortis",
    c: "Somatc death",
    d: "Biopsy",
    e: "Livor Mortis",
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

      <button onclick='window.location.href="basiclanguage.html" '> Reload </button>
      `
      
    }
  }
})