const quizData = [
  {
    question: "Necrosis......",
    a: "Is an adaptive response to tissue injury",
    b: "Is characterised by pathological calcification",
    c: "Occur in dead bodies",
    d: "Is synonymous with apoptosis",
    correct: "",
  },
  {
    question: "A",
    a: "Nuclear chromatin clamping",
    b: "Formaton of cytoplasmic bleds",
    c: "Mitochondria sweelling ",
    d: "Nuclear pyknosis",
    correct: "",
  },
  {
    question: "Which of these groups of amino acids are entirely Hydrophobic?",
    a: "Phenylalanine, Valine, Isoleucine",
    b: "Histidine, Glycine, Valine",
    c: "Proline, Aspartc acid, Arginine",
    d: "Tryptophan, Glutamine, Alanine",
    e: "Phenylalanine, Serine, Tryosine",
    correct: "a",
  },
  {
    question: "Coagulative necrosis ",
    a: "Is caused by bacterial infection",
    b: "Has a chees-like gross appearance",
    c: "May be caused by thrombosis",
    d: "is a reversible change",
    correct: "",
  },
  {
    question: "WHat is your brothers name? ",
    a: "Mwelwa",
    b: "Joses",
    c: "Changwe",
    d: "Mwitwa",
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

      <button onclick='window.location.href="response.html" '> Reload </button>
      `
      
    }
  }
})