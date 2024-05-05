const quizData = [
  {
    question: "Which one of the following statements, concernng asparagine is correct ?",
    a: "Contains an amide group",
    b: "Has Asp as its three-letter abbreviation",
    c: "Classified as an acidic amino acid",
    d: "Has a charged polar side chain",
    e: "Doesn't have a chiral carbon",
    correct: "a",
  },
  {
    question: "Which amino acid is capable of forming disulfide bonds ?",
    a: "Glycine",
    b: "Proline",
    c: "Histidine",
    d: "Cysteine",
    e: "Isoleucine",
    correct: "d",
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
    question: "................... exist in two non-superimposable mirror imageof each other",
    a: "Anomers",
    b: "Epimers",
    c: "Enantiomers",
    d: "Mutaroters",
    e: "Chrial carbons", 
    correct: "c",
  },
  {
    question: "A chiral carbon of an amino acid arises from the fact that it........",
    a: "is symmetric",
    b: "is bonded to both amino and carboxylic groups",
    c: "is bonded to four different chemical groups",
    d: "has net charge zero",
    e: "assumes an L configuration",
    correct: "c",
  },
  {
    question: "Most of the amino acids found in humans are ......... ",
    a: "L-isomers",
    b: "D- isomers",
    c: "Optical isomers",
    d: "D and L-isomers",
    e: "Optically inactive",
    correct: "a",
  },
  {
    question: "Essential amino acids are...........",
    a: "synthesized by the body",
    b: "obtained from the diet",
    c: "not involved in the formation of peptides",
    d: "Optically inactive",
    e: "all acidic",
    correct: "b",
  },
  {
    question: "Aminoa acids that makeup portions of transmembrane protein are most likely to be......",
    a: "Essential ",
    b: "Non essential",
    c: "Hydrophobic",
    d: "glycosylated",
    e: "acetylated",
    correct: "c",
  },
  {
    question: "Which one of the following statements concerning glutamine is correct?",
    a: "contains an amide group ",
    b: "has glu as its three letter abbreviation",
    c: "classified as an acidic amino acid",
    d: "has charged polar side chain",
    e: "doesnt have a chiral carbon",
    correct: "a",
  },
  {
    question: "What amino acid is capable fo forming a disulphide bond?",
    a: "Glycine",
    b: "proline",
    c: "histidine",
    d: "cysteine",
    e: "isoleucine",
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

      <button onclick='window.location.href="tada.html" '> Reload </button>
      `
      
    }
  }
})