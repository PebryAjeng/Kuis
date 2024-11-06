const dataQuestions = [
  {
      q: "Apa fungsi utama dari tag <a> dalam HTML?",
      a: "Menampilkan gambar",
      b: "Membuat daftar",
      c: "Membuat tautan",
      d: "Mengatur layout halaman",
      correct: "a",
  },
  {
    q: "CSS digunakan untuk tujuan apa dalam pengembangan web?",
    a: "Mengatur struktur konten",
    b: "Mengelola interaksi basis data",
    c: "Mengatur tampilan dan gaya halaman",
    d: "Membuat fungsi dinamis",
    correct: "c",
},
{
    q: "Apa fungsi dari atribut alt pada tag <img> dalam HTML?",
    a: "Mengatur ukuran gambar",
    b: "Menampilkan teks alternatif jika gambar tidak dapat dimuat",
    c: "Menambahkan tautan ke gambar",
    d: "Menentukan posisi gambar di halaman",
    correct: "b",
},
  {
      q: "Apa arti dari DOM dalam konteks pemrograman web?",
      a: "Document Object Model",
      b: "Data Object Model",
      c: "Dynamic Object Management",
      d: "Document Orientation Mode",
      correct: "a",
  },
  {
      q: "Dalam CSS, apakah fungsi dari property margin?",
      a: "Mengatur warna latar belakang",
      b: "Mengatur ruang di luar elemen",
      c: "Mengatur ukuran teks",
      d: "Mengatur tampilan border",
      correct: "b",
  }
];

const quiz = document.getElementById('quiz')
const answers = document.querySelectorAll('.answer')
const question = document.getElementById('question')
const a = document.getElementById('a_text')
const b = document.getElementById('b_text')
const c = document.getElementById('c_text')
const d = document.getElementById('d_text')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
  deselectAnswers()

  const currentQuestion = dataQuestions[currentQuiz]
  question.innerText = currentQuestion.q 
  a.innerText = currentQuestion.a
  b.innerText = currentQuestion.b
  c.innerText = currentQuestion.c
  d.innerText = currentQuestion.d
}

function deselectAnswers() {
  answers.forEach(answer => answer.checked = false)
}

function getSelected() {
  let selectedAnswer
  answers.forEach(answer => {
      if (answer.checked) {
          selectedAnswer = answer.id
      }
  });
  return selectedAnswer
}

const submitBtn = document.getElementById('submit')

submitBtn.addEventListener('click', () => {
  const selectedAnswer = getSelected()
  if (selectedAnswer) {
      if (selectedAnswer === dataQuestions[currentQuiz].correct) {
          score++
      }

      currentQuiz++

      if (currentQuiz < dataQuestions.length) {
          loadQuiz()
      } else {
          quiz.innerHTML = `
          <h2>You answered ${score}/${dataQuestions.length} questions correctly</h2>
          <button onclick="location.reload()">Reload</button>
          `
      }
  }
})