const quizData = [
  
  {
    question: "A diagnosis made on the basis of the clinical signs observed in the living individual is referred to as",
    a: "Clinical Diagnosis",
    b: "Aetiological Diagnosis",
    c: "Definitive diagnosis",
    d: "Morphological Diagnosis",
    e: "Pathonomical Leson",
    correct: "a",
  },
  {
    question: "The cooling of the body after death is called.............",
    a: "Rigor Mortis",
    b: "Algor mortis",
    c: "Somatc death",
    d: "Biopsy",
    e: "Livor Mortis",
    correct: "b",
  },
  {
    question: "............. refers to the decomposition of tissues by bacterial enzymes after death of the entire body.",
    a: "Autopsy",
    b: "Post mortem putrefaction",
    c: "Pathogenesis",
    d: "Somatic Death",
    e: "Post mortem autolysis",
    correct: "b",
  },
  {
    question: "How can one define a pathonomic Lesion ?",
    a: "The removal and examination of tissue obtained from the livig body.",
    b: "A change that is specifically charactristic of a disease",
    c: "Functional evidence of disease that can be determined objectively by the observer",
    d: "Coolong of the body after death.",
    e: "Study of the cause of a disease",
    correct: "b",
  },
  {
    question: "............. refers to death of the entire body where there is ceasation of a ll body functions.",
    a: "Autopsy",
    b: "Post mortem putrefaction",
    c: "Pathogenesis",
    d: "Somatic Death",
    e: "Post mortem autolysis",
    correct: "d",
  },
  {
    question: "The stiffening of all muscles after death is called.............",
    a: "Rigor Mortis",
    b: "Algor mortis",
    c: "Somatc death",
    d: "Biopsy",
    e: "Livor Mortis",
    correct: "a",
  },
  {
    question: "............. refers to self digestion by enzymes that are present within or released into the cytoplasm of cells after death. It is due to total diffuse anoxia .",
    a: "Autopsy",
    b: "Post mortem putrefaction",
    c: "Pathogenesis",
    d: "Somatic Death",
    e: "Post mortem autolysis",
    correct: "e",
  },
  {
    question: "............. refers to cell death which accompanies or occurs after the death of the entire body.",
    a: "Autopsy",
    b: "Post mortem putrefaction",
    c: "Postmortem changes",
    d: "Somatic Death",
    e: "Post mortem autolysis",
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

      <button onclick='window.location.href="basiclaguage.html" '> Reload </button>
      `
      
    }
  }
})