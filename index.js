document.addEventListener('DOMContentLoaded', () => {
    let currentNote;
    let guessTimeout;
    let audio;
    let isGameActive = false;
    let correctGuesses = 0;
    let incorrectGuesses = 0;
    function updateProgress() {
        document.getElementById('correct-guesses').textContent = correctGuesses;
        document.getElementById('incorrect-guesses').textContent = incorrectGuesses;
    }

    function saveProgress() {
        localStorage.setItem('correctGuesses', correctGuesses);
        localStorage.setItem('incorrectGuesses', incorrectGuesses);
    }

    function loadProgress() {
        correctGuesses = parseInt(localStorage.getItem('correctGuesses')) || 0;
        incorrectGuesses = parseInt(localStorage.getItem('incorrectGuesses')) || 0;
        updateProgress();
    }

    function makeSound(key) {
        if (audio) { 
            audio.pause();
            audio.currentTime = 0;
        }
        audio = new Audio(`sounds/${key}-note.wav`);
        audio.play();
    }

    function playRandomNote() {
        const notes = ['c', 'd', 'e', 'f', 'g', 'a', 'b'];
        currentNote = notes[Math.floor(Math.random() * notes.length)];
        makeSound(currentNote);
        guessTimeout = setTimeout(() => {
            if (currentNote) {
                alert('Better luck next time!');
                incorrectGuesses++;
                updateProgress();
                saveProgress();
                stopGame();
            }
        }, 10000); 
    }

    function startGame() {
        if (isGameActive) return; 
        isGameActive = true;
        playRandomNote();
    }

    function stopGame() {
        clearTimeout(guessTimeout);
        guessTimeout = null;
        currentNote = null;
        isGameActive = false; 
        if (audio) { 
            audio.pause();
            audio.currentTime = 0;
        }
    }

    function checkGuess(note) {
        if (!isGameActive) return; 

        if (note === currentNote) {
            alert('Correct!');
            clearTimeout(guessTimeout); 
            correctGuesses++;
            updateProgress();
            saveProgress();
            playRandomNote(); 
        } else {
            alert('Incorrect! Game over.');
            incorrectGuesses++;
            updateProgress();
            saveProgress();
            stopGame(); 
        }
    }

    document.getElementById('start-game').addEventListener('click', startGame);
    document.getElementById('stop-game').addEventListener('click', stopGame);

    document.querySelectorAll(".note-btn").forEach(button => {
        button.addEventListener("click", function () {
            const buttonInnerHTML = this.innerHTML.toLowerCase();
            makeSound(buttonInnerHTML);
            checkGuess(buttonInnerHTML);
        });
    });

    document.addEventListener("keydown", function (event) {
        const key = event.key.toLowerCase();
        if (['c', 'd', 'e', 'f', 'g', 'a', 'b'].includes(key)) {
            makeSound(key);
            checkGuess(key);
        }
    });
});
