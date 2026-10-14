// ================= BANK SOAL (50 Soal Persamaan Linear Satu Variabel) =================
const bankSoal = [
    { question: "Jika x + 5 = 12, berapakah nilai x?", options: ["5", "7", "8", "17"], answer: "7" },
    { question: "Jika 2x = 10, berapakah nilai x?", options: ["2", "4", "5", "20"], answer: "5" },
    { question: "Jika 3x - 2 = 7, berapakah nilai x?", options: ["3", "4", "5", "9"], answer: "3" },
    { question: "Jika x / 4 = 3, berapakah nilai x?", options: ["7", "1", "12", "14"], answer: "12" },
    { question: "Jika 5x + 4 = 2x + 16, berapakah nilai x?", options: ["2", "3", "4", "6"], answer: "4" },
    { question: "Jika 70 - x = 67, berapakah nilai x?", options: ["2", "4", "3", "8"], answer: "3" },
    { question: "Teddy membeli 3 buku tulis dan sebuah pensil. Harga pensil Rp2.000, total belanja Rp11.000. Berapakah harga satu buku?", options: ["Rp3.000", "Rp2.000", "Rp4.000", "Rp30.000"], answer: "Rp3.000" },
    { question: "Jika x - 8 = 4, berapakah nilai x?", options: ["4", "10", "12", "16"], answer: "12" },
    { question: "Jika 4x = 24, berapakah nilai x?", options: ["4", "6", "8", "12"], answer: "6" },
    { question: "Jika 2x + 5 = 15, berapakah nilai x?", options: ["3", "5", "10", "20"], answer: "5" },
    { question: "Jika 3x - 7 = 8, berapakah nilai x?", options: ["3", "4", "5", "15"], answer: "5" },
    { question: "Jika x / 2 = 10, berapakah nilai x?", options: ["5", "8", "12", "20"], answer: "20" },
    { question: "Jika 5x = 35, berapakah nilai x?", options: ["5", "6", "7", "8"], answer: "7" },
    { question: "Jika x + 9 = 20, berapakah nilai x?", options: ["9", "10", "11", "29"], answer: "11" },
    { question: "Jika 2x - 4 = 12, berapakah nilai x?", options: ["4", "6", "8", "16"], answer: "8" },
    { question: "Jika 4x + 3 = 19, berapakah nilai x?", options: ["3", "4", "5", "16"], answer: "4" },
    { question: "Jika 3x = 21, berapakah nilai x?", options: ["6", "7", "8", "9"], answer: "7" },
    { question: "Jika x - 15 = 5, berapakah nilai x?", options: ["10", "15", "20", "25"], answer: "20" },
    { question: "Jika 6x = 42, berapakah nilai x?", options: ["6", "7", "8", "9"], answer: "7" },
    { question: "Jika 2x + 8 = 20, berapakah nilai x?", options: ["4", "5", "6", "12"], answer: "6" },
    { question: "Jika 5x - 5 = 20, berapakah nilai x?", options: ["3", "4", "5", "25"], answer: "5" },
    { question: "Jika x / 5 = 6, berapakah nilai x?", options: ["11", "25", "30", "35"], answer: "30" },
    { question: "Jika 7x = 49, berapakah nilai x?", options: ["6", "7", "8", "9"], answer: "7" },
    { question: "Jika x + 12 = 30, berapakah nilai x?", options: ["12", "16", "18", "42"], answer: "18" },
    { question: "Jika 3x + 6 = 18, berapakah nilai x?", options: ["3", "4", "5", "6"], answer: "4" },
    { question: "Jika 4x - 8 = 16, berapakah nilai x?", options: ["4", "6", "8", "24"], answer: "6" },
    { question: "Jika 8x = 64, berapakah nilai x?", options: ["6", "7", "8", "9"], answer: "8" },
    { question: "Jika x - 3 = 14, berapakah nilai x?", options: ["11", "14", "17", "21"], answer: "17" },
    { question: "Jika 2x + 3 = x + 7, berapakah nilai x?", options: ["2", "3", "4", "5"], answer: "4" },
    { question: "Jika 3x - 2 = 2x + 5, berapakah nilai x?", options: ["3", "5", "7", "10"], answer: "7" },
    { question: "Jika 4x + 2 = 2x + 10, berapakah nilai x?", options: ["2", "3", "4", "5"], answer: "4" },
    { question: "Jika 5x - 3 = 3x + 7, berapakah nilai x?", options: ["3", "4", "5", "10"], answer: "5" },
    { question: "Jika 2(x + 3) = 12, berapakah nilai x?", options: ["3", "4", "5", "6"], answer: "3" },
    { question: "Jika 3(x - 1) = 9, berapakah nilai x?", options: ["2", "3", "4", "5"], answer: "4" },
    { question: "Jika 15 - x = 8, berapakah nilai x?", options: ["5", "6", "7", "23"], answer: "7" },
    { question: "Jika 24 - 2x = 10, berapakah nilai x?", options: ["5", "7", "12", "14"], answer: "7" },
    { question: "Jika 35 / x = 5, berapakah nilai x?", options: ["5", "6", "7", "8"], answer: "7" },
    { question: "Jika 48 / 2x = 6, berapakah nilai x?", options: ["4", "6", "8", "12"], answer: "4" },
    { question: "Dua kali suatu bilangan ditambah 7 adalah 19. Bilangan berapakah itu?", options: ["5", "6", "7", "8"], answer: "6" },
    { question: "Tiga kali suatu bilangan dikurangi 4 adalah 11. Bilangan berapakah itu?", options: ["3", "4", "5", "6"], answer: "5" },
    { question: "Keliling persegi dengan panjang sisi (x + 2) cm adalah 24 cm. Berapakah nilai x?", options: ["2", "3", "4", "5"], answer: "4" },
    { question: "Jumlah dua bilangan berurutan adalah 25. Berapakah bilangan yang terkecil?", options: ["11", "12", "13", "14"], answer: "12" },
    { question: "Jika x + 7 = 7, berapakah nilai x?", options: ["0", "1", "7", "14"], answer: "0" },
    { question: "Jika -2x = -12, berapakah nilai x?", options: ["-6", "-4", "4", "6"], answer: "6" },
    { question: "Jika x - (-3) = 10, berapakah nilai x?", options: ["7", "13", "-7", "-13"], answer: "7" },
    { question: "Jika 1/2 x = 8, berapakah nilai x?", options: ["4", "8", "12", "16"], answer: "16" }, // Tanda bintang liar sudah dihapus
    { question: "Jika 3/4 x = 9, berapakah nilai x?", options: ["9", "12", "15", "18"], answer: "12" },
    { question: "Jika 2x + 10 = 0, berapakah nilai x?", options: ["-5", "-2", "2", "5"], answer: "-5" },
    { question: "Jika 100 - 5x = 50, berapakah nilai x?", options: ["5", "10", "15", "20"], answer: "10" },
    { question: "Budi memiliki x kelereng, dan Andi memiliki 5 kelereng lebih banyak dari Budi. Jika total kelereng mereka 15, berapa kelereng Budi?", options: ["5", "10", "15", "20"], answer: "5" }
];

