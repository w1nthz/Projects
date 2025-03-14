const dino = document.querySelector('#dino')
const cacto = document.querySelector('#cacto')
const endgame = document.querySelector('#game-over')

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

function colisao() {
    let dinoRect = dino.getBoundingClientRect()
    let cactoRect = cacto.getBoundingClientRect()

    if (
        dinoRect.right > cactoRect.left &&
        dinoRect.left < cactoRect.right &&
        dinoRect.bottom > cactoRect.top
    ) {
        endgame.style.display = 'block'
        cacto.style.animation = 'none'
        document.removeEventListener('keydown', jump)
    }
}

setInterval(colisao, 50)