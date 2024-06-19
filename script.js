
document.addEventListener('DOMContentLoaded', () => {

    for (i = 0; i < document.querySelectorAll(".note-btn").length; i++) {
        document.querySelectorAll(".note-btn")[i].addEventListener("click", function () {
            var buttoninnerhtml = this.innerHTML.toLowerCase();
            makeSound(buttoninnerhtml);
        });
    }

    document.addEventListener("keydown", function (Event) {
        makeSound(Event.key);
    })

    function makeSound(key) {
        switch (key) {
            case 'c':
                {
                    var audio = new Audio("sounds/c-note.wav");
                    audio.play();
                    break;
                }

            case 'd':
                {
                    var audio = new Audio("sounds/d-note.wav");
                    audio.play();
                    break;

                }

            case 'e':
                {
                    var audio = new Audio("sounds/e-note.wav");
                    audio.play();
                    break;
                }
            case 'f':
                {
                    var audio = new Audio("sounds/f-note.wav");
                    audio.play();
                    break;
                }
            case 'g':
                {
                    var audio = new Audio("sounds/g-note.wav");
                    audio.play();
                    break;
                }
            case 'a':
                {
                    var audio = new Audio("sounds/a-note.wav");
                    audio.play();
                    break;
                }

            case 'b':
                {
                    var audio = new Audio("sounds/b-note.wav");
                    audio.play();
                    break;

                }
        }
    }
});
