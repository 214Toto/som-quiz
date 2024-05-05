const quizData = [
  {
    question: "................ Refers to the study of the basic alteratons in tisuses and includes things such as atrophy, necrosis and infalmmation.",
    a: "Systemic Pathology",
    b: "Cellualar Pathology",
    c: "General Pathology",
    d: "Chemical Pathology",
    e: "Laboratory Medicine",
    correct: "c",
  },
  {
    question: "What refers to the study of diseases associated with abnormalities of the immune mechanism of the body",
    a: "Immunopathology",
    b: "Chemical Pathology",
    c: "Surgical Pathology",
    d: "Gross Pathology",
    e: "Clinical Pathology",
    correct: "a",
  },
  {
    question: "What is referred to as the study of tissues removed at the time of surgeon",
    a: "Immunopathology",
    b: "Chemical Pathology",
    c: "Surgical Pathology",
    d: "Gross Pathology",
    e: "Clinical Pathology",
    correct: "c",
  },
  {
    question: "................ refers to the study of the disease of the organ systems of the body.",
    a: "Systemic Pathology",
    b: "Cellualar Pathology",
    c: "General Pathology",
    d: "Chemical Pathology",
    e: "Laboratory Medicine",
    correct: "a",
  },
  {
    question: "What branch of pathology is also referred to as Laboratory Medicine ?",
    a: "Immunopathology",
    b: "Chemical Pathology",
    c: "Surgical Pathology",
    d: "Gross Pathology",
    e: "Clinical Pathology",
    correct: "e",
  },
  {
    question: ".........refers to the study of diseases in which tissue and organs can be examined with the naked eye?",
    a: "Immunopathology",
    b: "Chemical Pathology",
    c: "Surgical Pathology",
    d: "Gross Pathology",
    e: "Clinical Pathology",
    correct: "d",
  },
  {
    question: "............refers to the study of diseases by examination of blood, urine, feaces, skin scrappings, etc.",
    a: "General Pathology",
    b: "Examination Pathology",
    c: "Surgical Pathology",
    d: "Gross Pathology",
    e: "Clinical Pathology",
    correct: "e",
  },
  {
    question: "What is Cellular Pathology ?",
    a: "Study of diseases where only a cell is affected",
    b: "Study of diseased tissues and organs with the aid of microscope",
    c: "Study of the basic alteratios in tissues",
    d: "Gross Pathology",
    e: "Probable Outcome of a disease in a living individual",
    correct: "b",
  },
  {
    question: "............. is the study of chemical alteratons in body  fluids and tissues that result from disease.",
    a: "Immunopathology",
    b: "Chemical Pathology",
    c: "Surgical Pathology",
    d: "Gross Pathology",
    e: "Clinical Pathology",
    correct: "b",
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

      <button onclick='window.location.href="pathology.html" '> Reload </button>
      `
      
    }
  }
})