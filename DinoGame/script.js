const dino = document.querySelector('#dino')
const cacto = document.querySelector('#cacto')
const endgame = document.querySelector('#game-over')
const gameboard = document.querySelector('.game-board')
let highScoreEL = document.querySelector('#highscore span')
let scoreEl = document.querySelector('#score span')
let score = 0
let highScore = 0
highScore = parseInt(localStorage.getItem('highScore'))

highScoreEL.textContent = highScore

function jump() {
    if (!dino.classList.contains('jump')) {
        dino.classList.add('jump')
        setTimeout(() => {
            dino.classList.remove('jump')
        }, 600)
    }
}

document.addEventListener('keydown', (event) => {
    if (event.code === 'Space' || event.key === 'ArrowUp') {
        jump()
    }
})

function gameloop() {
    let dinoRect = dino.getBoundingClientRect()
    let cactoRect = cacto.getBoundingClientRect()

    if (
        dinoRect.right > cactoRect.left &&
        dinoRect.left < cactoRect.right &&
        dinoRect.bottom > cactoRect.top
    ) {
        endgame.style.display = 'block'
        cacto.style.animation = 'none'
        gameboard.style.animation = 'none'
        dino.style.animation = 'none'
        document.removeEventListener('keydown', jump)
        if (score > highScore) {
            localStorage.setItem('highScore', score)
        }
    } else {
        score += 10
        scoreEl.textContent = score
    }
}

setInterval(gameloop, 50)