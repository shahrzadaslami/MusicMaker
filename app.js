window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pad');
    const visual = document.querySelector('.visual');
    const colors = [
        "#ffb703",
        "#d00000",
        "#e63946",
        "#b5179e",
        "#bc6c25",
    ];

    //play the sounds
    pads.forEach((pad, index) => {
        pad.addEventListener('click', function () {
            sounds[index].currentTime = 0;
            sounds[index].play();

            createBubles(index);
        });
    });


    //Visual effects
    const createBubles = index => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.background = colors[index];
        bubble.style.animation = 'jump 0.7s ease';
        bubble.addEventListener("animationend", function () {
            visual.removeChild(this);
        })
    }
});