let hiScore = 0;

function start() {
    const finishGame = (cactus, cloud) => {
        cactus.style.animationPlayState = 'paused';
        cloud.style.animationPlayState = 'paused';

        const gameOver = document.getElementById('gameOver');
        gameOver.style.display = 'block';
        console.log('counterVal.textContent: ', counterVal.textContent*1);
    };

    const dino = document.getElementById('dino');
    const cloud = document.getElementById('cloud');
    const cactus = document.getElementById('cactus');
    const counterVal = document.getElementById('counterVal');

    cactus.style.animationPlayState = 'running';
    cloud.style.animationPlayState = 'running';

    document.addEventListener('keydown', function(event) {
        jump();
    });

    function jump() {
        if (dino.classList !== 'jump') {
            dino.classList.add('jump');
        }

        setTimeout(function() {
            dino.classList.remove('jump');
        }, 300)
    }

    let incrementCounter = setInterval(function() {
        counterVal.textContent = counterVal.textContent*1 + 2;
    },200);

    let cloudPosition = setInterval(function() {
        let topPosition = Math.floor(Math.random() * (50 - 10)) + 10;
        cloud.style.top = `${topPosition}px`;
    }, 2300);

    let isAlive = setInterval(function() {
        let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
        let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));

        if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
            clearInterval(incrementCounter);
            clearInterval(isAlive);
            clearInterval(cloudPosition);
            finishGame(cactus, cloud);
            hiScore = counterVal.textContent*1;
        }
    }, 10);
}