const quizData = [
  {
    question: "Who is considered to be the father of medicine ?",
    a: "John Hunter",
    b: "Anthony van Leeuwenhoek",
    c: "Marcello Malpighi",
    d: "George N. Papanicolaou",
    e: "Hippocrates",
    correct: "e",
  },
  {
    question: "What was the time period from whence an advancement was made from the Human Anatomy to era of Gross Pathology ?",
    a: "AD 1500 to 1800",
    b: "Prehistoric Time to AD 1500",
    c: "AD 1800 to 1950s",
    d: "Beyond 1800",
    e: "1950s to present times",
    correct: "a",
  },
  {
    question: "What histological stain that was introduced in 1714 and is still being used till date ?",
    a: "glutaraldehyde",
    b: "parafin",
    c: "gram staining",
    d: "formaldehyde",
    e: "saffron",
    correct: "e",
  },
  {
    question: "Who described that organs were composed of tissue and divided the study of morbid anatomy into General Pathology and Systemic Pathology ?",
    a: "John Hunter",
    b: "Xavier Bichat",
    c: "Edward Jenner",
    d: "Vesalius",
    e: "Leonardo da Vinci",
    correct: "b",
  },
  {
    question: "Who is the father of Histology ?",
    a: "John Hunter",
    b: "Anthony van Leeuwenhoek",
    c: "Marcello Malpighi",
    d: "George N. Papanicolaou",
    e: "Hippocrates",
    correct: "c",
  },
  {
    question: "The electron Microscopes were invednted by...............",
    a: "R.T.H. Laennec",
    b: "Thomas Addison",
    c: "Louis Pasteur",
    d: "Karl Landsteiner",
    e: "Ruska and Lorries",
    correct: "e",
  },
  {
    question: "Regarding the history of pathology.......",
    a: "Gabriel Fallopius described human lymphoid tissue",
    b: "Malpighi is known as 'the father of histology' ",
    c: "Rudolf Virchow is known as father of efoliative cytology",
    d: "Tijo and Levan described the structure of DNA",
    e: "",
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

      <button onclick='window.location.href="histology.html" '> Reload </button>
      `
      
    }
  }
})