let quizData = [];
let currentQuestionIndex = 0;
let score = 0;

const menuScreen = document.getElementById("menu-screen");
const quizScreen = document.getElementById("quiz-screen");
const scoreScreen = document.getElementById("score-screen");
const leaderboardScreen = document.getElementById("leaderboard-screen");

const startBtn = document.getElementById("start-btn");
const questionEl = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const progressBar = document.getElementById("progress");
const finalScoreEl = document.getElementById("final-score");
const usernameInput = document.getElementById("username");
const saveScoreBtn = document.getElementById("save-score-btn");
const leaderboardList = document.getElementById("leaderboard-list");
const restartBtn = document.getElementById("restart-btn");

function persiapkanSoalKuis() {
    const soalDiacak = [...bankSoal].sort(() => Math.random() - 0.5);
    quizData = soalDiacak.slice(0, 10);
}

startBtn.addEventListener("click", () => {
    menuScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");
    currentQuestionIndex = 0;
    score = 0;
    persiapkanSoalKuis(); 
    showQuestion();
});

function showQuestion() {
    optionsContainer.innerHTML = "";
    const progressPercent = (currentQuestionIndex / quizData.length) * 100;
    progressBar.style.width = `${progressPercent}%`;

    const currentQuiz = quizData[currentQuestionIndex];
    questionEl.innerText = currentQuiz.question;

    currentQuiz.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.classList.add("btn-option");
        button.addEventListener("click", () => checkAnswer(option));
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const currentQuiz = quizData[currentQuestionIndex];
    const poinPerSoal = 100 / quizData.length;
    
    if (selectedOption === currentQuiz.answer) {
        score += poinPerSoal; 
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    progressBar.style.width = "100%";
    quizScreen.classList.add("hidden");
    scoreScreen.classList.remove("hidden");
    finalScoreEl.innerText = Math.round(score);
}

saveScoreBtn.addEventListener("click", () => {
    const name = usernameInput.value.trim();
    if (name === "") {
        alert("Ketik nama lo dulu dong!");
        return;
    }

    let leaderboard = JSON.parse(localStorage.getItem("mathBuddyLeaderboard")) || [];
    leaderboard.push({ name: name, score: Math.round(score) });
    leaderboard.sort((a, b) => b.score - a.score);
    leaderboard = leaderboard.slice(0, 5);

    localStorage.setItem("mathBuddyLeaderboard", JSON.stringify(leaderboard));
    usernameInput.value = "";
    showLeaderboard();
});

function showLeaderboard() {
    scoreScreen.classList.add("hidden");
    leaderboardScreen.classList.remove("hidden");
    leaderboardList.innerHTML = "";

    const leaderboard = JSON.parse(localStorage.getItem("mathBuddyLeaderboard")) || [];

    if (leaderboard.length === 0) {
        leaderboardList.innerHTML = "<li>Belum ada juara. Jadi yang pertama!</li>";
    } else {
        leaderboard.forEach(player => {
            const li = document.createElement("li");
            li.innerText = `${player.name} — ${player.score} Poin`;
            leaderboardList.appendChild(li);
        });
    }
}

restartBtn.addEventListener("click", () => {
    leaderboardScreen.classList.add("hidden");
    menuScreen.classList.remove("hidden");
});
