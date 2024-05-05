const quizData = [
  {
    question: ".................. made the first identification of chromosome and their correct number in humans in 1956.",
    a: "Robert Koch",
    b: "Thomas Addison",
    c: "Watson and Crick",
    d: "Rudolf Virchow",
    e: "Tijo and Levan",
    correct: "e",
  },
  {
    question: "Mythological Greeks had............ and ............... as the principle gods of healing.",
    a: "Arkilis and Apollo",
    b: "Dhanvantri and Asclepios",
    c: "Asclepios and Apollo",
    d: "Jesus and God",
    e: "Asolepos and Apallo",
    correct: "c",
  },
  {
    question: "According to Celsus, he's first four cardinal signs of infalamation were; swelling, pain, redness, heat. What are the correct terms of these signs in the given order ? ",
    a: "rubor, tumor, calor, dolor",
    b: "tumor, dolor, rubor, calor",
    c: "tumor, calor, dolor, rubor",
    d: "dolor, rubor, calor, tumor",
    e: "calor, tumor, dolor, rubor",
    correct: "b",
  },
  {
    question: "Who descrbed the human Oviduct ?",
    a: "Thomas Hodgkin",
    b: "Fabricius",
    c: "G.H.A Hansen",
    d: "F. Gabriel",
    e: "Robert Koch",
    correct: "d",
  },
  {
    question: "The Stethoscope was invented by...............",
    a: "R.T.H. Laennec",
    b: "Thomas Addison",
    c: "Louis Pasteur",
    d: "Karl Landsteiner",
    e: "Ruska and Lorries",
    correct: "a",
  },
  {
    question: "Orthodox Indians Beleived in.................. as the pox goddess?",
    a: "Mata Sheetala Devi",
    b: "",
    c: "Sapnish",
    d: "Chinese",
    e: "India",
    correct: "a",
  },
  {
    question: "Who is the father of surgeon ?",
    a: "John Hunter",
    b: "Anthony van Leeuwenhoek",
    c: "Marcello Malpighi",
    d: "George N. Papanicolaou",
    e: "Hippocrates",
    correct: "a",
  },
  {
    question: "Whos is considered to be the father of exfoliative cytology ?",
    a: "John Hunter",
    b: "Anthony van Leeuwenhoek",
    c: "Marcello Malpighi",
    d: "George N. Papanicolaou",
    e: "Hippocrates",
    correct: "d",
  },
  {
    question: "The existence of major human blood groups was described by.............. ",
    a: "R.T.H. Laennec",
    b: "Thomas Addison",
    c: "Louis Pasteur",
    d: "Karl Landsteiner",
    e: "Ruska and Lorries",
    correct: "d",
  },
  {
    question: ".................. made the first discripton ofthe structure of DNA of the cell in 1953.",
    a: "Robert Koch",
    b: "Thomas Addison",
    c: "Watson and Crick",
    d: "Rudolf Virchow",
    e: "Tijo and Levan",
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

      <button onclick='window.location.href="histology.html" '> Reload </button>
      `
      
    }
  }
})