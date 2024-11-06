const quizData = [
  {
      question: "Apa fungsi utama dari tag <a> dalam HTML?",
      A: "Menampilkan gambar",
      B: "Membuat daftar",
      C: "Membuat tautan",
      D: "Mengatur layout halaman",
      correct: "C",
  },
  {
      question: "CSS digunakan untuk tujuan apa dalam pengembangan web?",
      A: "Mengatur struktur konten",
      B: "Mengelola interaksi basis data",
      C: "Mengatur tampilan dan gaya halaman",
      D: "Membuat fungsi dinamis",
      correct: "C",
  },
  {
      question: "Di bawah ini, manakah pernyataan JavaScript yang benar untuk menampilkan pesan di layar?",
      A: "console.log('Hello')",
      B: "alert('Hello')",
      C: "print('Hello')",
      D: "echo('Hello')",
      correct: "B",
  },
  {
      question: "Apa arti dari 'DOM' dalam konteks pemrograman web?",
      A: "Document Object Model",
      B: "Data Object Model",
      C: "Dynamic Object Management",
      D: "Document Orientation Mode",
      correct: "A",
  },
  {
      question: "Dalam CSS, apakah fungsi dari property margin?",
      A: "Mengatur warna latar belakang",
      B: "Mengatur ruang di luar elemen",
      C: "Mengatur ukuran teks",
      D: "Mengatur tampilan border",
      correct: "B",
  },
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.A;
  b_text.innerText = currentQuizData.B;
  c_text.innerText = currentQuizData.C;
  d_text.innerText = currentQuizData.D;
}

function deselectAnswers() {
  answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
  let answer;
  answerEls.forEach(answerEl => {
      if(answerEl.checked) {
          answer = answerEl.id;
      }
  });
  return answer;
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected();
  if(answer) {
      if(answer === quizData[currentQuiz].correct) {
          score++;
      }

      currentQuiz++;

      if(currentQuiz < quizData.length) {
          loadQuiz();
      } else {
          quiz.innerHTML = `
          <h2>You answered ${score}/${quizData.length} questions correctly</h2>
          <button onclick="location.reload()">Reload</button>
          `;
      }
  }
});
